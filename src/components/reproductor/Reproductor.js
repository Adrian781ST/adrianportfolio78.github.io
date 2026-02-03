import React, { useEffect, useRef } from "react";
import sonido from "../../assests/audio/rename.mp3";

function Reproductor() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  }, []);

  return <audio ref={audioRef} src={sonido} loop={true} autoPlay />;
}

export default Reproductor;
