import { useContext, useRef, useState} from "react";
import { OrderContext } from "../../context/order-context";


type SingleOrderProps = {
        name: string;
        price:number;
        pictureUrl: string;
        id: number;
        toppings: string[]
}


const SingleOrder = ({item}: {item: SingleOrderProps}) => {
const {quantity, handleChangeDecrease, handleChangeIncrease, order, orderFood} = useContext(OrderContext)
const selectRef = useRef<HTMLSelectElement>(null);
const inputRef = useRef<HTMLInputElement>(null);

const cartItemAmount = quantity[item.id]
     const [added, setAdded] = useState<string>("Order");
     const [loading, setLoading] = useState(false);

       function isAdded (){
    setAdded("Ordered")
    setLoading(true)

    setTimeout(() => {
      setAdded("Order")
      setLoading(false)
    }, 500);
  }

window.onload = function() {
    localStorage.clear();
};

  return (
    <div className="item-con">
        <div className="item">
            <div className="order-img"><img src={item.pictureUrl} alt="" /></div>
            <h3 className="item-name">{item.name}</h3>
            <h4 className="item-price">${cartItemAmount * item.price}</h4>
            <div className="toppings" style={{display: "flex", alignItems: "center", border: "1px solid black", width: "fit-content", gap: "5px", padding: '.3em'}}>
              <h6>Topping:</h6>
              <select name="" id="" style={{border: "none", outline: "none"}} ref={selectRef}>
              {item.toppings.map((topping, key)=>{
                return <option value={topping} key={key}>{topping}</option>
              })}
            </select>
            </div>
            <div className="change" style={{marginTop: ".5em"}}>
              <button onClick={()=>{
                handleChangeDecrease(item.id)
              }}>-</button>
              <input type="number" placeholder="quantity"  style={{width: "30px"}} disabled ref={inputRef} value={cartItemAmount}/>
            <button onClick={()=>{
              handleChangeIncrease(item.id)
            }}>+</button>
            </div>
            <button className="order-btn" onClick={()=>{
              orderFood(item.id, selectRef.current?.value as string, Number(inputRef.current?.value), Number(inputRef.current?.value)*item.price, item.name)
              console.log(order)
              isAdded()
            }} disabled = {loading}>{added}</button>
        </div> 

    </div>
  )
}

export default SingleOrder
