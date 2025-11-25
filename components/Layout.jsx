import GlassNavbar from './GlassNavbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <GlassNavbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  )
}
