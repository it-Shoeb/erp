import API from "./API.jsx";

const AddStudentAPI = async (studentData) => {
  try {
    const data = Object.fromEntries(studentData.entries());
    const response = await API.post(`/student`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export { AddStudentAPI };
