import React from "react";

import { Box } from "@mui/material";
import Cart from "../../components/cart/Cart";
import styles from "./ShoppingCart.module.css"

export default function ShoppingCart() {
  return (
    <Box className={styles.cont}>
      <Box className={styles.cards}>
      <Cart />
      </Box>
    </Box>
  );
}
