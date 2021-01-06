import React, {Component} from 'react';

class TableHAD extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Student_name_had</th>
                    <th>Roll_no</th>
                    <th>Class</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>tauhid</td>
                    <td>34</td>
                    <td>sycs</td>
                </tr>
                <tr>
                    <td>ahmad</td>
                    <td>75</td>
                    <td>syit</td>

                </tr>
                </tbody>
            </table>
        );
    }
}

const Table = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>Student_name</th>
                <th>Roll_no</th>
                <th>Class</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>tauhid</td>
                <td>34</td>
                <td>sycs</td>
            </tr>
            <tr>
                <td>ahmad</td>
                <td>75</td>
                <td>syit</td>

            </tr>
            </tbody>
        </table>
    );
}
export default TableHAD;
export {
    Table
}
