'use client';

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  const [files, setFiles] = useState<File[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files).slice(0, 6));
    }
  };

  // Parse PDFs
  const handleParse = async () => {
    if (files.length === 0) return;

    setLoading(true);
    setError('');

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      const res = await fetch('/api/parse', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Parsing failed');
      }

      setTasks(data.tasks || []);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  // Download ICS dynamically from tasks
  const handleDownloadICS = async () => {
    if (!tasks.length) return;

    try {
      const res = await fetch('/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate calendar');
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'unibuddy-calendar.ics';
      a.click();

      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Unibuddy Dashboard
          </h1>
          <UserButton />
        </div>

        {/* Upload Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Upload Syllabi (1–6 PDFs)
          </h2>

          <input
            type="file"
            multiple
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 w-full max-w-md px-4 py-6 border-2 border-dashed border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
          />

          {/* Selected Files */}
          <div className="mt-4 space-y-2">
            {files.map((file, i) => (
              <div key={i} className="flex justify-between text-sm text-white/80">
                <span>{file.name}</span>
                <button
                  onClick={() =>
                    setFiles(files.filter((_, idx) => idx !== i))
                  }
                  className="text-red-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleParse}
            disabled={loading || files.length === 0}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {loading ? 'Parsing...' : `Parse ${files.length} File${files.length > 1 ? 's' : ''}`}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* Tasks Table */}
        {tasks.length > 0 && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                📋 Priority Tasks ({tasks.length})
              </h2>

              <button
                onClick={handleDownloadICS}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-xl transition-all"
              >
                📅 Export .ICS
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-left font-bold">Priority</th>
                    <th className="p-4 text-left font-bold">Title</th>
                    <th className="p-4 text-left font-bold">Course</th>
                    <th className="p-4 text-left font-bold">Date</th>
                    <th className="p-4 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            task.priority === 1
                              ? 'bg-red-500'
                              : task.priority === 2
                              ? 'bg-orange-500'
                              : 'bg-green-500'
                          }`}
                        >
                          P{task.priority}
                        </span>
                      </td>
                      <td className="p-4 font-medium">{task.title}</td>
                      <td className="p-4">{task.course}</td>
                      <td className="p-4">{task.date}</td>
                      <td className="p-4 text-sm opacity-90">
                        {task.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}