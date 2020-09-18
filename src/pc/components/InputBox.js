import React from 'react';
import {fetchApply} from "../../apis/fetchData"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {registerLocale} from "react-datepicker"
import ja from 'date-fns/locale/ja';

import Timepicker from './TimePicker'

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

    // TODO: validationの挙動
    in_time_validation(in_time) {
        let out_room = this.state.out_room
        if(out_room != '' && out_room <= in_time || in_time.indexOf('-') != -1) {
            window.alert("入室時間と退室時間を見直してください");
            return false;
        }
        else {
            return true;
        }
    }

    out_time_validation(out_time) {
        let in_room = this.state.in_room
        if(in_room != '' && in_room >= out_time || out_time.indexOf('-') != -1) {
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

    handleInRoomChange(time) {
        let in_room = '';
        if(this.in_time_validation(time)) {
            in_room = time;
        }
        this.setState({in_room: in_room});
    }
    handleOutRoomChange(time) {
        let out_room = '';
        if(this.out_time_validation(time)) {
            out_room = time;
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
                        <div>
                            <table class="table table-sm">
                                <tbody>
                                    <tr>
                                        <td className="align-middle deleteline">
                                            <label className="labelsize underline">name</label>
                                        </td>
                                        <td className="align-middle deleteline">
                                            <div className="input-element">    
                                                <div>
                                                    <input type="text" className="form-control inputsize" onChange={this.handleNameChange} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle deleteline">
                                            <label className="labelsize underline">date</label>
                                        </td>   
                                        <td className="align-middle deleteline"> 
                                            <div className="input-element">
                                                <div className="input-element">
                                                    <DatePicker
                                                        dateFormat="yyyy/MM/dd"
                                                        className="form-control inputsize"
                                                        locale='ja'
                                                        onChange={this.handleDateChange}
                                                        value={this.state.date}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle deleteline">
                                            <label className="labelsize underline">in_room</label>
                                        </td>
                                        <td className="align-middle deleteline">
                                            <div className="input-element">  
                                                <div className="input-element inputsize">
                                                    <Timepicker handleInRoomChange={this.handleInRoomChange} inRoom={this.state.in_room}/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle deleteline">
                                            <label className="labelsize underline">out_room</label>
                                        </td>
                                        <td className="align-middle deleteline">
                                            <div className="input-element form-group">
                                                    <div className="input-element inputsize">
                                                        <Timepicker handleOutRoomChange={this.handleOutRoomChange} outRoom={this.state.out_room}/>
                                                    </div>    
                                            </div>
                                        </td>  
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                        <div className="input-element boxsize button_wrapper">
                            <button type="submit button"className="form-control btn btn-default btn-circle btn-color">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
