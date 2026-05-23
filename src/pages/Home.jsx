import Scene from "../components/Scene";

import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="bg-[#f5f5f7] min-h-screen">

      <Navbar />

      {/* HERO */}

      <section
        className="
        flex
        flex-col
        items-center

        pt-24

        px-4
        sm:px-6
        lg:px-10
      "
      >

        {/* TÍTULO */}

        <h1
          className="
          text-5xl
          sm:text-6xl
          lg:text-7xl

          font-semibold

          mt-10

          text-black

          text-center
        "
        >

          iPhone

        </h1>

        {/* SUBTÍTULO */}

        <p
          className="
          text-lg
          sm:text-2xl
          lg:text-3xl

          mt-4

          text-gray-700

          text-center
        "
        >

          Dile hola a la nueva generación.

        </p>

        {/* BOTONES */}

        <div
          className="
          flex

          flex-col
          sm:flex-row

          gap-4

          mt-8
        "
        >

          <button
            className="
            bg-blue-500

            text-white

            px-8
            py-4

            rounded-full

            hover:scale-105

            transition
          "
          >

            Más información

          </button>

          <Link
            to="/iphone"
            className="
            border
            border-blue-500

            text-blue-500

            px-8
            py-4

            rounded-full

            text-center

            hover:bg-blue-500
            hover:text-white

            transition
          "
          >

            Comprar el iPhone

          </Link>

        </div>

        {/* ESCENA 3D */}

        <div
          className="
          w-full

          h-[400px]
          sm:h-[500px]
          lg:h-[700px]
        "
        >

          <Scene />

        </div>

      </section>

    </div>

  );
}

export default Home;