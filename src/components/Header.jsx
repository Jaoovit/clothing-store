import { Link } from "react-router-dom"
import { FaTshirt, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="p-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 text-2xl"><FaTshirt />Clothing Store</Link>
      <div className="flex">
        <Link to="shoppingCart" className="text-2xl"><FaShoppingCart /></Link>
        <div className="-translate-y-3 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white"><span>1</span></div>
      </div>
    </div>
  )
}

export default Header
