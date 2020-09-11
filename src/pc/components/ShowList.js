import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import {fetchGetList,fetchApply,fetchDelete,fetchGetNumList,fetchGetSummary} from "../../apis/fetchData"

export default function ShowList(props){

    var r_end = 5;  // 行数
    var c_end = 4;  // 列数

    const list = fetchGetList("2020-08-01","2020-08-07")

    // return(
    //     window.onload = function(){
    //         var tableJs = document.createElement('table');
    //                 tableJs.id = 'table_id2';
    //                 <table class="table table-bordered topcap text-center table-hover">
    //                     <caption>??/??-??/??</caption>
    //                     for (var r = 2; r < list.length; r++) {
    //                         var r000 = padLeft('0000', r);
    //                         var trJs = document.createElement('tr');
    //                         for (let c = 2; c < c_end; c++) {
    //                             var c000 = padLeft('0000', c);
    //                             var tdJs = document.createElement('td');
    //                             tdJs.innerHTML = 'r=' + r000 + ':c=' + c000;
    //                             trJs.appendChild(tdJs);
    //                         }
    //                         tableJs.appendChild(trJs);
    //                     }
    //                 </table>
    //                 var bodyJs = document.body;
    //                 bodyJs.appendChild(tableJs);
    //     }
    // );

    //for(var i=0; i<length; i++){

        //let id[i] = fetchGetList("2020-08-01","2020-08-07")[i].id;
        return (        
                <table class="table table-bordered topcap text-center table-hover">
                    <caption>??/??-??/??</caption>
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">Mon</th>
                            <th scope="col">Tue</th>
                            <th scope="col">Wed</th>
                            <th scope="col">Thu</th>
                            <th scope="col">Fri</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">wada</th>
                            <td></td>
                            <td class="align-middle">10:00-12:00</td>
                            <td></td>
                            <td>18:00-20:00</td>
                            <td></td>
                            <td>
                                <button type="submit" class="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ichino</th>
                            <td>10:00-12:00</td>
                            <td></td>
                            <td>18:00-20:00</td>
                            <td></td>
                            <td>10:00-12:00</td>
                            <td>
                            <button type="submit" class="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        );
    //};
}

function padLeft(pad, str) {
    if (typeof str === 'undefined')
        return pad;

    return (pad + str).slice(-pad.length);
}
function padRight(pad, str) {
    if (typeof str === 'undefined')
        return pad;

    return (str + pad).substring(0, pad.length);
}

