import React from "react";
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1 style={{ fontSize: "60px" }}>
        LA JUNTADA IPN
      </h1>

      <p style={{ fontSize: "22px", color: "#ccc" }}>
        Música, palabra y compañía las 24 horas
      </p>

      <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "20px 40px",
          borderRadius: "15px",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "30px"
        }}
        onClick={() => {
          window.open(
            "https://streampanel.online:8026/stream",
            "_blank"
          );
        }}
      >
        ▶ Escuchar Radio
      </button>

      <div style={{ marginTop: "60px" }}>
        <h2>Programación</h2>

        <p>08:00 - Mañanas de Esperanza</p>
        <p>18:00 - Los de Afuera</p>
        <p>22:00 - Alabanza Night</p>
      </div>
    </div>
  );
}