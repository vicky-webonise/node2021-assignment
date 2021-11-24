import axios from 'axios';

const studentsApi = '/api/students';

export const getStudents = async (id) => {
  id = id || '';
  return await axios.get(`${studentsApi}/${id}`);
};

export const addStudent = async (student) => {
  return await axios.post(studentsApi, student);
};

export const editUser = async (id, student) => {
  return await axios.put(`${studentsApi}/${id}`, student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`${studentsApi}/${id}`);
};
