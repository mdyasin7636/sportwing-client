import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pgpip39",
        "template_dgjcur8",
        form.current,
        "AF4tRIhK2YRsoolyy"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mb-10">
      <h2 className="text-center font-bold text-3xl mt-10 mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2">
        <div className="text-center pt-6">
          <p className="font-bold text-lg">QUESTIONS?</p>
          <p className="font-bold text-lg">COMMENTS?</p>
          <p className="font-semibold">WE WOOD LOVE TO HEAR FROM YOU</p>
          <p className="font-semibold">
            Our Summer Camp Opens 8:00 AM to 5:00 Pm From Saturday-Thursday
          </p>
          <p className="mt-2 font-bold text-lg">
            Our Mailing Address
          </p>
          <p className="font-semibold">S2A Charlotte Street, Peterborough</p>
          <p className="font-semibold">Phone: 705-742-3221</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="grid gap-5 text-center">
          <div>
            <input
              type="text"
              name="form_name"
              required
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div>
            <input
              type="text"
              name="form_email"
              required
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div>
            <textarea
              required
              name="message"
              placeholder="Enter Your Message"
              className="textarea textarea-bordered textarea-lg w-full max-w-md"
            ></textarea>
          </div>
          <div>
            <input className="btn btn-outline" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
