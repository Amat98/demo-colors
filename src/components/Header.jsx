const Header = () => {
  return (
    <header
      className="min-h-screen bg-cover bg-fixed bg-center flex justify-center items-center relative"
      style={{ backgroundImage: "url(./bg-header.jpg)" }}
    >
      <div className="header z-10 bg-transparent rounded-md p-6 font-thin">
        <h1 className="color--titles max-w-2xl mx-auto text-5xl rounded-md  p-2 font-semibold text-center">
          Bienvenid@ a <span className="font-bold bg-transparent">Resuelve</span><span className="font-bold">Ya!!</span>
        </h1>
        <h2 className="color--titles rounded-md p-2 max-w-xl mx-auto text-4xl mt-1  text-center">Nosotros si, <span className="font-bold">resolvemos!</span></h2>
        <h3 className="color--titles rounded-md p-2 max-w-3xl text-3xl mt-2  text-center">
          En <span className="text-white bg-transparent font-bold">Resuelve</span><span className="font-bold">Ya!</span>, te conectamos con profesionales calificados para los
          servicios que necesitas, cuando los necesitas. Nuestra plataforma te
          permite encontrar <span>e</span>lectricistas, <span>p</span>intores, <span>f</span>ontaneros y muchos más, de
          manera rápida y sencilla.
        </h3>
      </div>
      <div className="bg-black/70 h-[400px] w-[90%] max-w-[1100px] absolute rounded-full shadow"></div>
    </header>
  );
};

export default Header;
