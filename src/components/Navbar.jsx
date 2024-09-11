const Navbar = () => {
  return (
    <nav className="flex z-10 justify-between items-center p-3 fixed min-w-full backdrop-blur-sm">
      <div className="bg-transparent"><h1 className="text-3xl font-bold"><span className="bg-white logo">Resuelve</span><span>Ya!</span></h1></div>

      <form className="w-[50%] max-w-xl">
        <input type="text" className="outline-none rounded-full w-full max-w-xl: text-black bg-white/95 p-1 px-5" placeholder="Que estas buscando...?"/>
      </form>

      <ul className="flex gap-3 list-none text-xl font-bold ">
        <li className="">INICIAR SESION</li>
        <li>REGISTRARSE</li>
      </ul>
    </nav>
  )
}

export default Navbar