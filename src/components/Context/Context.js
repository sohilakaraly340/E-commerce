import { createContext, useEffect, useState } from "react";
export const Context = createContext();

export const Provider = (props) => {
  const { children } = props;
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        return setData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtcat = (cat) => {
    if (cat === "all") {
      setItems(data);
    } else {
      const newarr = data.filter((i) => i.category === cat);
      setItems(newarr);
    }
  };
  const inc = (id) => {
    setCartItems((curr) => {
      if (curr.find((i) => i.id === id) == null) {
        return [...curr, { id, quantity: 1 }];
      } else {
        return curr.map((i) => {
          if (i.id === id) {
            return { ...i, quantity: i.quantity + 1 };
          } else {
            return i;
          }
        });
      }
    });
  };

  const dec = (id) => {
    setCartItems((curr) => {
      if (curr.find((i) => i.id === id)?.quantity === 1) {
        return curr.filter((i) => i.id !== id);
      } else {
        return curr.map((i) => {
          if (i.id === id) {
            return { ...i, quantity: i.quantity - 1 };
          } else {
            return i;
          }
        });
      }
    });
  };

  const getItemQuantity = (id) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const AllContext = {
    data,
    items,
    filtcat,
    inc,
    dec,
    getItemQuantity,
    CartItems
  };

  return <Context.Provider value={AllContext}>{children}</Context.Provider>;
};
