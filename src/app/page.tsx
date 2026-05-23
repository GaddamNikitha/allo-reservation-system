"use client";

export default function Home() {

  async function reserveProduct() {

    const response = await fetch("/api/reserve", {
      method: "POST"
    });

    const data = await response.json();

    alert(data.message);
  }

  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1>Allo Health Reservation System</h1>

      <div style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2>iPhone 15</h2>

        <p>Apple smartphone</p>

        <p>Total Units: 10</p>

        <p>Reserved Units: 0</p>

        <button
          onClick={reserveProduct}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Reserve
        </button>
      </div>

      <div style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2>Samsung S24</h2>

        <p>Samsung smartphone</p>

        <p>Total Units: 5</p>

        <p>Reserved Units: 0</p>

        <button
          onClick={reserveProduct}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Reserve
        </button>
      </div>

    </div>
  );
}