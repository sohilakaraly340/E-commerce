import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";
import { Context } from "../Context/Context";
import styles from "./CardItem.module.css";
export default function CardItem({
  card: { id, image, title, description, price },
}) {
  const { inc, dec, getItemQuantity } = useContext(Context);

  const quan = getItemQuantity(id);

  return (
    <Box>
      <Card sx={{ width:{xs:"250px" ,md:"300px",lg:"350px"} }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={image}
          className={styles.card__img}
          sx={{objectFit:"scale-down"}}

        />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography
              gutterBottom
              variant="h6"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              pr="20px"
            >
              {title}
            </Typography>
            <Typography color="text.secondary">{price}$</Typography>
          </Stack>

          <Typography
            variant="body2"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
            color="text.secondary"
          >
            {description}
          </Typography>

          <Box display="flex" justifyContent="center" m="20px">
            {quan === 0 ? (
              <Button
                variant="contained"
                color="primary"
                size="100%"
                onClick={() => inc(id)}
              >
                add to cart
              </Button>
            ) : (
              <Stack direction="row">
                <Button
                  variant="contained"
                  color="success"
                  style={{ width: "20px" }}
                  onClick={() => inc(id)}
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
                  onClick={() => dec(id)}
                >
                  -
                </Button>
              </Stack>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
