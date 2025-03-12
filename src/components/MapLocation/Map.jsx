import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map-section">
      <div className="map-text roboto-font">
        <h3>Encuentranos en Area</h3>
        <h4>Carrer Providència 98,BCN</h4>
        <h5>!Te Esperamos!</h5>
      </div>

      <div className="map-container">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4300334677328!2d2.1572361749079945!3d41.408182794706704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2bbd7743c33%3A0xebb09ed251ad4985!2sCarrer%20de%20la%20Provid%C3%A8ncia%2C%2098%2C%20Gr%C3%A0cia%2C%2008024%20Barcelona!5e0!3m2!1ses!2ses!4v1741794137014!5m2!1ses!2ses"
          width="378"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
