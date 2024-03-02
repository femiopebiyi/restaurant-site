import { useContext, useEffect, useState} from "react"
import { OrderContext } from "../../context/order-context"
import { XIcon } from "lucide-react";




const OrderCheckout = () => {
  const {order} = useContext(OrderContext)
  
     const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < order.length; i++) {
      t += order[i].finalPrice;
    }
    setTotal(t);
  }, [order]);
    



  return (
    <div className="order-checkout">
      <h1 style={{textAlign: "center"}}>Checkout Page</h1>
      <div className="single-con">
      {order.map((item, key)=>{
        return <div className="single-order" key={key}>
          
          <p><XIcon/>{`${item.quantity} ${item.name} with ${item.topping} topping`} </p>
          <h4>${item.finalPrice}</h4>
        </div>
      })}

      <div className="total-con" style={{display: "flex", justifyContent: "space-between", marginTop: "3em"}}>
        <h5>Total:</h5>
        <h5>${total.toFixed(2)}</h5>
      </div>

      <button className="buy-now">Pay Now</button>
      </div>

      
    </div>
  )
}

export default OrderCheckout
