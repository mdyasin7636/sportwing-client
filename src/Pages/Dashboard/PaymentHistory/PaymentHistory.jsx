import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get("/payments")
      .then((res) => {
        const filteredPayments = res.data.filter(
          (payment) => payment.email === user.email
        );
        setPayments(filteredPayments);
      })
      .catch((error) => {
        console.error("Error fetching payment history:", error);
      });
  }, [axiosSecure, user.email]);

  return (
    <div className="overflow-x-auto w-3/4">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment.id}>
              <th>{index + 1}</th>
              <td>{payment.className}</td>
              <td> {payment.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
