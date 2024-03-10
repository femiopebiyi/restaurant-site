import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";


const PUBLIC_KEY = "pk_test_51OsQZfGcofB6gNRBpwSU01giLSDAxFcNbwoMQXXyKzU8IdoaaKLG6tYYz6IHPlU6rzkMswReqzHaLvNXo6AARqcd00crS1LBtC";
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <div className="stripe-con">
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
    </div>
  )
}

export default StripeContainer
