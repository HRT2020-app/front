import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import {fetchGetList,fetchApply,fetchDelete,fetchGetNumList,fetchGetSummary} from "../../apis/fetchData"
import { render } from '@testing-library/react';
import ShowItem from "./ShowItem";

class ShowList extends React.Component{

    constructor(){
        super();

        let nowday =Date.now();
        let startday = new Date(nowday);
        let endday = new Date(nowday);
        let day = startday.getUTCDay();
        let sub = day - 1;
        if(sub<0){
            sub=6;
        }
        startday.setDate(startday.getUTCDate()-sub);
        endday.setDate(startday.getUTCDate()+4);

        this.startmonth = ('00'+(startday.getUTCMonth()+1)).slice(-2);
        this.startdate = ('00'+startday.getUTCDate()).slice(-2);
        this.startdaystr= startday.getUTCFullYear()+"-"+this.startmonth+"-"+this.startdate;
        
        this.endmonth = ('00'+(endday.getUTCMonth()+1)).slice(-2);
        this.enddate = ('00'+endday.getUTCDate()).slice(-2);
        this.enddaystr= endday.getUTCFullYear()+"-"+this.endmonth+"-"+this.enddate;
        
        this.state={
            updatedlist: [],
            startmonth: this.startmonth,
            startdate: this.startdate,
            endmonth: this.endmonth,
            enddate: this.enddate,
        };

        

        this.list_data = fetchGetList("2020-08-01","2020-08-07");
        let list ={
                id:"",
                name:"",
                mon: "",
                tue:"",
                wed:"",
                thu:"",
                fri:"",
        };
        const daydict = ["sun","mon","tue","wed","thu","fri"]

        let updateidlist =[]; 

        this.list_data.map( (item) => {
                
            const tin = Date.parse(item.in);
            const din = new Date(tin);
            const wDay = din.getUTCDay();
            const hour = din.getUTCHours();
            const minutes =din.getUTCMinutes();            

            let strin =  ('00'+minutes).slice(-2);
            
            const tout = Date.parse(item.out);
            const dout = new Date(tout);
            const hourout = dout.getUTCHours();
            const minout =dout.getUTCMinutes();

            let strout =  ('00'+minout).slice(-2);

            if(updateidlist.includes(item.id)){
                let listItem = this.state.updatedlist.find((user) =>{
                    return (user.id === item.id)
                });
                console.log(listItem);
                listItem[daydict[wDay]]=hour + ":"+ strin +"~"+hourout+":"+strout;
            }
            else{  
                list = {
                    id: item.id,
                    name: item.name,
                    mon: "           ",
                    tue: "           ",
                    wed: "           ",
                    thu: "           ",
                    fri: "           ",
                };

                list[daydict[wDay]]=hour + ":"+ strin+"~"+hourout+":"+strout;

                this.state.updatedlist.push(list);
                updateidlist.push(item.id);
            }
        })
    }

    render(){
        return (      
            <>
            <div>      
                <table className="table table-bordered topcap text-center table-hover css_empty_cells_show">
                    <caption>{this.state.startmonth}/{this.state.startdate}~{this.state.endmonth}/{this.state.enddate}</caption>
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">Mon</th>
                                <th scope="col">Tue</th>
                                <th scope="col">Wed</th>
                                <th scope="col">Thu</th>
                                <th scope="col">Fri</th>
                                <th></th>
                            </tr>
                        </thead>
                        {this.state.updatedlist.map( (item) => <ShowItem item={item}/>)}
                    </table>
            </div>
            </>
        );
    }
}

export default ShowList;



