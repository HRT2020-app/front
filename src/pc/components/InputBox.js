import React from 'react';
import {fetchApply} from "../../apis/fetchData"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {registerLocale} from "react-datepicker"
import ja from 'date-fns/locale/ja';


registerLocale('ja', ja);

export default class InputBox extends React.Component {

    constructor(props) {
        super();
        const Today = new Date();
        // getMonth()は0月-11月
        const month = Today.getMonth() + 1
        const today = Today.getFullYear() + '-' + month + '-' + Today.getDate();

        this.state = {
            name: '',
            date: today,
            in_room: '',
            out_room: '',
        };
        this.handleInRoomChange = this.handleInRoomChange.bind(this);
        this.handleOutRoomChange = this.handleOutRoomChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO: validationをまとめる(別ファイル?)
    in_time_validation(in_time) {
        let out_room = this.state.out_room
        if(out_room !== '' && out_room <= in_time) {
            window.alert("入室時間と退室時間を見直してください");
            return false;
        }
        else {
            return true;
        }
    }

    out_time_validation(out_time) {
        if(this.state.in_room >= out_time) {
            window.alert("入室時間と退室時間を見直してください");
            return false;
        }
        else {
            return true;
        }
    }

    submit_validation() {
        if(this.state.name === '' || this.state.in_room === '' || this.state.out_room === '') {
            return false;
        }
        else {
            return true;
        }
    }

    handleInRoomChange(e) {
        let in_room = '';
        if(this.in_time_validation(e.target.value)) {
            in_room = e.target.value;
        }
        this.setState({in_room: in_room});
    }
    handleOutRoomChange(e) {
        let out_room = '';
        if(this.out_time_validation(e.target.value)) {
            out_room = e.target.value;
        }
        this.setState({out_room: out_room});
    }
    handleDateChange(e) {
        const month = e.getMonth() + 1
        let date = e.getFullYear() + '-' + month + '-' + e.getDate();
        this.setState({date: date});
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleSubmit(e) {
        // {name, in_room, out_room}の形に直してsubmit
        if(this.submit_validation()) {
            let applyForm = {reservation: {name: '', in_room: '', out_room: ''}};
            let name = this.state.name;
            let in_room = new Date(this.state.date + ' ' + this.state.in_room).toISOString();
            let out_room = new Date(this.state.date + ' ' + this.state.out_room).toISOString();

            applyForm.reservation.name = name;
            applyForm.reservation.in_room = in_room;
            applyForm.reservation.out_room = out_room;

            let result = fetchApply(JSON.stringify(applyForm));
            window.alert(result);
        }
        else {
            window.alert("ERROR\n入力を見直してください");
        }

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
                                value={this.state.date}
                            />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="入室時刻" onChange={this.handleInRoomChange} value={this.state.in_room} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="退室時刻" onChange={this.handleOutRoomChange} value={this.state.out_room} />
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
