import React from 'react';
import {fetchApply} from "../../apis/fetchData"

export default class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            in_time: '',
            out_time: '',
            isSubmitted: '',
        };
        this.handleInTimeChange = this.handleInTimeChange.bind(this);
        this.handleOutTimeChange = this.handleOutTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInTimeChange(e) {
        this.setState({ in_time: e.target.value});
    }
    handleOutTimeChange(e) {
        this.setState({ out_time: e.target.value });
    }
    handleDateChange(e) {
        this.setState({ date: e.target.value });
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        let tmp = fetchApply(this.state);
        this.setState({ isSubmitted: 'success' });
        // TODO: successを画面に表示する
    }


    render() {
        return (
            <div>
                <form className="" handleSubmit={this.handleSubmit}>
                    <div className="row">
                        <input type="text" className="form-control col-md-5 input-element" placeholder="名前" onChange={this.handleNameChange} />
                    </div>
                    <div className="row">
                        <div className="input-element">
                            <input type="date" className="form-control" placeholder="日付" onChange={this.handleDateChange} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="入室時刻" onChange={this.handleInTimeChange} />
                        </div>
                        <div className="input-element">
                            <input type="time" className="form-control" placeholder="退室時刻" onChange={this.handleOutTimeChange} />
                        </div>
                        <div className="input-element">
                            <button type="submit"className="form-control btn btn-primary">送信</button>
                        </div>
                    </div>
                </form>
                <div className="">{this.state.isSubmitted}</div>
            </div>
        );
    }
}
