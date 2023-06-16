import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {

    const [axiosSecure] = useAxiosSecure()

    const {user} = useAuth();

    const { register, handleSubmit, formState: { errors }} = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

      const formData = new FormData();
      formData.append('image', data.classImage[0])

      fetch(img_hosting_url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgResponse => {
        if(imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {className, availableSeats, price} = data;
          const newClass = {className, classImage:imgURL, instructorName:user.displayName, instructorEmail:user.email, availableSeats: parseFloat(availableSeats), price: parseFloat(price), status: 'Pending'}
          console.log(newClass);
          axiosSecure.post('/classes', newClass)
          .then(data => {
            console.log('after posting new class', data.data);
            if(data.data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
      })

    };
    console.log(errors);
    console.log(img_hosting_token);


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            {...register("className", { required: true })}
            placeholder="class name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register("classImage", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            placeholder="instructor name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            defaultValue={user.email}
            readOnly
            placeholder="instructor email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            placeholder="available seats"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        </div>
        <div className="text-center mt-4">
            <input className="btn btn-outline" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
