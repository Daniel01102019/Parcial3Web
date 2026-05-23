import { useGLTF } from "@react-three/drei";

import { useRef } from "react";

import {

  useFrame,

  useThree

} from "@react-three/fiber";

export default function IphoneModel({ color }) {

  // CONFIGURACIÓN BASE

  let modelPath = "/models/iphone.glb";

  let scale = 35;

  let position = [0, -0.3, 0];

  let rotation = [0, Math.PI / 4, 0];

  // COLOR NARANJA

  if (color === "Naranja") {

    modelPath = "/models/iphone-orange.glb";

    scale = 1.1;

    position = [0, -2.5, 0];

  }

  // COLOR AZUL

  if (color === "Azul") {

    modelPath = "/models/iphone-blue.glb";

    scale = 1.1;

    position = [0, -0.2, 0];

  }

  // CARGAR MODELO

  const model = useGLTF(modelPath);

  const ref = useRef();

  // MOUSE

  const { mouse } = useThree();

  // ANIMACIÓN

  useFrame(() => {

    if (!ref.current) return;

    // ROTACIÓN AUTOMÁTICA

    ref.current.rotation.y += 0.003;

    // PARALAJE SUAVE

    ref.current.rotation.x +=

      (mouse.y * 0.15 - ref.current.rotation.x) * 0.05;

    ref.current.rotation.z +=

      (mouse.x * 0.15 - ref.current.rotation.z) * 0.05;

  });

  return (

    <primitive
      ref={ref}
      object={model.scene}

      scale={scale}

      position={position}

      rotation={rotation}
    />

  );
}