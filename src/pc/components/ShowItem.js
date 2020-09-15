import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import {fetchGetList,fetchApply,fetchDelete,fetchGetNumList,fetchGetSummary} from "../../apis/fetchData"
import { render } from '@testing-library/react';

export default function ShowItem(props){

    const {item}=props;

    return(
        <tbody>
            <tr>  
                <th scope="row">{item.name}</th>
                <td class="align-middle">{item.mon}</td>
                <td class="align-middle">{item.tue}</td>
                <td class="align-middle">{item.wed}</td>
                <td class="align-middle">{item.thu}</td>
                <td class="align-middle">{item.fri}</td>
                <td class="align-middle">
                    <button type="submit" class="btn btn-danger">削除</button>
                </td>
            </tr>
        </tbody>
    ); 

}