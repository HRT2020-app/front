import React, { Component } from 'react';
const server = `https://...`

export const fetchGetList = (start,end) => {
  return [
    {id:10,name:"name1",in:"2020-08-24T10:00:00.000Z",out:"2020-08-24T19:30:00.000Z"},
    {id:15,name:"name2",in:"2020-08-24T10:00:00.000Z",out:"2020-08-24T19:30:00.000Z"},
  ]

  let ret = ""

  fetch(server+`/reservations/?start=${start}&?end=${end}`, {mode: 'cors'})
    .then((response) => {
      const json = response.json();
      console.log(json);
      return json;
    })
    .then((myJson) => {
        console.log(myJson.code)
        if (myJson.code != 200){
          console.log("ロード失敗");
          ret = false;
        } else {
          ret = myJson.data.reservations;
        }
    });
  
    return ret;
}

export const fetchApply = (data) => {
  return "Success"

  // const obj = {hello: "world"};
  const method = "POST";
  const body = JSON.stringify(data);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let ret = ""

  fetch(server+`/reservations`, {method, headers, body})
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        console.log(myJson.code)
        if (myJson.code != 200){
          console.log("申請失敗");
          ret = false;
        } else {
          console.log("申請成功");
          ret = myJson.message;
        }
    });
  return ret;
}

export const fetchDelete = (id) => {
  return "Success"

  // const obj = {hello: "world"};
  const method = "DELETE";
  const body = JSON.stringify({id:id});
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  console.log(body)
  let ret = ""

  fetch(server+'/reservations', {method, headers, body})
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        console.log(myJson.code)
        if (myJson.code != 200){
          console.log("削除失敗");
          ret = false;
        } else {
          console.log("削除成功");
          ret = myJson.message;
        }
    });
  return ret;

}

export const fetchGetNumList = (start,end) => {
  return [
    {start:"2020-08-24T10:00:00.000Z",number:1},
    {start:"2020-08-24T11:00:00.000Z",number:2},
    {start:"2020-08-24T12:00:00.000Z",number:3},
  ]
  
  let ret = ""

  fetch(server+`/reservations/calender/?start=${start}&?end=${end}`, {mode: 'cors'})
    .then((response) => {
      const json = response.json();
      console.log(json);
      return json;
    })
    .then((myJson) => {
        console.log(myJson.code)
        if (myJson.code != 200){
          console.log("ロード失敗");
          ret = false;
        } else {
          ret = myJson.data.reservations;
        }
    });
  
    return ret;

}

export const fetchGetSummary = (start,end) => {
  // return ?
  let ret = ""

  fetch(server+`/reservations/summary/?start=${start}&?end=${end}`, {mode: 'cors'})
    .then((response) => {
      const json = response.json();
      console.log(json);
      return json;
    })
    .then((myJson) => {
      console.log(myJson.code)
      if (myJson.code != 200){
        console.log("ロード失敗");
        ret = false;
      } else {
        // ?
        ret = "成功？"
      }
    });
  
    return ret;
  
}

export default fetchGetList;
