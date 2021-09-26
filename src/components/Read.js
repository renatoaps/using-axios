import axios from "axios";
import React, {useEffect, useState} from "react";
import { Table } from 'semantic-ui-react'

export default function Read(){
    const [ APIdata, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://615081e6a706cd00179b749e.mockapi.io/fakeData")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return(
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
            {APIdata.map((data) =>{
                return (
                    <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                    </Table.Row>
                )})}
        </Table.Body>
      </Table>
    );
}