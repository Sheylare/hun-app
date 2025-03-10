
import React from "react";
import "./NailArtPage.css";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Grid2 } from "@mui/material";
import nails6 from "../../assets/images/nails6.jpg";
import nails7 from "../../assets/images/nails7.jpg";
import nails8 from "../../assets/images/nails8.jpg";
import nails9 from "../../assets/images/nails9.jpg";



const nailArtData = [
  { id: 1, title: "Diseño 1", image: nails6, description: "Descripción del diseño 1" },
  { id: 2, title: "Diseño 2", image: nails7, description: "Descripción del diseño 2" },
  { id: 3, title: "Diseño 3", image: nails8, description: "Descripción del diseño 3" },
  { id: 4, title: "Diseño 4", image: nails9, description: "Descripción del diseño 4" },
  // Agrega más datos según sea necesario
];

function NailArtPage() {
  return (
    <div className="nail-art-page">
      <h2>Catálogo de Diseños</h2>
      <p>Nail Art, decoraciones, texturas, 3D y cositas bonitas en las cuales inspirarte</p>
      <Grid2 container columns={2} spacing={2} justifyContent="center" alignItems="center">
        {nailArtData.map((item) => (
          <Grid2 item xs={12} sm={6} md={4} key={item.id}>
            <CustomCard {...item} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default NailArtPage;
