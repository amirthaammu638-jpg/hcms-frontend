import React, { useEffect, useState } from "react";

const MyComplaints = ({  mine=true }) => {

    const [complaints, setComplaints] = useState([])

    const fetchComplaints = async ()=>{
        try {
            const resp = await fetch(`http://localhost:5000/complaints/${mine? 'myComplaints': 'all'}`)
            if(resp.ok){
                const data = await resp.json()
                setComplaints(data.complaints)
            }
        } catch (error) {
            console.error("Error fetching complaints:", error)
        }
    }

    useEffect(()=>{
        fetchComplaints()
    },[])
  return (
    <main className="list-wrap">
      <h2>{mine ? "My Complaints" : "All Complaints"}</h2>

      {!complaints.length ? (
        <p>No complaints found.</p>
      ) : (
        <table className="complaint-table">
          <thead>
            <tr>
              <th>RegNo</th>
              <th>Hostel</th>
              <th>Room</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => {
              <tr>
                <td> {c.registerNumber} </td>
                <td> {c.hostelName} </td>
                <td>
                  {" "}
                  {c.floor} / {c.room}{" "}
                </td>
                <td> {c.issue} </td>
                <td> {c.status} </td>
                <td>
                  {!mine ? (
                    <form
                      action="/complaints/ c._id /update"
                      method="POST"
                      style="display:inline"
                    >
                      <select name="status">
                        <option
                          value="Pending"
                          selected={c.status === "Pending" ? true : false}
                        >
                          Pending
                        </option>
                        <option
                          value="In Progress"
                          selected={c.status === "In Progress" ? true : false}
                        >
                          In Progress
                        </option>
                        <option
                          value="Resolved"
                          selected={c.status === "Resolved" ? true : false}
                        >
                          Resolved
                        </option>
                      </select>
                      <input name="adminComment" placeholder="Comment" />
                      <input name="nextActionDate" type="date" />
                      <button className="btn">Update</button>
                    </form>
                  ) : (
                    <small> c.adminComment || '' </small>
                  )}
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default MyComplaints;
