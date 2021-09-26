import axios from "axios";
import React, {useEffect, useState} from "react";
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Read(){
    const [ APIdata, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://615081e6a706cd00179b749e.mockapi.io/fakeData")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
      let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Checkbox Value', checkbox);
    }

    return(
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
   
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
            {APIdata.map((data) =>{
                return (
                    <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                    <Link to='/update'>
                      <Table.Cell>
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Table.Cell>
                    </Link>
                    </Table.Row>   
                )})}
        </Table.Body>
      </Table>
    );
}