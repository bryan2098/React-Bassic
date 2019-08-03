import React, { Component } from 'react'

export default class TableDataRow extends Component {

    ShowPermission() {
        if (this.props.permission === "1")
            return "Admin";
        else
            return "User";
    }

    editClick() {
        this.props.changStatusEditForm();
        this.props.editFunClick();
    }

    deleteClick(id) {
        this.props.deleteButtonClick(id);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.ShowPermission()}</td>
                <td>
                    <div className="form-group">
                        <button className="btn btn-outline-danger" onClick={(id) => this.deleteClick(this.props.id)}>Delete</button>
                        <button className="btn btn-outline-secondary" onClick={() => this.editClick()}>Edit</button>
                    </div>
                </td>
            </tr>
        )
    }
}
