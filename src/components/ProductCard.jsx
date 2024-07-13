import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";

const ProductCard = ({clothes, showDetails = false}) => {

  const linkToClothing = `product/${clothes.id}`

  return (
  <div className="flex flex-col justify-center items-center group max-w-96 p-8 border-2 border-gray-200 gap-3 shadow-md rounded transform motion-safe:hover:scale-110 duration-300">
    <div className="flex flex-row gap-9">
      <div className="flex flex-col items-center gap-3">
        <img src={clothes.image} alt={clothes.title} />
        <div>
          <p>{clothes.title}</p>
          <p>€ {clothes.price}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 h-32 p-3 opacity-0 group-hover:opacity-100 duration-500">
        <Link to={linkToClothing} className="flex items-center justify-center h-9 w-9 bg-red-400 rounded"><FaEye className="font-bold text-white" /></Link>
        <button className="flex items-center justify-center h-9 w-9 bg-black text-white rounded font-bold">+</button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
