import React from "react";

import { AddStudentAPI } from "../utils/AddStudentAPI.jsx";

const AddStudent = () => {
  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // const data = Object.fromEntries(formData.entries());
    // return console.log(data);

    try {
      const response = await AddStudentAPI(formData);

      console.log(response);

      if (!response.status) {
        return alert("failed to add student", response.message);
      }

      alert("Student added successfully!");
      e.target.reset();
    } catch (error) {
      alert("failed to add student", error);
      console.error("failed to add student", error);
    }
  };

  return (
    <>
      <div className="addStudent p-4 sm:p-12">
        <form
          action=""
          className="flex flex-col gap-4 p-4 bg-gray-100 rounded-2xl"
          onSubmit={(e) => handleForm(e)}
        >
          <div className="personal-info grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-2">
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Admission Number:
              <input
                className="border min-w-[70%] p-1"
                type="number"
                name="admissionNumber"
                id=""
                placeholder="Admission Number"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Full Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="fullName"
                id=""
                placeholder="Full Name"
              />
            </label>

            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              First Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Middle Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="middleName"
                id=""
                placeholder="Middle Name"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Last Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
              />
            </label>

            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Date of Birth:
              <input
                className="border min-w-[70%] p-1"
                type="date"
                name=""
                id=""
              />
            </label>

            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Gender:
              <select name="" id="" className="border min-w-[70%] p-1">
                <option value="">Select the gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Admitted Class:
              <select name="" id="" className="border min-w-[70%] p-1">
                <option value="">Choose Class</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
              </select>
            </label>

            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Admission Date:
              <input
                className="border min-w-[70%] p-1"
                type="date"
                name=""
                id=""
              />
            </label>
          </div>

          <hr />

          <div className="parental-info grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Father Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="addressLine"
                id=""
                placeholder="Father Name"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Mother Name:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="addressLine"
                id=""
                placeholder="Mother Name"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Father Contact:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="addressLine"
                id=""
                placeholder="Father Contact"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Mother Contact:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="addressLine"
                id=""
                placeholder="Mother Contact"
              />
            </label>
          </div>

          <hr />

          <div className="address grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Address Line:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="addressLine"
                id=""
                placeholder="Address Line"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              City:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="city"
                id=""
                placeholder="City"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              State:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="state"
                id=""
                placeholder="State"
              />
            </label>
            <label className="flex sm:gap-2 flex-wrap justify-end items-center">
              Postal Code:
              <input
                className="border min-w-[70%] p-1"
                type="text"
                name="postalCode"
                id=""
                placeholder="Postal Code"
              />
            </label>
          </div>

          <hr />
          <div className="personal-info gap-4 flex items-center justify-end">
            <p className="p-2 bg-red-200 rounded-md">Cancel</p>
            <input
              className="p-2 bg-green-200 rounded-md"
              type="submit"
              value="Add Student"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
