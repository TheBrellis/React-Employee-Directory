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
                    <img alt={props.employee.name} src={props.image} />
                </td>
                <td>{props.employee.name}</td>
                <td>{props.employee.phone}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.dob}</td>
            </tr>
        </tbody>
    )
}