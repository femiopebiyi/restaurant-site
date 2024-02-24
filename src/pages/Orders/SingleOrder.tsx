import { useContext} from "react";
import { OrderContext } from "../../context/order-context";


type SingleOrderProps = {
        name: string;
        price:number;
        pictureUrl: string;
        id: number;
        toppings: string[]
}

const SingleOrder = ({item}: {item: SingleOrderProps}) => {
const {quantity, handleChangeDecrease, handleChangeIncrease} = useContext(OrderContext)

  return (
    <div className="item-con">
        <div className="item">
            <div className="order-img"><img src={item.pictureUrl} alt="" /></div>
            <h3 className="item-name">{item.name}</h3>
            <h4 className="item-price">${item.price * quantity}</h4>
            <div className="toppings" style={{display: "flex", alignItems: "center", border: "1px solid black", width: "fit-content", gap: "5px", padding: '.3em'}}>
              <h6>Topping:</h6>
              <select name="" id="" style={{border: "none", outline: "none"}}>
              {item.toppings.map((topping)=>{
                return <option value={topping}>{topping}</option>
              })}
            </select>
            </div>
            <div className="change" style={{marginTop: ".5em"}}>
              <button onClick={handleChangeDecrease}>-</button>
              <input type="number" placeholder="quantity" value={quantity}  style={{width: "30px"}} disabled/>
            <button onClick={handleChangeIncrease}>+</button>
            </div>
            <button className="order-btn">Order</button>
        </div> 

    </div>
  )
}

export default SingleOrder
