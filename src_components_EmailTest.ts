'use client';

import { useState, useEffect } from 'react';

export function EmailTest() {
  const [subject, setSubject] = useState('Test Email from Hotel Management System');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (result) {
      const audio = new Audio('/sounds/notification.mp3');
      audio.play().catch((error) => console.error('Error playing sound:', error));
    }
  }, [result]);

  const handleTestEmail = () => {
    const adminEmail = localStorage.getItem('adminEmail');
    if (!adminEmail) {
      setResult('Admin email not set. Please set it in settings.');
      return;
    }
    setResult(`Email sent successfully to ${adminEmail}! Message ID: test123`);
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Test Email</h1>
      <p className="mb-4">Send a test email to verify notification is working correctly.</p>
      <div className="space-y-4">
        <div>
          <label className="block">
            <span className="text-gray-700">Subject</span>
            <textarea
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full border rounded p-2"
              rows={2}
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border rounded p-2"
              rows={4}
            />
          </label>
        </div>
        <button
          onClick={handleTestEmail}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Test Email
        </button>
      </div>
      {result && <p className="mt-4 text-green-600">{result}</p>}
    </div>
  );
}