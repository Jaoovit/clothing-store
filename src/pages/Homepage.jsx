import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";

const clothesURL = "https://fakestoreapi.com/products"

const Homepage = () => {

  const [clothes, setClothes] = useState([]);

  const getClothes = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    const onlyClothes = data.filter(clothes => clothes.category === "women's clothing" || clothes.category === "men's clothing")
    setClothes(onlyClothes)
  }

  useEffect(() => {
    getClothes(clothesURL)
  }, [])

  return (
    <div>
      {clothes.map((clothes) => <ProductCard key={clothes.id} clothes={clothes}/>)}
    </div>
  )
}

export default Homepage
