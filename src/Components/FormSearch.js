import React, { Component } from 'react';
import EditForm from './EditForm';

export default class FormSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fSearch: "",
            userObj: {}
        }
    }

    getUserInfo(info){
        this.setState({
            userObj: info
        })
        this.props.getUserEditInfoApp(info);
    }


    showButton() {
        if (this.props.hienThiNut)
            return (<button className="btn btn-outline-danger" onClick={() => this.props.ketNoi()} style={{ width: '220px' }}>Đóng lại</button>);
        else
            return (<button className="btn btn-outline-primary" onClick={() => this.props.ketNoi()} style={{ width: '220px' }}>Thêm mới</button>);
    }

    isChange(event) {
        this.setState({
            fSearch: event.target.value
        });
        this.props.checkConnectProps(event.target.value);
    }

    showEditForm() {
        if (this.props.valueStatusEdit === true)
            return (
                <EditForm  getUserEditInfo={(info) => this.getUserInfo(info)} showEditForm={() => this.props.showEditForm()} userObj={this.props.userEditObj}></EditForm>
            )
        else
            return false;
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6"> 
                    <form className="float-left">
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={(event) => this.isChange(event)} id="exampleFormControlInput1" placeholder="Text search" />
                        </div>
                        {/* <div className="float-left">
                        <button type="button" className="btn btn-outline-primary" onClick={(data) => {this.props.checkConnectProps(this.state.fSearch)}}>Search</button>
                    </div> */}
                    </form></div>
                </div>
                <div className="row">
                    <div className="col-6">{this.showEditForm()}</div>
                </div>
                <div className="row">
                    <div className="col-6">{this.showButton()}</div>
                </div>
            </div>
        )
    }
}
