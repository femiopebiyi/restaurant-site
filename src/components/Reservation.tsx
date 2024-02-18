import {ArrowBigLeft, ArrowBigRight} from "lucide-react"

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
    <div className="reservation" style={{width: '100%', height: "100%", position: "relative"}}>
      <div style={{width: '100%', height: '100%', display: "flex",overflow: "hidden"}}>
        {slideImages.map((img)=>{
          return <img src={img.url} alt="" className="img-slider-img" key={img.url} style={{translate: `${-100 *imageIndex}%`}}/>
        })}
      </div>
      <button className="img-slider-btn" style={{left: 0}} onClick={showPrevImg}><ArrowBigLeft/></button>
      <button className="img-slider-btn" style={{right: 0}} onClick={showNextImg}><ArrowBigRight/></button>
    </div>
  )
}

export default Reservation
