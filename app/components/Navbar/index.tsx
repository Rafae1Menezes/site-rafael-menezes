export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 text-lg tracking-tight">
              rafae1menezes.com.br
            </span>
          </div>

          {/* Links centrais */}
          <div className="hidden md:flex items-center gap-6">
            {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>    
        </div>
      </div>
    </nav>
  )
}
