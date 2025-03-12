import React from "react";
import "./WorkShops.css";
import taller1 from "../../assets/images/Taller-CryBaby.jpg";
import { Button } from "@mui/material";

function WorkShops() {
  return (
    <div className="workshop-page">
      <div className="workshop-image">
        <img
          style={{ width: "22rem", paddingTop: "3rem" }}
          src={taller1}
          alt="Imagen de Taller Bbay Cry"
        />
      </div>
      <div className="workshop-text">
        <h2>Talleres</h2>
        <p>
          En HUN Studio ofrecemos talleres de uñas, nail art y muchas cositas
          más. Aprende a hacer tus propias uñas y diseños en casa. ¡No te
          pierdas nuestros talleres!{" "}
        </p>
        <Button
          sx={{
            marginTop: "1.2rem",
            border: "1px solid #800000",
            borderRadius: "10px",
            color: "#800000",
            width: {
              xs: "37.5%",
              md: "5rem",
            },
            padding: "0.2rem 1rem",
            backgroundColor: "transparent",
            fontSize: "0.85rem",
            letterSpacing: "0.08rem",
            fontFamily: "Impact",
            textTransform: "capitalize",
            cursor: "pointer",
            transition: "color 0.5s ease, transform 0.3s ease",
            ":hover": {
              color: "#800000",

              transform: "translateY(-4px)",
            },
            ":active": {
              transform: "translateY(-1px)",
            },
          }}
        >
          Reserva tu cupo
        </Button>
      </div>
    </div>
  );
}

export default WorkShops;
