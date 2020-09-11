import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <div className="row">
            <Link to="../../sp">
                <button className="btn btn-link">
                    前週
                </button>
            </Link>
            <Link to="../../sp">
                <button className="btn btn-link">
                    次週
                </button>
            </Link>
            <Link to="../../sp">
                <button className="btn btn-link">
                    ダウンロード
                </button>
            </Link>
        </div>
    );
}
