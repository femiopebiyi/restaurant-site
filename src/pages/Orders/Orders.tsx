import { useNavigate } from "react-router-dom"
import { menuItems } from "../../menuItem"
import SingleOrder from "./SingleOrder"




const Orders = () => {
const navigate = useNavigate()


return (
<div id="orders">
    <div className="order-con">
        {menuItems.map((item, key)=>{
            return <SingleOrder item = {item} key={key}/>
        })}
    </div>

    <button className="checkout" onClick={()=> navigate("ordercheckout")}>Checkout</button>
</div>
)
}
export default Orders
