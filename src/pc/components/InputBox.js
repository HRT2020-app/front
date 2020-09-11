import React from 'react';

export default function InputBox() {
    return (
        <div className="">
            <div className="row">
                <input type="text" className="form-control col-md-5 input-element" placeholder="名前" />
            </div>
            <div className="row">
                <div className="input-element">
                    <input type="date" className="form-control" placeholder="日付" />
                </div>
                <div className="input-element">
                    <input type="time" className="form-control" placeholder="入室時刻" />
                </div>
                <div className="input-element">
                    <input type="time" className="form-control" placeholder="退室時刻" />
                </div>
                <div className="input-element">
                    <button className="form-control btn btn-primary">送信</button>
                </div>
            </div>
        </div>
    );
}
