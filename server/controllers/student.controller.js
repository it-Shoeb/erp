import Student from "../models/student.model.js";
import StudentExist from "../utils/isExist.js";

export const createStudent = async (req, res) => {
  try {
    const {
      admissionNumber,
      fullName,
      firstName,
      middleName,
      lastName,
      gender,
      admissionDate,
      addressLine,
      city,
      state,
      postalCode,
    } = req.body;

    // const isStudentExist = await StudentExist(req.body.admissionNumber);

    const isStudentExist = await Student.findOne({ admissionNumber });

    if (isStudentExist) {
      return res
        .status(400)
        .json({ status: false, message: "Student already exists" });
    }

    await Student.create({
      admissionNumber,
      fullName,
      name: {
        firstName,
        middleName,
        lastName,
      },
      gender,
      admissionDate,
      address: {
        addressLine: addressLine,
        city: city,
        state: state,
        postalCode: postalCode,
      },
      // isActive,
    });

    res
      .status(201)
      .json({
        status: true,
        message: "Student created successfully",
        data: req.body,
      });

    // Student.create(req.body);
  } catch (error) {
    res.status(500).json({ status: false, message: "Server Error" });
    console.error(error);
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error(error);
  }
};

export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await StudentExist(id);

    if (!student.status) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await StudentExist(id);
    if (!student.status) {
      return res.status(404).json({ message: "Student not found" });
    }

    const result = await Student.findOneAndDelete({ admissionNumber: id });

    res.status(200).json({ message: "Student deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error(error);
  }
};

export default {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
};
