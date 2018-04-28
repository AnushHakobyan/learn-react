import React, { Component } from 'react';
import Table from '../Table/Table';
import { usersData } from '../data';

const columnNames = usersData[0] ? Object.keys(usersData[0]) : [];

class UsersTable extends Component {
    render () {
        return <Table columnNames={columnNames} data={usersData} />
    }
}

export default UsersTable;
