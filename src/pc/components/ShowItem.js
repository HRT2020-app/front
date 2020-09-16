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
            // FIXME: classとは？
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
        this.handleChangeSelectTue = this.handleChangeSelectTue.bind(this);
        this.handleChangeSelectWed = this.handleChangeSelectWed.bind(this);
        this.handleChangeSelectThu = this.handleChangeSelectThu.bind(this);
        this.handleChangeSelectFri = this.handleChangeSelectFri.bind(this);
    }

    handleSelectDay(e) {
        if(this.state.mode="選択") {
            this.setState({mode: "削除", modeClass: "btn btn-danger", class: "bg-warning"});
        }
    }

    handleDeleteDay(e) {
        if(this.state.mon.selected==true) {
            this.setState({ mon: update(this.state.mon, { time: { $set: "" } }) });
        }
        if(this.state.tue.selected==true) {
            this.setState({ tue: update(this.state.tue, { time: { $set: "" } }) });
        }
        if(this.state.wed.selected==true) {
            this.setState({ wed: update(this.state.wed, { time: { $set: "" } }) });
        }
        if(this.state.thu.selected==true) {
            this.setState({ thu: update(this.state.thu, { time: { $set: "" } }) });
        }
        if(this.state.fri.selected==true) {
            this.setState({ fri: update(this.state.fri, { time: { $set: "" } }) });
        }
        // 選択モードに変更
        this.setState({mode: "選択", modeClass: "btn btn-primary", class: ""})
    }

    handleChangeSelectMon(e) {
        this.setState({ mon: update(this.state.mon, { selected: { $set: true } }) });
    }
    handleChangeSelectTue(e) {
        this.setState({ tue: update(this.state.tue, { selected: { $set: true } }) });
    }
    handleChangeSelectWed(e) {
        this.setState({ wed: update(this.state.wed, { selected: { $set: true } }) });
    }
    handleChangeSelectThu(e) {
        this.setState({ thu: update(this.state.thu, { selected: { $set: true } }) });
    }
    handleChangeSelectFri(e) {
        this.setState({ fri: update(this.state.fri, { selected: { $set: true } }) });
    }

    showCheckday(day) {
        if(this.state.mode == "削除") {
            switch(day) {
                case "mon":
                    return(
                        <span>
                            <input type="checkbox" onChange={this.handleChangeSelectMon}></input>
                        </span>
                    );
                case "tue":
                    return(
                        <span>
                            <input type="checkbox" onChange={this.handleChangeSelectTue}></input>
                        </span>
                    );
                case "wed":
                    return(
                        <span>
                            <input type="checkbox" onChange={this.handleChangeSelectWed}></input>
                        </span>
                    );
                case "thu":
                    return(
                        <span>
                            <input type="checkbox" onChange={this.handleChangeSelectThu}></input>
                        </span>
                    );
                case "fri":
                    return(
                        <span>
                            <input type="checkbox" onChange={this.handleChangeSelectFri}></input>
                        </span>
                    );
            }
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
                <td className="align-middle">{this.showCheckday("mon")}{this.state.mon.time}</td>
                <td className="align-middle">{this.showCheckday("tue")}{this.state.tue.time}</td>
                <td className="align-middle">{this.showCheckday("wed")}{this.state.wed.time}</td>
                <td className="align-middle">{this.showCheckday("thu")}{this.state.thu.time}</td>
                <td className="align-middle">{this.showCheckday("fri")}{this.state.fri.time}</td>
                <td className="align-middle">{this.showButton()}</td>
            </tr>
        );
    }

}
