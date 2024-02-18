import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react"

import { useState } from "react"
import { slideImages } from "../reservation-img"


const Reservation = () => {
  const [imageIndex, setImageIndex] = useState(1)

  function showPrevImg(){
      setImageIndex((index)=> {
        if(index === 0) return slideImages.length -1

        return index - 1
      })
  }

  function showNextImg(){
setImageIndex((index)=> {
        if(index === slideImages.length  -1) return 0

        return index + 1
      })
  }

  return (
    <div className="reservation" style={{width: '100%', height: "100%", position: "relative"}} id="reservation">
      <div style={{width: '100%', height: '100%', display: "flex",overflow: "hidden"}}>
        {slideImages.map((img)=>{
          return<div style={{translate: `${-100 *imageIndex}%`}} className="img-slider-img"> <img src={img.url} alt=""  key={img.url} />
          <h4 style={{position: "absolute", top:"10%", right: "15%", fontFamily: "Lobster", fontWeight: 400, color:  'white'}}>{img.caption}</h4>
          </div>
        })}
      </div>
      <button className="img-slider-btn" style={{left: 0}} onClick={showPrevImg}><ArrowBigLeft/></button>
      <button className="img-slider-btn" style={{right: 0}} onClick={showNextImg}><ArrowBigRight/></button>

      <div style={{
        position: "absolute",
        left: "50%",
        translate: "-50%",
        bottom: ".5rem"
      }} className="switch">
        {slideImages.map((img, index)=>{
          return <button onClick={()=> setImageIndex(index)} key={img.url} className="dot-icon">{index === imageIndex ? <CircleDot/> : <Circle/>}</button>
        })}
      </div>
    </div>
  )
}

export default Reservation
