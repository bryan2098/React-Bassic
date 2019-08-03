import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import Fotter from './Components/Footer';
import FormSearch from './Components/FormSearch';
import data from './data.json';




export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trangthai: false,
      data: data,
      textSearch: "",
      editUserStatus: false,
      userEditObj: {}
    }
  }

  deleteButtonClick(id) {
    this.setState({data: this.state.data.filter(item => item.id !== id.toString())});
  }

  getUserEditInfoApp(info) {
    this.state.data.forEach(val => {
      if (val.id === info.id) {
        val.name = info.name;
        val.tell = info.tell;
        val.permission = info.permission;
      }
    })
  }

  changeTrangThai() {
    this.setState({ trangthai: !this.state.trangthai })
  }

  changeEditUserStatus() {
    this.setState({ editUserStatus: !this.state.editUserStatus })
  }

  getNewData = (name, tell, permission) => {
    let item = {};
    let idNew = (data.length + 1).toString();
    this.state.data.forEach((itemx) => {
      if (itemx.id.indexOf(idNew) !== -1)
        item.id = idNew;
      else
        item.id = idNew;
    })

    item.name = name;
    item.tell = tell;
    item.permission = permission;
    data.push(item);
    this.setState({
      data: data
    })
  }



  getTextSearch(data) {
    this.setState({
      textSearch: data
    })
  }

  editUser = (user) => {
    this.setState({
      userEditObj: user
    })
  }

  render() {
    let result = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.textSearch) !== -1) {
        result.push(item);
      }
    })

    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <FormSearch getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} userEditObj={this.state.userEditObj} ketNoi={() => this.changeTrangThai()} showEditForm={() => this.changeEditUserStatus()} hienThiNut={this.state.trangthai} checkConnectProps={(data) => this.getTextSearch(data)} valueStatusEdit={this.state.editUserStatus}></FormSearch>
          <div className="col-12">
            <Table deleteButtonClick={(id) => this.deleteButtonClick(id)} dataUser={result} editFun={(user) => this.editUser(user)} clickChangeStatusShowForm={() => this.changeEditUserStatus()}></Table>
            <Form hienThiForm={this.state.trangthai} dataForm={(name, tell, permission) => this.getNewData(name, tell, permission)} ></Form>
          </div>
        </div>
        <Fotter></Fotter>
      </div>
    )
  }
}