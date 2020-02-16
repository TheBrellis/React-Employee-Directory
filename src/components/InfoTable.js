// npm imports
import React from "react";
import Moment from "moment"
// Bootstrap imports
import Table from 'react-bootstrap/Table';
// Local imports
import TableData from "./TableData";

export default function InfoTable () {
    const employee = {
        "name": {
            "first": "Kathy",
            "last": "Murphy"
        },
        "email": "kathy.murphy@example.com",
        "dob": {
            "date": "1979-06-30T05:54:56.932Z",
        },
        "phone": "(291)-372-7687",
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
        },
    }


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
            image= {employee.picture.thumbnail}
            name= {employee.name.first+" "+employee.name.last}
            phone= {employee.phone}
            email= {employee.email}
            dob= {new Moment(employee.dob.date).format("MM/DD/YYYY")}
            />
        </Table>
    )
}