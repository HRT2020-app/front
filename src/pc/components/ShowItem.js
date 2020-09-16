import React, { Component } from 'react';
import update from 'immutability-helper'

export default class ShowItem extends React.Component{

    constructor(props){
        super();
        const item=props.item
        this.state={
            id: item.id,
            name: item.name,
            mon: {
                time: item.mon,
                selected: false
            },
            tue: {
                time: item.tue,
                selected: false
            },
            wed: {
                time: item.wed,
                selected: false
            },
            thu: {
                time: item.thu,
                selected: false
            },
            fri: {
                time: item.fri,
                selected: false
            },
            tmp_mon: item.mon,
            selected_tmp_mon: false,
            class: "",
            // FIXME: modeいるか？
            mode: "選択",
            // FIXME: btnは変えない
            // TODO: classとかstateに持たせる必要
            modeClass: "btn btn-primary"
        }

        this.handleSelectDay = this.handleSelectDay.bind(this);
        this.handleDeleteDay = this.handleDeleteDay.bind(this);
        this.handleChangeSelectMon = this.handleChangeSelectMon.bind(this);
        this.handleChangeSelectTmpMon = this.handleChangeSelectTmpMon.bind(this)
    }

    handleSelectDay(e) {
        if(this.state.mode="選択") {
            this.setState({mode: "削除", modeClass: "btn btn-danger", class: "bg-warning"});
        }
    }

    handleDeleteDay(e) {
        // if(this.state.mon.selected==true) {
        //     this.setState({ mon: update(this.state.mon, { time: { $set: "" } }) });
        // }
        if(this.state.selected_tmp_mon) {
            this.setState({ tmp_mon: "" })
        }

        this.setState({mode: "選択", modeClass: "btn btn-primary", class: ""})
    }

    handleChangeSelectMon(e) {
        this.setState({ mon: update(this.state.mon, { selected: { $set: true } }) });
    }

    handleChangeSelectTmpMon(e) {
        this.setState({ selected_tmp_mon: true });
    }

    showCheckMon() {
        if(this.state.mode == "削除") {
            //onChange={this.handleChangeSelectMon()}
            return(
                <span>
                    <input type="checkbox" onChange={this.handleChangeSelectTmpMon}></input>
                </span>
            );
        }
    }

    // FIXME: 名前
    showButton() {
        if(this.state.mode == "選択") {
            return(
                <button type="submit" className={this.state.modeClass} onClick={this.handleSelectDay}>{this.state.mode}</button>
            );
        }
        else {
            if(this.state.mode == "削除") {
                return(
                    <button type="submit"className={this.state.modeClass} onClick={this.handleDeleteDay}>{this.state.mode}</button>
                );
            }
        }
    }

    render(){
        return(
            <tr className={this.state.class}>
                <td className="align-middle">{this.state.name}</td>
                <td className="align-middle">{this.showCheckMon()}{this.state.tmp_mon}</td>
                <td className="align-middle">{this.state.tue.time}</td>
                <td className="align-middle">{this.state.wed.time}</td>
                <td className="align-middle">{this.state.thu.time}</td>
                <td className="align-middle">{this.state.fri.time}</td>
                <td className="align-middle">{this.showButton()}</td>
            </tr>
        );
    }

}
