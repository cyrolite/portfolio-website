export default function Navbar(){
  return(
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md p-5">
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/nicholas-yap-b6069b20b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/cyrolite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}