import React, { useContext } from "react";
import styles from "./Category.module.css";
import { Box } from "@mui/material";
import { Context } from "../Context/Context";

export default function Category() {
  const { data, filtcat } = useContext(Context);
  const arrcat = ["all", ...new Set(data.map((i) => i.category))];

  return (
   <Box className={styles.cont}>
     <Box display="flex" justifyContent="center" mt="90px" >
      {arrcat.map((i) => (
        <button key={i} onClick={() => filtcat(i)} className={styles.CatBtn}>
          {i}
        </button>
      ))}
    </Box>
   </Box>
  );
}
