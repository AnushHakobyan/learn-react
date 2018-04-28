import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        const { columnNames, row } = this.props;
        return (
            <tr>
                {
                    columnNames.map(name => {
                        return <td>{`${row[name]}`}</td>;
                    })
                }
            </tr>
        );
    }
}

export default TableRow;
