export const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Início", href: "#" },
    { label: "Meu trabalho", href: "#" },
    { label: "Artigos", href: "#" },
    { label: "Carreira", href: "#" },
    { label: "Formação", href: "#" },
    { label: "Stack", href: "#" },
    { label: "Contato", href: "#" },
  ];

  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 relative">

      {/* Green line top */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left — name + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Rafael Menezes
            </span>
            <span className="text-xs text-zinc-400 dark:text-zinc-600">
              Senior Frontend Engineer · Tech Lead
            </span>
          </div>

          {/* Center — nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — copyright */}
          <p className="text-xs text-zinc-400 dark:text-zinc-600 flex-shrink-0">
            © {year}
          </p>

        </div>
      </div>

    </footer>
  );
};