import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import {fetchGetList,fetchApply,fetchDelete,fetchGetNumList,fetchGetSummary} from "../apis/fetchData"
import InputBox from './components/InputBox';
import Footer from './components/Footer';
import Header from './components/Header';
// fetchGetList("2020-08-01","2020-08-07")
// fetchApply({reservations:{id:10,name:"name1",in:"2020-08-24T10:00:00.000Z",out:"2020-08-24T19:30:00.000Z"}})
// fetchDelete(0)
// fetchGetNumList("2020-08-01","2020-08-07")
// fetchGetSummary("2020-08-01","2020-08-31")

export default class PC extends Component {

  constructor(props) {
    super(props);
    this.title = '入室管理APP';
  }

  // HTMLをどう描画するか
  render() {
    return (
      <div className="container PC">
        <div className="Header">
          <Header title={this.title} />
        </div>
        <div className="InputBox">
          <InputBox/>
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}