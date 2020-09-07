import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import {fetchGetList,fetchApply,fetchDelete,fetchGetNumList,fetchGetSummary} from "../apis/fetchData"
// fetchGetList("2020-08-01","2020-08-07")
// fetchApply({reservations:{id:10,name:"name1",in:"2020-08-24T10:00:00.000Z",out:"2020-08-24T19:30:00.000Z"}})
// fetchDelete(0)
// fetchGetNumList("2020-08-01","2020-08-07")
// fetchGetSummary("2020-08-01","2020-08-31")

export default class SP extends Component {

  constructor(props) {
    super(props);
  }
  
  // HTMLをどう描画するか
  render() {
    return (<div> 
      <p>SP</p>
      <Link to="/">
        <button>
          go to PC
        </button>
      </Link>
    </div>);
  }
}