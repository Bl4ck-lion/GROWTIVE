export const GradientButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-gradient-to-r from-[#667eea] to-[#764ba2]",
    success: "bg-gradient-to-r from-[#4fd1c7] to-[#81e6d9]",
    warning: "bg-gradient-to-r from-[#f6ad55] to-[#fbd38d]"
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]} 
        text-white px-6 py-3 rounded-xl 
        font-semibold transition-all duration-300
        hover:shadow-lg hover:scale-105
        active:scale-95
        shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  )
}
