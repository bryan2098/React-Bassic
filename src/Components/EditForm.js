import React, { Component } from 'react'

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userObj.id,
            name: this.props.userObj.name,
            tell: this.props.userObj.tell,
            permission: this.props.userObj.permission
        }
    }


    //getUserEditInfo

    saveButton(){
        let info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tell = this.state.tell;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.showEditForm();

       
    }


    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }



    
    render() {

        return (
            <div className="col-12">
                <form >
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="exampleFormControlInput1" onChange={(event) => this.isChange(event)} defaultValue={this.props.userObj.name} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="tell" id="exampleFormControlInput1" onChange={(event) => this.isChange(event)} defaultValue={this.props.userObj.tell} placeholder="Phone" />
                    </div>
                    <select defaultValue={this.props.userObj.permission}  className="form-control" onChange={(event) => this.isChange(event)} name="permission">
                        <option value={0}>Choose permission</option>
                        <option value={1}>Admin</option>
                        <option value={2}>User</option>
                    </select>
                    <div className="form-group">
                        <button type="button" className="btn btn-outline-success" onClick={() => this.saveButton()}>Edit User </button>
                    </div>
                </form>
            </div>
        )
    }
}
