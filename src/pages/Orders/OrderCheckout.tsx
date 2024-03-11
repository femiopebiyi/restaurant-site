import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/order-context";
import { XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const OrderCheckout = () => {
  const { order, removeOrder } = useContext(OrderContext);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < order.length; i++) {
      t += order[i].finalPrice;
    }
    setTotal(t);
  }, [order]);

  return (
    order.length > 0 ? (
      <div className="order-checkout">
        <h1 style={{ textAlign: "center" }}>Checkout Page</h1>
        <div className="single-con">
          {order.map((item, key) => (
            <div className="single-order" key={key}>
              <p>
                <XIcon
                  color="red"
                  onClick={() => {
                    removeOrder(item.id);
                  }}
                />
                {`${item.quantity} ${item.name} ${item.topping !== 'none' ? `with ${item.topping} topping` : ' '}`}
              </p>
              <h4>${item.finalPrice}</h4>
            </div>
          ))}

          <div className="total-con" style={{ display: "flex", justifyContent: "space-between", marginTop: "3em" }}>
            <h5>Total:</h5>
            <h5>${total.toFixed(2)}</h5>
          </div>

          <button className="buy-now" onClick={()=>{
            navigate("/payment")
          }}>Pay Now</button>
        </div>
      </div>
    ) : (
      <div className="empty-cart">
        <h1>Your Cart is Empty back to order <Link to= "..">page</Link></h1>
      </div>
    )
  );
};

export default OrderCheckout;
