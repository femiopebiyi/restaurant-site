import founder from "../../assets/images/founder.jpg"



const About = () => {
  return (
    <div className="about-con">
      <div className="founder">
        <img src= {founder} alt="" className="founder-pic" />
        <h3>CEO: Chef Remy</h3>
      </div>

      <p className="about-femi">
                  Welcome to Femi's, where culinary excellence meets warm hospitality. Nestled in the heart of <b>FUTA Akure,</b> Femi's is a culinary haven, offering an unforgettable dining experience that tantalizes the taste buds and warms the soul.
                  <br />
                  <br />

          At Femi's, we pride ourselves on our commitment to using only the freshest, highest quality ingredients sourced from local farmers and producers. Our menu showcases a delightful fusion of flavors, combining traditional recipes with innovative techniques to create dishes that are both familiar and exciting.
          <br />
          <br />
          Led by our talented executive chef, Femi, our kitchen is a place of creativity and passion. With years of experience and a deep love for cooking, Chef Femi infuses every dish with his unique flair and attention to detail, ensuring that each bite is a journey of culinary delight.
          <br />
          <br />
          Whether you're joining us for a romantic dinner, a casual lunch with friends, or a celebratory meal with family, Femi's offers a warm and inviting atmosphere that makes every occasion special. Our friendly staff is dedicated to providing exceptional service, ensuring that your dining experience is nothing short of extraordinary.
          <br />
          <br />

          From our mouthwatering appetizers to our decadent desserts, every dish at Femi's is crafted with care and served with a smile. Join us and discover why Femi's is not just a restaurant, but a destination for food lovers and discerning diners alike. Experience the magic of Femi's today.
      </p>
    </div>
  )
}

export default About
