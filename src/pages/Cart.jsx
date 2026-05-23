import { useContext } from "react";

import Navbar from "../components/Navbar";

import { CartContext } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

export default function Cart() {

  const {

    cartItems,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity

  } = useContext(CartContext);

  // TOTAL GENERAL

  const total = cartItems.reduce(

    (acc, item) =>

      acc + (item.price * item.quantity),

    0

  );

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f5f5f7] pt-24 px-4 sm:px-10">

      <Navbar />

      {/* TÍTULO */}

      <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-14">

        Carrito

      </h1>

      {/* HEADERS */}

      <div
        className="
        hidden
        lg:grid

        grid-cols-3

        pb-4

        border-b
        border-gray-400

        text-gray-500
        text-sm

        tracking-widest
        uppercase
      "
      >

        <p>Producto</p>

        <p className="text-center">

          Cantidad

        </p>

        <p className="text-right">

          Total

        </p>

      </div>

      {/* PRODUCTOS */}

      <div className="mt-10 flex flex-col gap-10">

        {cartItems.map((item, index) => (

          <div

            key={index}

            className="
            grid

            grid-cols-1
            lg:grid-cols-3

            gap-10

            items-center

            bg-white

            p-8

            rounded-3xl

            shadow
          "

          >

            {/* IZQUIERDA */}

            <div className="flex gap-6 items-center">

              {/* IMAGEN */}

              <div
                className="
                w-24
                h-24

                bg-[#f5f5f7]

                rounded-2xl

                shadow

                flex
                items-center
                justify-center
              "
              >

                <img
                  src="/apple.png"
                  alt="iphone"
                  className="w-10"
                />

              </div>

              {/* INFO */}

              <div>

                <p
                  className="
                  text-xs

                  tracking-[4px]

                  text-gray-400

                  uppercase
                "
                >

                  Apple

                </p>

                <h2
                  className="
                  text-2xl
                  sm:text-4xl

                  font-semibold

                  text-black

                  mt-1
                "
                >

                  {item.model}

                </h2>

                <p className="text-gray-500 mt-3">

                  Color: {item.color}

                </p>

                <p className="text-gray-500">

                  Capacidad: {item.storage}

                </p>

              </div>

            </div>

            {/* CENTRO */}

            <div className="flex flex-col items-center">

              <div
                className="
                flex
                items-center

                gap-8

                border
                border-gray-400

                rounded-xl

                px-6
                py-3
              "
              >

                {/* MENOS */}

                <button

                  onClick={() =>

                    decreaseQuantity(index)

                  }

                  className="
                  text-black
                  text-xl

                  hover:text-blue-500

                  transition
                "
                >

                  -

                </button>

                {/* CANTIDAD */}

                <span
                  className="
                  text-black

                  font-semibold

                  text-lg
                "
                >

                  {item.quantity}

                </span>

                {/* MÁS */}

                <button

                  onClick={() =>

                    increaseQuantity(index)

                  }

                  className="
                  text-black
                  text-xl

                  hover:text-blue-500

                  transition
                "
                >

                  +

                </button>

              </div>

              {/* ELIMINAR */}

              <button

                onClick={() => {

                  removeFromCart(index);

                  if (cartItems.length === 1) {

                    navigate("/iphone");

                  }

                }}

                className="
                text-blue-500

                mt-4

                hover:underline
              "
              >

                Eliminar

              </button>

            </div>

            {/* DERECHA */}

            <div className="text-left lg:text-right">

              <p className="text-gray-400 line-through">

                ${(item.price * item.quantity * 1.1).toLocaleString("es-CO")}

              </p>

              <p
                className="
                text-2xl
                sm:text-3xl

                font-semibold

                text-black
              "
              >

                ${(item.price * item.quantity).toLocaleString("es-CO")}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* RESUMEN */}

      <div className="mt-20 flex justify-end">

        <div
          className="
          bg-white

          p-10

          rounded-3xl

          shadow-xl

          w-full
          max-w-md
        "
        >

          <h2 className="text-3xl font-semibold text-black">

            Resumen

          </h2>

          {/* SUBTOTAL */}

          <div className="flex justify-between mt-8 text-xl">

            <p className="text-gray-500">

              Subtotal

            </p>

            <p className="text-black font-semibold">

              ${total.toLocaleString("es-CO")}

            </p>

          </div>

          {/* ENVÍO */}

          <div className="flex justify-between mt-4 text-xl">

            <p className="text-gray-500">

              Envío

            </p>

            <p className="text-black font-semibold">

              Gratis

            </p>

          </div>

          {/* TOTAL */}

          <div
            className="
            border-t

            mt-8
            pt-8

            flex
            justify-between
          "
          >

            <p className="text-2xl font-semibold">

              Total

            </p>

            <p className="text-3xl font-bold text-black">

              ${total.toLocaleString("es-CO")}

            </p>

          </div>

          {/* CHECKOUT */}

          <button
            className="
            w-full

            mt-10

            bg-black
            text-white

            py-5

            rounded-full

            text-xl

            hover:scale-105

            transition
          "
          >

            Checkout

          </button>

        </div>

      </div>

    </div>

  );
}