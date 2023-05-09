import { Box, Button, Stack } from "@mui/material";
import CardCheck from "../../components/Card/CardCheck";
import { Context } from "../Context/Context";
import { useContext } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Cart() {
  const { CartItems, data, getItemQuantity } = useContext(Context);

  var c = [];

  const cards = CartItems.map((item) => {
    c = data.find((i) => item.id === i.id);
    return <Fade direction="down"><CardCheck key={c.id} card={c} /></Fade>;
  });

  var sum = 0;
  CartItems.map((item) => {
    c = data.find((i) => item.id === i.id);
    return (sum += c.price * getItemQuantity(c.id));
  });
  return (
    <Box>
      {cards}
      {cards.length ? (
        <Stack mt="20px" alignItems="center">
          <h3 style={{ color: "#A16C55" }}>
            Total price :
            <span style={{ color: "#6d6868" }}> {sum.toFixed(2)}$</span>
          </h3>
          <Zoom>
          <Button
            style={{
              backgroundColor: "#A16C55",
              color: "white",
              marginTop: "20px",
            }}
          >
            <p>checkout</p>
          </Button>
          </Zoom>
        </Stack>
      ) : (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          no items.. !😥
        </h1>
      )}
    </Box>
  );
}
