import { useSelector, useDispatch } from "react-redux"
import { FaStar } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { remove } from "../redux/cartSlice";
import { useEffect, useState } from "react";

const ShoppingCart = () => {

  const cartProducts = useSelector(state => state.cart);
  
  const [totalPrice, setTotalPrice] = useState(0)

  let total = 0;

  const sumTotalPrice = (productList) => {
    for(let i = 0; i < productList.length; i++) {
      console.log(productList[i].price);
      total += productList[i].price
    }
  }

  useEffect(() => {
    sumTotalPrice(cartProducts)
    setTotalPrice(total)
  })
    
  

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id))
  }


  return (
    <div className="flex flex-col gap-9 p-8 grid justify-items-stretch">
        {cartProducts.map (clothes => (
        <div className="flex flex-col gap-3 items-center sm:flex-row" key={clothes.id}>
          <div>
            <img className="object-contain h-48 w-96" src={clothes.image} alt={clothes.title} />
          </div>
          <div className="flex flex-col gap-3">
            <div>{clothes.title}</div>
            <div>{clothes.category}</div>
            <div className="flex flex-row items-center gap-2">
              <FaStar className="text-amber-400"/>
              <div>{clothes.rating.rate}</div>
            </div>
            <div>€ {clothes.price}</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
              </div>
              <button className="flex items-center justify-center h-9 w-9 bg-red-600 text-white rounded font-bold" onClick={() => removeToCart(clothes.id)}><FaTrashCan /></button>
            </div>
          </div>
          </div>))}
          <p>Total price: {totalPrice}</p>
      </div>
  )
}

export default ShoppingCart
