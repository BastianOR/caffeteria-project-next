import "./about.css";

export default function About() {
  return (
    <div className="About">
      <h1>Ven a vernos</h1>
      <div className="about-content">
        <main>
          <p>Por más de un año hemos ofrecido la mejor relación precio calidad 
            de Iquique, ¿qué esperas?</p>
          <p className="findus">¡Encuéntranos en Mallplaza Iquique!</p>
          <h3>Av. Héroes de la Concepción 2555</h3>
          <h4>2do piso</h4>
          <ul>
            <li>Lunes a jueves, de 10:30 a 20:30</li>
            <li>Viernes y sábados, de 10:30 a 21:00</li>
            <li>Domingos de 11:00 a 20:00</li>
          </ul>
        </main>
        <div className="about-b-side"></div>
      </div>
    </div>
  )
}
