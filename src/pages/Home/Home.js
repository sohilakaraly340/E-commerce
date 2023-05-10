import React from "react";
import panner from "../../img/panner.jpg";
import { Box, Stack } from "@mui/material";
import styles from "./Home.module.css";
import wo from "../../img/mod1.jpg";
import mi from "../../img/mod2.jpg";
import je from "../../img/mod4.jpg";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/Discount";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Product from "../Product/Product";
import { Fade, Rotate } from "react-awesome-reveal";

export default function Home() {
  return (
    <Box>
      <Box position="relative">
        <img src={panner} alt="panner" className={styles.pann} />
        <Box position="relative">
          <h1 className={styles.title}>
            Shopping the <br /> best
          </h1>
          <a href="#cat">
            <Fade duration="3000">
              <button className={styles.btn}>Shop Now ! </button>
            </Fade>
          </a>
        </Box>
      </Box>

      <Fade duration={2500}>
        <Box className={styles.sec2}>
          <img src={wo} alt="womens" className={styles.wo} />
          <Stack direction="column">
            <img src={je} alt="jewelry" className={styles.je} />
            <div className={styles.sq}>Be your best</div>
          </Stack>
          <img src={mi} alt="men" className={styles.me} />
        </Box>
      </Fade>

      <Box className={styles.sec3}>
        <Stack className={styles.col}>
          <Box className={styles.cont}>
            <Fade duration={2500}>
              <DiscountIcon className={styles.tag} />
            </Fade>
            <h3>Special Discount & offers</h3>
          </Box>
          <Box className={styles.cont}>
            <Fade direction="left" duration={2500}>
              <LocalShippingIcon className={styles.tag} />
            </Fade>
            <h3>Free Home Delivery</h3>
          </Box>
        </Stack>
        <Box className={styles.cont}>
          <Rotate duration={3500}>
            <CurrencyExchangeIcon className={styles.tag} />
          </Rotate>
          <h3>Money-back Guaranteed</h3>
        </Box>
        <Stack className={styles.col}>
          <Box className={styles.cont}>
            <Fade duration={3500}>
              <VerifiedUserIcon className={styles.tag} />
            </Fade>
            <h3>Non-contact shipping</h3>
          </Box>
          <Box className={styles.cont}>
            <Fade duration={2500}>
              <AttachMoneyIcon className={styles.tag} />
            </Fade>
            <h3>Super Secure Payment</h3>
          </Box>
        </Stack>
      </Box>

      <Product />
    </Box>
  );
}
