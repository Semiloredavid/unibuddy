import { SignUpButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-900/50 to-gray-950 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with enhanced glow */}
          <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:scale-105 transition-all duration-500"></div>
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text">Unibuddy</span>
            </h1>
          </div>
          
          {/* Enhanced subtitle card */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-slate-900/50 transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <p className="relative text-lg md:text-2xl lg:text-3xl font-light text-gray-200/90 py-10 px-8 tracking-wide leading-relaxed">
              One upload. Full semester planned.
              </p>
            </div>
          </div>
{/* Second enhanced subtitle card (click to sign up) */}
<SignUpButton mode="redirect">
  <div className="max-w-3xl mx-auto mb-16">
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-purple-900/30 transform group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      <div className="relative w-full py-6 px-8">
        <p className="text-lg md:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
          Sign up to get started
        </p>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>
</SignUpButton>


          {/* Enhanced footer accent */}
          <div className="space-y-6 pt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto w-64 md:w-96"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs md:text-sm text-gray-400/80 font-mono tracking-wider">
              <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-white/10"></span>
              <span className="hidden sm:inline">•</span>
              <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-white/10"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}