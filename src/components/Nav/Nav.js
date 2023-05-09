import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import styles from "./Nav.module.css";
import { Context } from "../Context/Context";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cart from "../cart/Cart";
import { Stack } from "@mui/material";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartPupup, setCartPopup] = useState(false);

  const navItems = [
    ["HOME", "/"],
    ["PRODUCT", "/product"],
    ["CONTACT", "/contact"],
  ];

  const { CartItems } = useContext(Context);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const location = useLocation();

  const navbarStyle = {
    backgroundColor: location.pathname === "/" ? "" : "rgb(161 108 85 / 78%)",
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className={styles.drawer}>
        {navItems.map((item) => (
          <NavLink to={item[1]}>
            <Button key={item} sx={{ color: "#A16C55" }}>
              {item[0]}
            </Button>
          </NavLink>
        ))}
        <NavLink to="/cart">
          <Button key="cart" sx={{ color: "#A16C55" }}>
            SHOPPING CART
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
  return (
    <Box className={styles.nav} style={navbarStyle}>
      <Box className={styles.logo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2415/2415292.png"
          alt="logo"
        />
      </Box>
      <Box
        className={styles.list}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        {navItems.map((item) => (
          <NavLink to={item[1]}>
            <Button key={item} sx={{ color: "rgb(255, 247, 247)" }}>
              {item[0]}
            </Button>
          </NavLink>
        ))}
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:{xs:"35%" ,sm:"10%" }}}> 
        <Box
          onMouseEnter={() => setCartPopup(true)}
          onMouseLeave={() => setCartPopup(false)}
        >
          <Link to="cart">
            <Box style={{ position: "relative" }}>
              <ShoppingBagOutlined
                fontSize="large"
                style={{
                  color: "#A16C55",
                }}
              />
              <Box className={styles.bage}>{CartItems.length}</Box>

              {cartPupup ? (
                <Box className={styles.cart}>
                  <Cart />
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Link>
        </Box>

        <Box display="flex" justifyContent="flex-end" mr="30px">
          <Box
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, cursor: "pointer" }}
          >
            <MenuIcon sx={{ color: "black" }} fontSize="large" />
          </Box>
        </Box>
      </Stack>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        anchor="right"
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            height: "100%",
            width: "240px",
            zIndex: "1400",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
