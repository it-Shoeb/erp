import Student from "../models/student.model.js";

const StudentExist = async (admissionNumber) => {
  const isExist = await Student.findOne({ admissionNumber: admissionNumber });
  return { status: isExist ? true : false, data: isExist || null };
};

export default StudentExist;
