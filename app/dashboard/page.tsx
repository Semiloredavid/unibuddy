'use client'

import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn, 
  UserButton 
} from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <header className="flex justify-between items-center">
              <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Unibuddy Dashboard
              </h1>
              <UserButton />
            </header>
            
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">
                📚 Upload Syllabus
              </h2>
              <textarea 
                className="w-full h-48 p-6 border-2 border-dashed border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none resize-none text-lg placeholder-gray-500"
                placeholder="Paste your full syllabus text here...&#10;&#10;Examples it detects:&#10;• Assignment 1 due 2/15/2026&#10;• Midterm Exam: March 5th&#10;• Lab report 2026-04-10&#10;• Final May 12"
              />
              <div className="flex gap-4 mt-8">
                <button className="flex-1 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-2xl text-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all">
                  ✨ Parse Dates → Add Tasks
                </button>
                <button disabled className="px-8 py-4 bg-gray-400 text-white rounded-2xl text-xl font-semibold opacity-50 cursor-not-allowed">
                  📅 Export Calendar (.ics)
                </button>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
