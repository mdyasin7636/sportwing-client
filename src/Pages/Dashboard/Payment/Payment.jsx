import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useBookedClass from "../../../hooks/useBookedClass";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [bookedClass] = useBookedClass();
    const {id} = useParams();
    
    const booked = bookedClass.find(book => book._id === id)
    console.log(booked);

  return (
    <div className="w-2/4">
      
      <Elements stripe={stripePromise}>
        <CheckoutForm booked={booked} ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
