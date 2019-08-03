import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tell: "",
            permission: 0
        }
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;


        this.setState({
            [name]: value
        })
    }



    render() {
        if (this.props.hienThiForm) {
            return (
                <div className="col-4">
                    <form >
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" onChange={(event) => this.isChange(event)} id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="tell" onChange={(event) => this.isChange(event)} id="exampleFormControlInput1" placeholder="Phone" />
                        </div>
                        <select className="form-control" name="permission" onChange={(event) => this.isChange(event)}>
                            <option value={0}>Choose permission</option>
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                        </select>
                        <div className="form-group">
                            <button type="reset" onClick={() => this.props.dataForm(this.state.name, this.state.tell, this.state.permission)} className="btn btn-outline-success">Add New</button>
                        </div>
                    </form>
                </div>
            )
        }
        else
            return false;
    }
}
