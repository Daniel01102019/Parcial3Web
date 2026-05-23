import { useState } from "react";

import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

import Scene from "../components/Scene";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function Iphone() {

  const [color, setColor] =
    useState("Naranja");

  const [storage, setStorage] =
    useState("256 GB");

  const [quantity, setQuantity] =
    useState(1);

  // PRECIOS SEGÚN CAPACIDAD

  let price = 6450000;

  if (storage === "512 GB") {

    price = 7670000;

  }

  if (storage === "1 TB") {

    price = 8800000;

  }

  const { addToCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f5f5f7] pt-24">

      <Navbar />

      {/* CONTENEDOR PRINCIPAL */}

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-10

        py-10

        grid
        grid-cols-1
        lg:grid-cols-2

        gap-10
        lg:gap-20

        items-center
      "
      >

        {/* IZQUIERDA - MODELO 3D */}

        <div
          className="
          w-full

          h-[400px]
          sm:h-[500px]
          lg:h-[700px]

          bg-white
          rounded-[40px]
          shadow-xl
        "
        >

          <Scene color={color} />

        </div>

        {/* DERECHA - CONFIGURACIÓN */}

        <div>

          {/* TÍTULO */}

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-semibold
            text-black
          "
          >

            iPhone 17 Pro

          </h1>

          {/* SUBTÍTULO */}

          <p
            className="
            text-gray-500

            text-base
            sm:text-lg
            lg:text-xl

            mt-4
          "
          >

            Potencia, Titanio e Innovación.

          </p>

          {/* PRECIO */}

          <h2
            className="
            text-3xl
            sm:text-4xl

            font-semibold
            text-black

            mt-8
          "
          >

            ${price.toLocaleString("es-CO")}

          </h2>

          {/* COLOR */}

          <div className="mt-12">

            <h2 className="text-2xl font-semibold text-black">

              Color - {color}

            </h2>

            <div className="flex gap-5 mt-6">

              {/* NARANJA */}

              <button
                onClick={() =>
                  setColor("Naranja")
                }
                className={`
                  w-12 h-12
                  sm:w-14 sm:h-14

                  rounded-full

                  bg-orange-400

                  ${
                    color === "Naranja"
                      ? "border-4 border-blue-500"
                      : "border border-gray-300"
                  }
                `}
              />

              {/* BLANCO */}

              <button
                onClick={() =>
                  setColor("Blanco")
                }
                className={`
                  w-12 h-12
                  sm:w-14 sm:h-14

                  rounded-full

                  bg-gray-100

                  ${
                    color === "Blanco"
                      ? "border-4 border-blue-500"
                      : "border border-gray-300"
                  }
                `}
              />

              {/* AZUL */}

              <button
                onClick={() =>
                  setColor("Azul")
                }
                className={`
                  w-12 h-12
                  sm:w-14 sm:h-14

                  rounded-full

                  bg-blue-900

                  ${
                    color === "Azul"
                      ? "border-4 border-blue-500"
                      : "border border-gray-300"
                  }
                `}
              />

            </div>

          </div>

          {/* CAPACIDAD */}

          <div className="mt-10">

            <h2 className="text-2xl font-semibold text-black">

              Capacidad

            </h2>

            <div className="flex flex-col gap-4 mt-4">

              {/* 256 */}

              <button
                onClick={() =>
                  setStorage("256 GB")
                }
                className={`

                  rounded-2xl

                  p-4
                  sm:p-6

                  text-base
                  sm:text-xl

                  text-black

                  border
                  transition

                  ${
                    storage === "256 GB"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }
                `}
              >

                256 GB

              </button>

              {/* 512 */}

              <button
                onClick={() =>
                  setStorage("512 GB")
                }
                className={`

                  rounded-2xl

                  p-4
                  sm:p-6

                  text-base
                  sm:text-xl

                  text-black

                  border
                  transition

                  ${
                    storage === "512 GB"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }
                `}
              >

                512 GB

              </button>

              {/* 1TB */}

              <button
                onClick={() =>
                  setStorage("1 TB")
                }
                className={`

                  rounded-2xl

                  p-4
                  sm:p-6

                  text-base
                  sm:text-xl

                  text-black

                  border
                  transition

                  ${
                    storage === "1 TB"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }
                `}
              >

                1 TB

              </button>

            </div>

          </div>

          {/* CANTIDAD */}

          <div className="mt-12">

            <h2 className="text-2xl font-semibold text-black">

              Cantidad

            </h2>

            <div
              className="
              flex
              items-center
              gap-8

              bg-white

              rounded-2xl

              w-fit

              px-8
              py-5

              mt-6

              shadow

              border
              border-gray-200
            "
            >

              {/* MENOS */}

              <button
                className="
                text-3xl
                text-black

                hover:text-blue-500
                transition
              "
                onClick={() =>

                  quantity > 1 &&

                  setQuantity(quantity - 1)

                }
              >

                -

              </button>

              {/* NÚMERO */}

              <span
                className="
                text-2xl
                font-semibold
                text-black
              "
              >

                {quantity}

              </span>

              {/* MÁS */}

              <button
                className="
                text-3xl
                text-black

                hover:text-blue-500
                transition
              "
                onClick={() =>

                  setQuantity(quantity + 1)

                }
              >

                +

              </button>

            </div>

          </div>

          {/* BOTÓN */}

          <button

            onClick={() => {

              addToCart({

                model: "iPhone 17 Pro",

                color,

                storage,

                quantity,

                price

              });

              navigate("/cart");

            }}

            className="

            mt-14

            w-full
            sm:w-fit

            bg-blue-500
            text-white

            px-8
            sm:px-12

            py-4
            sm:py-5

            rounded-full

            text-lg
            sm:text-xl

            hover:scale-105

            transition

            shadow-lg
          "
          >

            Añadir al carrito

          </button>

        </div>

      </div>

    </div>

  );
}