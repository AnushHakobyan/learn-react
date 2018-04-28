import React, { Component } from 'react';
import Table from '../Table/Table';
import { booksData } from '../data';

const dataKeys = [
    'book',
    'readStatus',
    'percent',
];

class BooksTable extends Component {
    render() {
        return <Table data={booksData} columnNames={dataKeys} />;
    }
}

export default BooksTable;
