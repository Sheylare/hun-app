import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import workshop from '../../assets/images/Taller-CryBaby.jpg';
import nailart from '../../assets/images/nailartimg.jpg';


function ServiceCards() {
  const services = [
    { id: 1, src: nailart, titulo: "Nail Art", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus suscipit enim, vel viverra elit malesuada et.", link: "/nailart" },
    { id: 2, src: workshop, titulo: "Workshops", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus suscipit enim, vel viverra elit malesuada et.", link: "/workshops" },
  ];

  return (
    <Container style={{ padding: "0 0.2rem" }}>
      {services.map((eachService) => (
        <div key={eachService.id}>
          <img
            src={eachService.src}
            style={{ width: "100%", height: "auto"}}
            alt={eachService.titulo}
          />
          <Link to={eachService.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{eachService.titulo}</h3>
          </Link>
          <p>{eachService.descripcion}</p>
        </div>
      ))}
    </Container>
  );
}

export default ServiceCards;