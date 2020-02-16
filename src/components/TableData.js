// npm imports
import React, { useContext } from "react";
import Moment from "moment";
// local imports
import { EmployeeContext } from "../utils/EmployeeContext";

export default function TableData(props) {

    const context = useContext(EmployeeContext)

    return (
        <tbody>
            <tr>
                <td>
                    <img alt={ props.employee.name.first+" "+ props.employee.name.last } src={ props.employee.picture.thumbnail} />
                </td>
                <td>{ props.employee.name.first+" "+props.employee.name.last} </td>
                <td>{ props.employee.phone }</td>
                <td>{ props.employee.email }</td>
                <td>{ new Moment(props.employee.dob.date).format("MM/DD/YYYY") }</td>
            </tr>
        </tbody>
    )
}