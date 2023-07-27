import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "lottie-react";
import contactImg from  '../../../src/assets/contact.json'

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
      <h2 className="text-center font-bold text-3xl mt-10">Contact Us</h2>
      <div className="grid md:grid-cols-2">
        <div className="">
          <Lottie
            className=""
            animationData={contactImg}
            loop={true}
          />
        </div>
       <div className="mt-20">
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
    </div>
  );
};

export default Contact;
