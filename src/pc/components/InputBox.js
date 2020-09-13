import React from 'react';
import {fetchApply} from "../../apis/fetchData"
import update from 'immutability-helper'

export default class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation: {
                name: '',
                date: '',
                in_room: '',
                out_room: ''
            }
        };
        this.handleInRoomChange = this.handleInRoomChange.bind(this);
        this.handleOutRoomChange = this.handleOutRoomChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInRoomChange(e) {
        this.setState({ reservation: update(this.state.reservation, { in_room: { $set: e.target.value } }) });
    }
    handleOutRoomChange(e) {
        this.setState({ reservation: update(this.state.reservation, { out_room: { $set: e.target.value } }) });
    }
    handleDateChange(e) {
        this.setState({ reservation: update(this.state.reservation, { date: { $set: e.target.value } }) });
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
                            <input type="date" className="form-control" placeholder="日付" onChange={this.handleDateChange} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="入室時刻" onChange={this.handleInRoomChange} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="退室時刻" onChange={this.handleOutRoomChange} />
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
