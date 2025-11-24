import React from "react";

const AddStudent = () => {
  return (
    <>
      <div className="addStudent p-16">
        <form
          action=""
          className="flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl"
        >
          <div className="personal-info grid grid-cols-2">
            <label className="flex gap-2">
              Admission Number
              <input
                className="border"
                type="number"
                name="admissionNumber"
                id=""
                placeholder="Admission Number"
              />
            </label>
            <label>
              Full Name:
              <input
                className="border"
                type="text"
                name="fullName"
                id=""
                placeholder="Full Name"
              />
            </label>

            <label>
              First Name:
              <input
                className="border"
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
              />
            </label>
            <label>
              Middle Name:
              <input
                className="border"
                type="text"
                name="middleName"
                id=""
                placeholder="Middle Name"
              />
            </label>
            <label>
              Last Name:
              <input
                className="border"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
              />
            </label>

            <select name="" id="">
              <option value="">Select the gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="">
              Admission Date
              <input
                className="border"
                type="date"
                name=""
                id=""
                placeholder="Admission Date"
              />
            </label>
          </div>

          <div className="address">
            <label>
              <input
                className="border"
                type="text"
                name="addressLine"
                id=""
                placeholder="Address Line"
              />
            </label>
            <label>
              <input
                className="border"
                type="text"
                name="city"
                id=""
                placeholder="City"
              />
            </label>
            <label>
              <input
                className="border"
                type="text"
                name="state"
                id=""
                placeholder="State"
              />
            </label>
            <label>
              <input
                className="border"
                type="text"
                name="postalCode"
                id=""
                placeholder="Postal Code"
              />
            </label>
          </div>

          <label htmlFor="">
            Student Active
            <input className="border" type="radio" name="" id="" />
          </label>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
