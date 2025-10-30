import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewComplaint = () => {
  const [hostelName, setHostelName] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");

  const [issue, setIssue] = useState("");

  const navigate = useNavigate();

  const complaintFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newComplaint = {
        hostelName,
        floor,
        room,
        issue,
      };

      const resp = await fetch(
        "http://localhost:5000/complaints/newComplaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComplaint),
          credentials: 'include'
        }
      );

      console.log(resp);
      if (resp.ok) {
        alert("Complaint Filed Successfully");
        setHostelName("");
        setFloor("");
        setRoom("");
        setIssue("");

        navigate("/dashboard/myComplaints");
      }
    } catch (error) {
      console.error("Error filing complaint:", error);
    }
  };

  return (
    <>
      <main className="form-wrap">
        <h2>File a Complaint</h2>
        <form onSubmit={complaintFormSubmit}>
          <input
            name="hostelName"
            placeholder="Hostel Name (e.g., EVR)"
            required
            value={hostelName}
            onChange={(e) => setHostelName(e.target.value)}
          />
          <input
            name="floor"
            placeholder="Floor (e.g., 2)"
            required
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
          <input
            name="room"
            placeholder="Room (e.g., B101)"
            required
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <textarea
            name="issue"
            placeholder="Describe the issue"
            required
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          ></textarea>
          <button className="btn">Submit</button>
        </form>
      </main>
    </>
  );
};

export default NewComplaint;
