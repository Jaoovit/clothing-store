import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa";

const onlyOneClothingURL = "https://fakestoreapi.com/products/"

const Product = () => {

  const { id } = useParams();
  const [onlyOneClothing, setOnlyOneClothing] = useState(null);

  const getOnlyOneClothing = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setOnlyOneClothing(data)
    console.log(data)
  }

  useEffect(() => {
    getOnlyOneClothing(onlyOneClothingURL + id)
  }, [])

  return (
    <div>
      {onlyOneClothing && 
      <div className="flex flex-col justify-center p-8 gap-9 lg:flex-row lg:gap-0" key={onlyOneClothing.id}>
        <div>
         <img className="object-contain h-96 w-96" src={onlyOneClothing.image} alt={onlyOneClothing.title} />
        </div>
        <div className="px-12 flex flex-col gap-9 text-xl">
          <p>{onlyOneClothing.title}</p>
          <p className="object-contain h-84 w-96">{onlyOneClothing.description}</p>
          <p>€ {onlyOneClothing.price}</p>
          <div className="flex items-center gap-2">
            <FaStar className="text-amber-400"/>
            <p>{onlyOneClothing.rating.rate}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-9 w-9 bg-black text-white rounded font-bold">+</button>
            <p>add to card</p>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Product
