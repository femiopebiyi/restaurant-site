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
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      aspectRatio: "10 / 4.5"
    }}>
    <Reservation/>
    </div>
    </div>
  )
}

export default Home
