import { useContext} from "react"
import { OrderContext } from "../../context/order-context"




const OrderCheckout = () => {
  const {order} = useContext(OrderContext)
  
    let t = 0
    for(let i = 0; i<order.length; i++){
      t+= order[i].finalPrice
    }

    


  return (
    <div className="order-checkout">
      <h1 style={{textAlign: "center"}}>Checkout Page</h1>
      <div className="single-con">
      {order.map((item)=>{
        return <div className="single-order">
          <p>{`${item.quantity} ${item.name} with ${item.topping} topping`} </p>
          <h4>${item.finalPrice}</h4>
        </div>
      })}

      <div className="total-con" style={{display: "flex", justifyContent: "space-between", marginTop: "3em"}}>
        <h5>Total:</h5>
        <h5>${t.toFixed(2)}</h5>
      </div>
      </div>
    </div>
  )
}

export default OrderCheckout
