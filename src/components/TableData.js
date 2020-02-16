// npm imports
import React from "react";

export default function TableData(props) {

    return (
        <tbody>
            <tr>
                <td>
                    <img alt={props.name} src={props.image} />
                </td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </tbody>
    )
}