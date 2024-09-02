'use client'

import { useToast }        from "/components/ui/use-toast.js"
import { useShoppingCart } from "use-shopping-cart"

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  id,
  currency,
  name,
  description,
  image,
  price,
  price_id,
}) => {

  const { addItem } = useShoppingCart()
  const { toast } = useToast()
  const bike = {
    id:          id,
    currency:    currency,
    name:        name,
    description: description,
    image:       image,
    price:       price,
    price_id:    price_id,
  }

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bike)
        toast({
          title: `${name} has been added to the cart`,
        })
      }}
    >
      <div>
        {text}
      </div>
      <div>
        {icon}
      </div>
    </button>
  )
}

export default AddToCartBtn
