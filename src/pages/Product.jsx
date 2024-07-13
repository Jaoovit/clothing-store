import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const onlyOneClothingURL = "https://fakestoreapi.com/products/"

const Product = () => {

  const { id } = useParams();
  const [onlyOneClothing, setOnlyOneClothing] = useState(null);

  const getOnlyOneClothing = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setOnlyOneClothing(data)
  }

  useEffect(() => {
    getOnlyOneClothing(onlyOneClothingURL + id)
  }, [])

  return (
    <div>
      {onlyOneClothing && <p key={onlyOneClothing.id}>{onlyOneClothing.title}</p>}
    </div>
  )
}

export default Product
