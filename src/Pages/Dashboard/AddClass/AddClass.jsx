import { useForm } from "react-hook-form";

const AddClass = () => {

    const { register, handleSubmit, reset, watch, formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

  return (
    <div>
      <h2>instructor add class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            {...register("className")}
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
            {...register("classImage")}
            className="file-input file-input-bordered w-full max-w-xs"/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            {...register("instructorName")}
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
            {...register("instructorEmail")}
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
            {...register("availableSeats")}
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
            {...register("price")}
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
