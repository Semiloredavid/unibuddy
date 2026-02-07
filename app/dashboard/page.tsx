'use client'

import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hey {user?.firstName || 'student'}!
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              📚 Syllabus → 📅 Calendar magic
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Upload Card */}
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50">
          
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Upload Your Syllabus
          </h2>

          {/* Document Upload Input */}
          <div className="max-w-2xl mx-auto">
            <label className="block w-full p-0">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-gray-700/50 backdrop-blur-xl rounded-2xl border-2 border-dashed border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:border-white/40 hover:shadow-purple-500/20"></div>

                <div className="relative p-10 md:p-14 rounded-2xl border-2 border-dashed border-transparent bg-slate-800/30 backdrop-blur-xl shadow-2xl cursor-pointer transition-all duration-300 hover:bg-slate-700/40">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 text-white/60 group-hover:text-white/90 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                  </div>

                  <p className="text-lg md:text-xl font-medium text-white/90 mb-2 text-center">
                    Click to upload syllabus
                  </p>

                  <p className="text-sm text-gray-400 text-center max-w-sm mx-auto">
                    PDF, DOCX, or TXT files up to 10MB. Drag & drop also works.
                  </p>

                  <input 
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    multiple={false}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </label>
          </div>

          {/* Parse Button */}
          <button className="mt-8 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200">
             Create Your Success Now
          </button>

        </div>
      </div>
    </div>
  )
}