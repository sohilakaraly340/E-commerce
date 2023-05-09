import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { Box, Button, Stack } from "@mui/material";
import styles from "./CardItem.module.css"

export default function CardCheck(card) {
  console.log(card.card);
  const { inc, getItemQuantity, dec } = useContext(Context);
  const quan = getItemQuantity(card.card.id);
  return (
    <Stack direction="row" gap="20px" mt="45px">
      <img src={card.card.image} alt="" className={styles.CheckImg}/>

      <Stack direction="column" width="50%">
        <h3>{card.card.title}</h3>
        <p>
          total price : {quan}*{card.card.price} = {card.card.price * quan}$
        </p>
        <Box display="flex" mt="20px">
          <Stack direction="row">
            <Button
              variant="contained"
              color="success"
              style={{ width: "20px" }}
              onClick={() => inc(card.card.id)}
            >
              +
            </Button>
            <span
              style={{
                margin: "0px 20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {quan}
            </span>
            <Button
              variant="contained"
              color="error"
              onClick={() => dec(card.card.id)}
            >
              -
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
