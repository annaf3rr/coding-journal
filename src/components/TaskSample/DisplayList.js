import { useState } from "react";

const DisplayList = () => {
  const [teachers] = useState([
    {
      id: 1,
      firstname: "Ciel",
      lastname: "James",
      email: "ciel@gmail.com",
      subject: "Computer",
    },
    {
      id: 2,
      firstname: "JM",
      lastname: "Pillerva",
      email: "jm@gmail.com",
      subject: "Math",
    },
    {
      id: 3,
      firstname: "Mike",
      lastname: "Cruz",
      email: "mike@gmail.com",
      subject: "English",
    },
    {
      id: 4,
      firstname: "Kevin",
      lastname: "Hart",
      email: "kevin@gmail.com",
      subject: "Science",
    },
    {
      id: 5,
      firstname: "Chris",
      lastname: "Black",
      email: "chris@gmail.com",
      subject: "Cooking",
    },
  ]);
  return (
    <>
      <table className="table table-striped table-bordered">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Subject</th>

        {teachers.map((teacher) => (
          <tr>
            <td>{teacher.firstname}</td>
            <td>{teacher.lastname}</td>
            <td>{teacher.email}</td>
            <td>{teacher.subject}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default DisplayList;
