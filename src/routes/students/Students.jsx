import React from 'react';
import StudentsList from '../../components/table/Table';
import Container from '../../container/Container';

const Students = () => {
    return (
        <Container>
            <div>
                <h1 className="text-xl text-center my-4">Students List</h1>
                <StudentsList />
            </div>
        </Container>
    );
};

export default Students;