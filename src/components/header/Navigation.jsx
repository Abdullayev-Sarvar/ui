import React from 'react'
import Container from '../../container/Container'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='bg-blue-500'>
            <Container>
                <div className="flex justify-around items-center py-4">
                    <NavLink end  to="/" className="text-white text-3xl transition-all hover:text-opacity-90 hover:scale-95">Home</NavLink>
                    <NavLink end to="/register" className="text-white text-3xl transition-all hover:text-opacity-90 hover:scale-95">Register</NavLink>
                    <NavLink end to="/students" className="text-white text-3xl transition-all hover:text-opacity-90 hover:scale-95">Students List</NavLink>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation