import React, { Component } from 'react';

export default class ShowItem extends React.Component{

    constructor(props){
        super();
        const item=props.item
        this.state={
            id: item.id,
            name: item.name,
            mon: item.mon,
            tue: item.tue,
            wed: item.wed,
            thu: item.thu,
            fri: item.fri,
        }
    }
    
    render(){
        return(
            <tbody>
                <tr>  
                    <th scope="row">{this.state.name}</th>
                    <td class="align-middle">{this.state.mon}</td>
                    <td class="align-middle">{this.state.tue}</td>
                    <td class="align-middle">{this.state.wed}</td>
                    <td class="align-middle">{this.state.thu}</td>
                    <td class="align-middle">{this.state.fri}</td>
                    <td class="align-middle">
                        <button type="submit" class="btn btn-danger">削除</button>
                    </td>
                </tr>
            </tbody>
        ); 
    }

}

