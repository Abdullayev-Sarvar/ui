import React from 'react'
import Container from '../../container/Container'
import RegisterForm from '../../components/form/Form'

const Register = () => {
  return (
    <Container>
      <div>
        <h1 className="text-xl text-center my-8">Register for the Course</h1>
        <RegisterForm />
      </div>
    </Container>
  )
}

export default Register