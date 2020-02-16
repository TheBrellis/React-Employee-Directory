// npm imports
import React, { useState, useEffect } from 'react';
// bootstrap imports
import Header from "../components/Header";
// local imports
import InfoTable from "../components/InfoTable";
import { EmployeeContext } from "../utils/EmployeeContext";
import {GetEmployees} from "../utils/API";

export default function DirectoryContainer() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        LoadEmployees();
    },[])

    const LoadEmployees = () => {
        GetEmployees()
        .then((response) => {
            console.log(response.data.results);
            setEmployees(response.data.results)
            console.log(employees);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    return (


        <EmployeeContext.Provider
        value = {
            {
                employees: employees
            }
        }
        >
            <Header />
            <InfoTable/>
        </EmployeeContext.Provider>

    );
}