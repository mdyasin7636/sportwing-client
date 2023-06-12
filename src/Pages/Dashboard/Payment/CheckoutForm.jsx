import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({booked}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const {price} = booked;

  console.log(price);

  useEffect(() => {
    // console.log(price);
    axiosSecure.post("/create-payment-intent", {price})
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    //   console.log("payment method", paymentMethod);
    }

    setProcessing(true)

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'unknown',
              name: user?.displayName || 'anonymous'
            },
          },
        },
      );

      if(confirmError) {
        console.log(confirmError);
      }

      console.log('paymentIntent', paymentIntent);
      setProcessing(false)
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        // save payment information to the server
        const payment = {
            email: user?.email, 
            transactionId: paymentIntent.id,
            className: booked.className,
            classImage: booked.classImage,
            availableSeats: booked.availableSeats,
            price: booked.price,
            data: new Date()
        }
        axiosSecure.post('/payments', payment)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                // display confirm
            }
        })
      }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && <p>Transaction Complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
