// npm imports
import React from "react";
// Bootstrap Import
import Table from 'react-bootstrap/Table';


export default function InfoTable () {

    return(
        <Table striped bordered hover>
            <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
        </Table>
    )
}