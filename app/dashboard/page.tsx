import { UserButton, currentUser } from '@clerk/nextjs'

export default async function Dashboard() {
  const user = await currentUser()
  
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-linear-to-br from-indigo-50 via-white to-pink-50 p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-black bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hey {user?.firstName || 'there'}!
            </h1>
            <p className="text-xl text-gray-600 mt-2">Your syllabus → calendar magic awaits ✨</p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
        
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50">
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-semibold mb-4 text-gray-800">
                📚 Paste Syllabus Here
              </label>
              <textarea 
                className="w-full h-40 p-6 border-2 border-dashed border-indigo-300 rounded-2xl text-lg resize-vertical focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
                placeholder="CS 101 Syllabus... Assignment 1 due Feb 15, Midterm March 3..."
              />
            </div>
            <button className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200">
              ✨ Extract Dates → Build Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
