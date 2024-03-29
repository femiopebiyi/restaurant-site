import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElementOptions } from "@stripe/stripe-js"
import axios from "axios"
import { FormEvent, useContext, useEffect, useState } from "react"
import { OrderContext } from "../context/order-context"

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const CARD_OPTIONS: StripeCardElementOptions = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (stripe && elements) {
            const cardElement = elements.getElement(CardElement)
            if (cardElement) {
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: "card",
                    card: cardElement
                })
                // Handle the error or success accordingly
                if (error) {
                    console.error(error)
                } else {
                    try{
                        const {id} = paymentMethod
                        const response = await axios.post("https://localhost:4000/payment", {
                            amount: 1000,
                            id
                        })

                        if(response.data.success){
                            console.log("sucessful payment")
                            setSuccess(true)
                        }
                    }
                    catch(err){
                        console.log(err)
                    }
                }
            } else {
                console.error("Card element not found")
            }
        }

        
    }

    const { order } = useContext(OrderContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < order.length; i++) {
      t += order[i].finalPrice;
    }
    setTotal(t);
  }, [order]);

    return (
        <div className="stripe">
            <div className="totalpay" style={{textAlign: "center"}}>Pay ${total.toFixed(2)}</div>
            {!success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/> 
                    </div>
                </fieldset>
                <button>Pay</button>
            </form>
            : <div>
                <h2>You Just Bought a sweet spatula</h2>
            </div>
        }
        </div>
    )
}

export default PaymentForm
