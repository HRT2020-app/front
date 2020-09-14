import React from 'react';
import {fetchApply} from "../../apis/fetchData"
import update from 'immutability-helper'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {registerLocale} from "react-datepicker"
import ja from 'date-fns/locale/ja';

registerLocale('ja', ja);

export default class InputBox extends React.Component {

    constructor(props) {
        super(props);
        const Today = new Date();
        const today = Today.getFullYear() + '-' + Today.getMonth() + '-' + Today.getDate();

        this.state = {
            reservation: {
                name: '',
                date: today,
                in_room: '',
                out_room: ''
            },
        };
        this.handleInRoomChange = this.handleInRoomChange.bind(this);
        this.handleOutRoomChange = this.handleOutRoomChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO: validationをまとめる(別ファイル)
    in_time_validation(in_time) {
        let out_room = this.state.reservation.out_room
        if(out_room !== '' && out_room <= in_time) {
            window.alert("入室時間と退室時間を見直してください");
            return false;
        }
        else {
            return true;
        }
    }

    out_time_validation(out_time) {
        if(this.state.reservation.in_room >= out_time) {
            window.alert("入室時間と退室時間を見直してください");
            return false;
        }
        else {
            return true;
        }
    }

    handleInRoomChange(e) {
        // TODO: validation
        let in_room = '';
        if(this.in_time_validation(e.target.value)) {
            in_room = e.target.value;
        }
        this.setState({ reservation: update(this.state.reservation, { in_room: { $set: in_room } }) });
    }
    handleOutRoomChange(e) {
        // TODO: validation
        let out_room = '';
        if(this.out_time_validation(e.target.value)) {
            out_room = e.target.value;
        }
        this.setState({ reservation: update(this.state.reservation, { out_room: { $set: out_room } }) });
    }
    handleDateChange(e) {
        let date = e.getFullYear() + '-' + e.getMonth() + '-' + e.getDate();
        this.setState({ reservation: update(this.state.reservation, { date: { $set: date } }) });
    }
    handleNameChange(e) {
        this.setState({ reservation: update(this.state.reservation, { name: { $set: e.target.value } }) });
    }
    handleSubmit(e) {
        // {name, in_room, out_room}の形に直してsubmit
        // TODO: この形にするならimmutability-helper使う必要ない
        let reservation = {reservation: {name: '', in_room: '', out_room: ''}};
        let name = this.state.reservation.name
        let in_room = new Date(this.state.reservation.date + ' ' + this.state.reservation.in_room).toISOString();
        let out_room = new Date(this.state.reservation.date + ' ' + this.state.reservation.out_room).toISOString();

        reservation.reservation.name = name;
        reservation.reservation.in_room = in_room;
        reservation.reservation.out_room = out_room;

        let result = fetchApply(JSON.stringify(reservation));
        window.alert(result)
    }


    render() {
        return (
            <div>
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-element">
                            <input type="text" className="form-control" placeholder="名前" onChange={this.handleNameChange} />
                        </div>
                        <div className="input-element">
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                className="form-control"
                                locale='ja'
                                onChange={this.handleDateChange}
                                value={this.state.reservation.date}
                            />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="入室時刻" onChange={this.handleInRoomChange} value={this.state.reservation.in_room} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="退室時刻" onChange={this.handleOutRoomChange} value={this.state.reservation.out_room} />
                        </div>
                        <div className="input-element">
                            <button type="submit"className="form-control btn btn-primary">送信</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
