// npm imports
import React from "react";
// Bootstrap imports
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Search() {

    return (
        <Form inline>
            <FormControl type="text" placeholder="John Doe" className=" mr-sm-2" />
            <Button type="submit">Search</Button>
        </Form>
    )
}