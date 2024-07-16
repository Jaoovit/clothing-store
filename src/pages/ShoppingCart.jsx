import { useSelector } from "react-redux"
import { FaStar } from "react-icons/fa";

const ShoppingCart = () => {

  const cartProducts = useSelector(state => state.cart)

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
            <div className="flex flex-row gap-3">
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
          </div>
          </div>))}
          <p className="justify-self-end px-24 text-xl">Total price: </p>
      </div>
  )
}

export default ShoppingCart
