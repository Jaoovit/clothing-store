import { Link } from "react-router-dom"
import { FaTshirt, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-24 py-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 text-2xl hover:text-red-400 duration-300"><FaTshirt />Clothing Store</Link>
      <div className="flex ">
        <Link to="shoppingCart" className="text-2xl hover:text-stone-700 duration-300"><FaShoppingCart /></Link>
        <div className="-translate-y-3 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white"><span>1</span></div>
      </div>
    </div>
  )
}

export default Header
