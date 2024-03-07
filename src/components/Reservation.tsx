import { Circle, CircleDot, XIcon } from "lucide-react";
 import previous from "../assets/images/trace.svg"
 import next from "../assets/images/trace (1).svg"

import { useContext, useEffect, useRef, useState } from "react"
import { slideImages } from "../reservation-img"
import { UIContext } from "../context/UI-context";


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

  const [showReserve, setShowReserve] = useState(false)
  const {clickedReserve, showReservation} = useContext(UIContext)

const singleReserveRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (singleReserveRef.current && !singleReserveRef.current.contains(event.target as Node)) {
        setShowReserve(false);
      }
    }

    if (showReserve) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showReserve]);

  return (
    <div className="reservation" style={{width: '100%', height: "100%", position: "relative"}} id="reservation">
      <div style={{width: '100%', height: '100%', display: "flex",overflow: "hidden"}}>
        {slideImages.map((img)=>{
          return<div style={{translate: `${-100 *imageIndex}%`}} className="img-slider-img"> <img src={img.url} alt=""  key={img.url} loading="lazy"/>
          <h4 style={{position: "absolute", top:"10%", right: "15%", fontFamily: "Lobster", fontWeight: 400, color:  'white'}}>{img.caption}</h4>
          <button className="book" onClick={(e)=>{
            e.stopPropagation()
            showReservation(img.id)
            setShowReserve(prev => !prev)
          }}>Book Now</button>
          </div>
        })}
      </div>
      <button className="img-slider-btn" style={{left: 0}} onClick={showPrevImg}><img src={previous}/></button>
      <button className="img-slider-btn" style={{right: 0}} onClick={showNextImg}><img src={next}/></button>

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

      <div id="single-reserve" style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#004332",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    maxWidth: "500px",
                    opacity: showReserve ? 1:0,
                    zIndex: showReserve ? 1: -1
                   
                }} ref={singleReserveRef}>
                    <h3 style={{textAlign: "center", color: "white"}}>Book a Reservation</h3>
                    <h5>{clickedReserve?.name}</h5>
                    <p>{clickedReserve?.description}</p>
                    <input type="text" placeholder="Name" className="name"/>
                    <h4>${clickedReserve?.price}</h4>
                    <button className="book-reserve">Pay Now</button>
                    <XIcon className="cancelmessage" style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px"
                    }}  color="white" onClick={()=>{setShowReserve(!showReserve)}} id="cancelIcon"/>
                </div>
    </div>
  )
}

export default Reservation
