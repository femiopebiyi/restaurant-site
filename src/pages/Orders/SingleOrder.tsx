

type SingleOrderProps = {
        name: string;
        price:string;
        pictureUrl: string;
        id: number;
        toppings: string[]
}

const SingleOrder = ({item}: {item: SingleOrderProps}) => {
  return (
    <div>
        <div className="item">
            <div className="order-img"><img src={item.pictureUrl} alt="" /></div>
            <h3 className="item-name">{item.name}</h3>
            <h4 className="item-price">{item.price}</h4>
            <div className="toppings" style={{display: "flex", alignItems: "center", border: "1px solid black", width: "fit-content", gap: "5px", padding: '.3em'}}>
              <h6>Toppings:</h6>
              <select name="" id="" style={{border: "none", outline: "none"}}>
              {item.toppings.map((topping)=>{
                return <option value={topping}>{topping}</option>
              })}
            </select>
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
