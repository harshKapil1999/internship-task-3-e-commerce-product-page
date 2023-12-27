"use client";

import { useState } from "react"
import Header from "./components/header"
import OurFavorites from "./components/our-favorites"
import ProductOverview from "./components/product-overview"
import ProductsList1 from "./components/products-list1"
import ProductsList2 from "./components/products-list2"
import QuickView from "./components/quick-view"


export default function Home() {
  const [cart, setCart] = useState(0);
  const handleAdd = () => {
    setCart(
      prev => prev + 1
    );
  }

  return (
    <>
    <div>
      <Header cart={cart} setCart={setCart} />
      <ProductOverview handleAdd={handleAdd} />
      <OurFavorites />
      <ProductsList1 />
      <ProductsList2 />
      <QuickView />

    </div>
    </>
    
  )
}
