const Container = ({ children, className = ""}) => {
  return (
    <div className={`mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container;