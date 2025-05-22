import React from "react";

import "./App.css";

import { ShopsList } from "./components/ShopsList";
import { fetchShopsAddresses, type ShopDTO } from "./api";

function App() {
  const [addresses, setAddresses] = React.useState<ShopDTO[]>([]);

  React.useEffect(() => {
    getShopsAddresses();
  }, []);

  const getShopsAddresses = async () => {
    try {
      const res = await fetchShopsAddresses();

      setAddresses(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ShopsList shopsAddresses={addresses} />
    </>
  );
}

export default App;
