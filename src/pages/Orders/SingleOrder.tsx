import { useState } from "react";


type SingleOrderProps = {
        name: string;
        price:number;
        pictureUrl: string;
        id: number;
        toppings: string[]
}

const SingleOrder = ({item}: {item: SingleOrderProps}) => {
  const [quantity, setQuantity] = useState(1)

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
            <div className="change">
              <button onClick={()=>{
                if(quantity <= 1){
                return
              } else{
                setQuantity(prev=> prev - 1)
              }
              }}>-</button>
              <input type="number" placeholder="quantity" value={quantity}  style={{width: "30px"}} disabled/>
            <button onClick={()=>{
                setQuantity(prev=> prev + 1)
              }}>+</button>
            </div>
            <button className="order-btn">Order</button>
        </div> 

    </div>
  )
}

export default SingleOrder

// const addToCart = ()=>{


//     return  
// }
