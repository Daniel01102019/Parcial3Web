import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

import {
  OrbitControls,
  Environment,
  Float,
  Html
} from "@react-three/drei";

import Iphone from "./IphoneModel";

// LOADER

function Loader() {

  return (

    <Html center>

      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}

        <div
          className="
          w-16
          h-16

          border-4
          border-gray-300

          border-t-black

          rounded-full

          animate-spin
        "
        />

        {/* TEXTO */}

        <p className="text-black text-lg">

          Cargando iPhone...

        </p>

      </div>

    </Html>

  );
}

export default function Scene({ color }) {

  return (

    <Canvas
      camera={{ position: [0, 0, 5] }}
    >

      {/* LUCES */}

      <ambientLight intensity={3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
      />

      {/* HDR */}

      <Environment preset="city" />

      {/* SUSPENSE */}

      <Suspense fallback={<Loader />}>

        {/* MODELO */}

        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
        >

          <Iphone
            key={color}
            color={color}
          />

        </Float>

      </Suspense>

      {/* CONTROLES */}

      <OrbitControls
        enableZoom={false}
      />

    </Canvas>

  );
}