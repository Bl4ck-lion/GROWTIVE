export const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`
      glass-card rounded-2xl p-6 
      hover:shadow-xl transition-all duration-300
      hover:scale-[1.02] 
      ${className}
    `}>
      {children}
    </div>
  )
}
