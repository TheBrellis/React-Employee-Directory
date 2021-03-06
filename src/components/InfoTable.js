// npm imports
import React from "react";
// Bootstrap imports
import Table from 'react-bootstrap/Table';
// Local imports
import TableData from "./TableData";

export default function InfoTable (props) {
    return(
        <Table striped bordered hover>
            <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
        {
            props.employees.map((employee) => (
                <TableData
                employee = {employee}
                />
            ))
        }
        </Table>
    )
}