import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const ManageClasses = () => {

  const [axiosSecure] = useAxiosSecure();
  
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: "Approved" });
      refetch();
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };
  

  const handleDeny = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: "Denied" });
      refetch();
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };


  const handleOpenFeedbackModal = (classId) => {
    setSelectedClassId(classId);
    setFeedbackModalVisible(true);
  };

  const handleSubmitFeedback = async () => {
    try {
      await axiosSecure.post("/feedback", {
        classId: selectedClassId,
        feedback: feedbackText,
      });
      setFeedbackModalVisible(false);
      setFeedbackText("");
      refetch();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };


  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Information</th>
              <th>Instructor Information</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem.classImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classItem.className}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Name: {classItem.instructorName}
                  <br />
                  Email: {classItem.instructorEmail}
                </td>
                <td>{classItem.availableSeats}</td>
                <td>${classItem.price}</td>
                <td>{classItem.status}</td>
                <th>
                <button
                    className="btn btn-outline btn-xs my-1"
                    onClick={() => handleApprove(classItem._id)}
                    disabled={classItem.status !== "Pending"}
                  >
                    Approve
                  </button>
                  <br />
                  <button
                    className="btn btn-outline btn-xs my-1"
                    onClick={() => handleDeny(classItem._id)}
                    disabled={classItem.status !== "Pending"}
                  >
                    Deny
                  </button>
                  <br />
                  <button
                    className="btn btn-outline btn-xs my-1"
                    onClick={() => handleOpenFeedbackModal(classItem._id)}
                  >
                    Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        {feedbackModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Provide Feedback</h2>
            <textarea
              className="w-full h-36 p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your feedback..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="btn btn-primary mr-2"
                onClick={handleSubmitFeedback}
              >
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setFeedbackModalVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default ManageClasses;
