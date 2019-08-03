import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


export default class Table extends Component {

    constructor(props){
        super(props);
        this.state ={ 
            id: ""
        }
    }

    deleteButtonClick(idUser){
        this.props.deleteButtonClick(idUser);
    }


    MapDataRow = () =>
        this.props.dataUser.map((value, key) =>
            (
                <TableDataRow deleteButtonClick={(id) => this.deleteButtonClick(id)} id={key + 1} key={key} name={value.name} phone={value.tell} permission={value.permission} 
                editFunClick={() => this.props.editFun(value)} changStatusEditForm={() => this.props.clickChangeStatusShowForm()}></TableDataRow>
            )
        )

    render() {
        return (
            <div className="col float-left">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.MapDataRow()}

                    </tbody>
                </table>
            </div>
        )
    }
}
