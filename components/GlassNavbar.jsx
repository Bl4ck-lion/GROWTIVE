export default function GlassNavbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[#667eea] font-bold text-lg">G</span>
            </div>
            <h1 className="text-2xl font-bold text-white">GROWTIVE</h1>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Library', 'Study Room', 'Leaderboard'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden glass-card rounded-lg p-2">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </nav>
  )
}
