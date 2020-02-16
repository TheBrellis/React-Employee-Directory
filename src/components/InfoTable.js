// npm imports
import React from "react";
import Moment from "moment"
// Bootstrap imports
import Table from 'react-bootstrap/Table';
// Local imports
import TableData from "./TableData";

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

            <TableData
            employees = {employees}
            // image= {employee.results.picture.thumbnail}
            // name= {employee.name.first+" "+employee.name.last}
            // phone= {employee.phone}
            // email= {employee.email}
            // dob= {new Moment(employee.dob.date).format("MM/DD/YYYY")}
            />
        </Table>
    )
}