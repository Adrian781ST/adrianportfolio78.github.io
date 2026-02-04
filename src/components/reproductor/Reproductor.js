import React, { useEffect, useRef, useState } from "react";
import sonido from "../../assests/audio/rename.mp3";

function Reproductor() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.5)",
    border: "2px solid #87CEEB",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    color: "#87CEEB",
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={togglePlay}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
      <audio ref={audioRef} src={sonido} loop={true} />
    </div>
  );
}

export default Reproductor;
