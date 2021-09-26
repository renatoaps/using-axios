import React, { useReducer } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const axiosClient = axios.create({
        baseURL: "https://615081e6a706cd00179b749e.mockapi.io/fakeData"
      });

    const postdata = () => {
        axiosClient
            .post("/", {
                firstName,
                lastName,
                checkbox
            }).then(() => {
                history.push('/read');
            })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postdata} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
