import React from 'react';
import {fetchGetList,fetchDelete,fetchGetSummary} from "../../apis/fetchData"
import ShowItem from "./ShowItem";
import Footer from './Footer';
import {Link} from "react-router-dom";

class ShowList extends React.Component{

    constructor(){
        super();
        const { startyear, startmonth, startdate, endmonth, enddate, startdaystr, enddaystr } = this.initDate();

        this.state={
            selectedWeekList: [],
            startyear: startyear,
            startmonth: startmonth,
            startdate: startdate,
            endmonth: endmonth,
            enddate: enddate,
        };

        this.startdayChangebefore = this.startdayChangebefore.bind(this);
        this.startdayChangeafter = this.startdayChangeafter.bind(this);
        this.download = this.download.bind(this);

        let getlist = {reservation: {start: startdaystr,end: enddaystr}};
        const list_data = fetchGetList(startdaystr,enddaystr);
        //const list_data = fetchGetList(JSON.stringify());

        //selectedWeekListにlist_dataを整形して追加
        this.setlist(list_data);

    }

    //その週の月、金の日付を取得
    initDate(){
        let nowday =Date.now();
        let startday = new Date(nowday);
        let endday = new Date(nowday);
        let startyear = startday.getUTCFullYear();
        let day = startday.getUTCDay();
        let sub = day - 1;
        if(sub<0){
            sub=6;
        }
        startday.setUTCDate(startday.getUTCDate()-sub);
        endday.setUTCDate(startday.getUTCDate()+4);

        const startmonth = ('00'+(startday.getUTCMonth()+1)).slice(-2);
        const startdate = ('00'+startday.getUTCDate()).slice(-2);
        const startdaystr= startday.getUTCFullYear()+"-"+startmonth+"-"+startdate;

        const endmonth = ('00'+(endday.getUTCMonth()+1)).slice(-2);
        const enddate = ('00'+endday.getUTCDate()).slice(-2);
        const enddaystr= endday.getUTCFullYear()+"-"+endmonth+"-"+enddate;

        return {startyear,startmonth, startdate, endmonth, enddate, startdaystr, enddaystr};
    }

    setlist(list_data){
        this.state.selectedWeekList=[];
        let updateNameList =[];
        const daydict = ["sun","mon","tue","wed","thu","fri"]

        list_data.map( (item) => {

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

            if(updateNameList.includes(item.name)){
                let listItem = this.state.selectedWeekList.find((user) =>{
                    return (user.name === item.name)
                });

                listItem[daydict[wDay]].id = item.id;
                listItem[daydict[wDay]].time = hour + ":"+ strin +"~"+hourout+":"+strout;
            }
            else{
                let list = {
                    name: item.name,
                    mon: {
                        id: "",
                        time: ""
                    },
                    tue: {
                        id: "",
                        time: ""
                    },
                    wed: {
                        id: "",
                        time: ""
                    },
                    thu: {
                        id: "",
                        time: ""
                    },
                    fri: {
                        id: "",
                        time: ""
                    },
                };

                list[daydict[wDay]].id = item.id;
                list[daydict[wDay]].time = hour + ":"+ strin+"~"+hourout+":"+strout;

                this.state.selectedWeekList.push(list);
                updateNameList.push(item.name);
            }
        })
    }


    startdayChangebefore(){

        let beforedate = new Date(this.state.startyear,(this.state.startmonth-1),this.state.startdate);
        let afterstartinfo = new Date(beforedate);
        let afterendinfo = new Date(beforedate);

        afterstartinfo.setUTCDate(beforedate.getUTCDate()-7);
        afterendinfo.setUTCDate(beforedate.getUTCDate()-3);

        const afterstartmonth = ('00'+(afterstartinfo.getMonth()+1)).slice(-2);
        const afterstartdate = ('00'+afterstartinfo.getDate()).slice(-2);

        const afterendmonth = ('00'+(afterendinfo.getMonth()+1)).slice(-2);
        const afterenddate = ('00'+afterendinfo.getDate()).slice(-2);

        this.setState({startyear: afterstartinfo.getFullYear()});
        this.setState({startmonth: afterstartmonth});
        this.setState({startdate: afterstartdate});

        this.setState({endmonth: afterendmonth});
        this.setState({enddate: afterenddate});

        const startdaystr= afterstartinfo.getFullYear()+"-"+afterstartmonth+"-"+afterstartdate;
        const enddaystr= afterendinfo.getFullYear()+"-"+afterendmonth+"-"+afterenddate;

        //this.setState({selectedWeekList : []});

        //変更した日付に合わせて新しいリストを取得
        let getlist = {reservation: {start: startdaystr,end: enddaystr}};
        const list_data = fetchGetList(startdaystr,enddaystr);
        //const list_data = fetchGetList(JSON.stringify(getlist));

        //selectedWeekListにlist_dataを整形して追加
        this.setlist(list_data);

    }

    startdayChangeafter(){

        let beforedate = new Date(this.state.startyear,(this.state.startmonth-1),this.state.startdate);
        let afterstartinfo = new Date(beforedate);
        let afterendinfo = new Date(beforedate);

        afterstartinfo.setUTCDate(beforedate.getUTCDate()+7);
        afterendinfo.setUTCDate(beforedate.getUTCDate()+11);

        const afterstartmonth = ('00'+(afterstartinfo.getMonth()+1)).slice(-2);
        const afterstartdate = ('00'+afterstartinfo.getDate()).slice(-2);

        const afterendmonth = ('00'+(afterendinfo.getMonth()+1)).slice(-2);
        const afterenddate = ('00'+afterendinfo.getDate()).slice(-2);

        this.setState({startyear: afterstartinfo.getFullYear()});
        this.setState({startmonth: afterstartmonth});
        this.setState({startdate: afterstartdate});

        this.setState({endmonth: afterendmonth});
        this.setState({enddate: afterenddate});

        const startdaystr= afterstartinfo.getFullYear()+"-"+afterstartmonth+"-"+afterstartdate;
        const enddaystr= afterendinfo.getFullYear()+"-"+afterendmonth+"-"+afterenddate;


        //変更した日付に合わせて新しいリストを取得
        let getlist = {reservation: {start: startdaystr,end: enddaystr}};
        //const list_data = fetchGetList(JSON.stringify(getlist));
        const list_data = fetchGetList(startdaystr,enddaystr);
        //selectedWeekListにlist_dataを整形して追加
        this.setlist(list_data);

    }

    download(){

        let filemonth = this.state.startyear+"-"+this.state.startmonth;
        fetchGetSummary(JSON.stringify(filemonth));

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
                        <tbody>
                            {this.state.selectedWeekList.map( (item) => <ShowItem item={item}/>)}
                        </tbody>
                    </table>
            </div>
            <div className="row">
                <button className="btn btn-link" onClick={this.startdayChangebefore}>
                    前週
                </button>
                <button className="btn btn-link" onClick={this.startdayChangeafter}>
                    次週
                </button>
                <button className="btn btn-link" onClick={this.download}>
                    ダウンロード
                </button>
            </div>
            </>


        );
    }
}

export default ShowList;
