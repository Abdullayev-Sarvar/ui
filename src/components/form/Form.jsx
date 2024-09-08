import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/studentsSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        course: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(formData));
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            course: ''
        });
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            navigate('/students');
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-300 rounded-xl p-5">
            <div className="mb-4">
                <h2 className="text-xl mb-2">Personal Information</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Course</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            <button type="submit" disabled={Loading}  className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                {
                    Loading ? 'Loading...' : 'Submit'
                }
            </button>
        </form>
    )
}

export default Form