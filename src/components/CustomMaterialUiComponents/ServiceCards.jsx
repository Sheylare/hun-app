import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import workshop from '../../assets/images/Taller-CryBaby.jpg';


function ServiceCards() {
  const services = [
    { id: 1, src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Fdetail%2F495-4958054_vintage-cat-png-clipart-cat-and-kitten-cat.png&f=1&nofb=1&ipt=8020ec2f4228972eedf79b289eda95ad8142fc983d73db30fb2c53b6339fefbc&ipo=images", titulo: "Nail Art", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus suscipit enim, vel viverra elit malesuada et.", link: "/nailart" },
    { id: 2, src: workshop, titulo: "Workshops", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus suscipit enim, vel viverra elit malesuada et.", link: "/workshops" },
  ];

  return (
    <Container style={{ padding: "0 2.5rem" }}>
      {services.map((eachService) => (
        <div key={eachService.id}>
          <img
            src={eachService.src}
            style={{ width: "7.5rem", height: "7.5rem", borderRadius: "50%" }}
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