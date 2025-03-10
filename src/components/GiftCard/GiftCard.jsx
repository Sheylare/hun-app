import { Box, Button, TextField } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";

function GiftCard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState();
  const giftCard = useRef();

  const handleCardDownload = async () => {
    const element = giftCard.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("gift-card.pdf");
  };

  return (
    <Box>
      <TextField
        label="Nombre"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Mensaje"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <TextField
        label="Vale por"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Box
        ref={giftCard}
        sx={{
          width: "25rem",
          height: "15rem",
          backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4d%2Fe6%2F57%2F4de65720e5419b2e4e5fd35899427c46.png&f=1&nofb=1&ipt=d28b33d62a1cf2605341526b6e5feb43934d05473e6fa80fd2d7c167adf20ee6&ipo=images")',
          backgroundSize: "cover",
          padding: "1.5 rem",
          position: "relative",
          color: "#800000",
          margin: "1.5rem 0",
        }}
      >
        <h2>{name}</h2>
        <p>{message}</p>
        <h4>{price}</h4>
      </Box>

      <Button variant="contained" onClick={handleCardDownload}>
        Descargar Gift Card
      </Button>
    </Box>
  );
}

export default GiftCard;
