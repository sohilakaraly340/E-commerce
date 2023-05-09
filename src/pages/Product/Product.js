import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import Category from "../../components/Categorys/Category";
import CardItem from "../../components/Card/CardItem";
import { Context } from "../../components/Context/Context";
import { Fade } from "react-awesome-reveal";
export default function Product() {
  const { items } = useContext(Context);

  return (
    <Box>
      <Box id="cat" pt="30px">
        <Category />
      </Box>

      <Box color="gray" ml="5vw" fontSize="1.8vw" mt="1vw">
        {items.length} items found
      </Box>
      <Stack
        direction="row"
        gap="50px"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        m="50px"
      >
        {items.map((d) => (
          <Fade direction="left"> 
            <CardItem key={d.id} card={d} />
          </Fade>
        ))}
      </Stack>
    </Box>
  );
}
