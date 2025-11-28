import API from "../API/API.jsx";

const getStudents = async () => {
  try {
    const { data } = await API.get("/student");
    return data.students;
  } catch (error) {
    console.error("unable to access the the student database");
  }
};

export { getStudents };
