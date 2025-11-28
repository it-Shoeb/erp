import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { pdf, sheet, add } from "../utils/Images";

import { getStudents } from "../API/StudentAPI.jsx";

const Student = () => {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await getStudents();
      setStudents(students);
    };
    fetchStudents();
  }, []);

  return (
    <>
      <div className="main-wrapper p-16">
        <div className="table-container bg-gray-100 p-4 rounded-md shadow-md max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="filter-bar-container bg-slate-200 p-4 mb-4 rounded-md flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Student List</h2>
            <div className="filter-bar-cta flex gap-4">
              <Link
                to={"/student/add"}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                Add Student <img src={add} alt="" />
              </Link>
              <Link
                to={"/student/add"}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <img src={sheet} alt="" />
              </Link>
              <Link
                to={"/student/add"}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <img src={pdf} alt="" />
              </Link>
            </div>
          </div>

          <table className="table-auto w-full border-collapse border-b border-slate-400">
            <thead className="">
              <tr className="bg-gray-200 sticky top-0">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Date of birth</th>
                <th className="text-left p-4">Gender</th>
                <th className="text-left p-4">Admission No.</th>
                <th className="text-left p-4">Father Name</th>
                <th className="text-left p-4">Father Contact</th>
                <th className="text-left p-4">Mother Name</th>
                <th className="text-left p-4">Mother Contact</th>
              </tr>
            </thead>
            <tbody>
              {Students.map(
                (student) => (
                  console.log(student),
                  (
                    <tr>
                      <td className="border-b px-4 py-2 text-blue-600">
                        <Link to={`/student/${student.admissionNumber}`}>
                          {student.fullName}
                        </Link>
                      </td>
                      <td className="border-b px-4 py-2">
                        {student.dateofbirth}
                      </td>
                      <td className="border-b px-4 py-2">{student.gender}</td>
                      <td className="border-b px-4 py-2">
                        {student.admissionNumber}
                      </td>
                      <td className="border-b px-4 py-2">Shakil Shaikh</td>
                      <td className="border-b px-4 py-2">1234567890</td>
                      <td className="border-b px-4 py-2">Munawwar Shakil</td>
                      <td className="border-b px-4 py-2">0987654321</td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Student;
