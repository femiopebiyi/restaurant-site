// import { ArrowDown } from "phosphor-react"
import {ArrowDown} from "lucide-react"
import Menu from "../../components/Menu"
import Reservation from "../../components/Reservation"




const Home = () => {
  return (
    <div className="home-con">
      <div className="home">
        <div className="welcome">
          <h1>welcome to FEMI's</h1>
          <h3 className="benefits-con">
            <div className="benefits">
                <span>Comfort</span>
                <span>Satisfying</span>
                <span>Soothing</span>
                <span>Nurturing</span>
                <span>Comfort</span>
            </div>
              &nbsp;&nbsp;food at your doorstep
          </h3>
          <a href="#menu" className="arrowDownCon"><ArrowDown size={50} color="white" className="arrowDown"/></a>
          
        </div>
      </div>

      <Menu/>
      <div style={{
      maxWidth: '2000px',
      width: '100%',
      margin: '0 auto',
 
    }} className="reserve-con">
      <h1 className="check">check out reservations</h1>
    <Reservation/>
    </div>
    </div>
  )
}

export default Home
