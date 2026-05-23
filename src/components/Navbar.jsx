import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full h-14 flex items-center justify-center gap-10 text-sm text-gray-700 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">

      {/* LOGO APPLE */}

      <Link to="/">

        <img
          src="/apple.png"
          alt="Apple"
          className="w-5 h-5 object-contain cursor-pointer"
        />

      </Link>

      <Link to="/">
        Inicio
      </Link>

      <Link to="/iphone">
        iPhone
      </Link>

      <Link to="/cart">
        Carrito
      </Link>

    </nav>

  );
}