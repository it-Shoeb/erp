import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { pdf, sheet, add } from "../utils/Images";

import { getStudents } from "../API/StudentAPI.jsx";

const Student = () => {
  const [Students, setStudents] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await getStudents();
      console.log(students);

      SetLoading(true);
      setStudents(students);
    };
    fetchStudents();
    SetLoading(false);
  }, []);

  return (
    <>
      <div className="main-wrapper p-16">
        <div className="navigation flex gap-1">
          <Link to={"/"}>Home</Link> &gt;
          <Link to={"/student"}>Student</Link>
        </div>

        <div className="table-container bg-gray-100 p-4 rounded-md shadow-md border h-[calc(100vh-100px)] overflow-hidden">
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

          <div className="table-container relative border h-[calc(100vh-250px)] overflow-y-scroll">
            {
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`relative p-4 w-24 aspect-square flex items-center justify-center ${
                    Loading ? "hidden" : "visible"
                  }`}
                >
                  <p>loading</p>
                  <div className="loader absolute top-0 left-0 rounded-full border-b-2 border-l-2 p-4 h-full w-full animate-spin"></div>
                </div>
              </div>
            }
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
              <tbody className="h-1/2 overflow-hidden">
                {Students.map((student) => (
                  <tr key={student.admissionNumber}>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
