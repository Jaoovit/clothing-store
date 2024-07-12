import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";

const ProductCard = ({clothes, showDetails = false}) => {

  const linkToClothing = `product/${clothes.id}`

  return (
    <div>
        <img src={clothes.image} alt="" />
        <p>{clothes.title}</p>
        <p>€ {clothes.price}</p>
        <Link to={linkToClothing}><FaEye /></Link>
        <button>+</button>
    </div>
  )
}

export default ProductCard
