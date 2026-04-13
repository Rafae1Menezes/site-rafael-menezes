import Image from "next/image"
import icon from "./icon.svg"
import globo from "./globo.svg"

export const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 w-full 
      bg-white/10 backdrop-blur-sm 
      border-b border-white/30
      shadow-[0_8px_18px_rgba(0,0,0,0.02)]">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#" className="text-black">
          <div className="flex items-center gap-2">
            
            <span className="font-semibold text-xl ">
              RAFAEL MENEZES
            </span>
          </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
           {["Início", "Meu trabalho", "Artigos", "Carreira", "Formação", "Stack", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm text-gray-500 hover:text-gray-900 transition-colors py-0.5 highlight-link"
          
            >
              {item}
            </a>
          ))}
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors border border-b-blue-950 px-2  rounded-full flex flex-row gap-1">
              Português
              <Image src={globo} width={15} height={15} alt="account icon" />
            </a>
          </div>

        </div>
      </div>
      
      {/* Highlight */}
  <div className="  h-[1px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

    </nav>
  )
}