import Menu from "../../components/Menu"
import Reservation from "../../components/Reservation"




const Home = () => {
  return (
    <div className="home-con">
      <div className="home">
        <div className="welcome">
          <h1>welcome to FEMI's</h1>
          <p>Comfort food at your doorstep</p>
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
