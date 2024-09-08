import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../container/Container';

const Table = () => {
    const students = useSelector((state) => state.students);
    const dispatch = useSelector((state) => state.dispatch);
    const deleteStudent = (id) => ({ type: 'DELETE_STUDENT', payload: id });
    

    return (
      <Container>
        <table className="w-full">
          <thead>
            <tr className='bg-gray-300 rounded-t-2xl'>
              <th className='py-5'>Name</th>
              <th className='py-5'>Email</th>
              <th className='py-5'>Course</th>
              <th className='py-5'>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className='border-b border-b-gray-400 py-4 text-center'>{student.firstName} {student.lastName}</td>
                <td className='border-b border-b-gray-400 py-4 text-center'>{student.email}</td>
                <td className='border-b border-b-gray-400 py-4 text-center'>{student.course}</td>
                <td className='border-b border-b-gray-400 py-4 text-center'>
                  <button onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
}

export default Table