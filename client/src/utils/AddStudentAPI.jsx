import API from "./API.jsx";

const AddStudentAPI = async (studentData) => {
  try {
    const data = Object.fromEntries(studentData.entries());
    await API.post(`/student`, data);
  } catch (error) {
    console.error("Error adding student:", error);
  }
};

export { AddStudentAPI };
