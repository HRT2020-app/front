import React from 'react';
import {fetchGetList,fetchDelete,fetchGetSummary} from "../../apis/fetchData"
import ShowItem from "./ShowItem";

class ShowList extends React.Component{

    constructor(){
        super();
        const { startmonth, startdate, endmonth, enddate, startdaystr, enddaystr } = this.initDate();

        this.state={
            selectedWeekList: [],
            startmonth: startmonth,
            startdate: startdate,
            endmonth: endmonth,
            enddate: enddate,
        };

        const list_data = fetchGetList(startdaystr,enddaystr); 

        //selectedWeekListにlist_dataを整形して追加
        this.setlist(list_data);
        
    }

    //その週の月、金の日付を取得
    initDate(){
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

        const startmonth = ('00'+(startday.getUTCMonth()+1)).slice(-2);
        const startdate = ('00'+startday.getUTCDate()).slice(-2);
        const startdaystr= startday.getUTCFullYear()+"-"+startmonth+"-"+startdate;
        
        const endmonth = ('00'+(endday.getUTCMonth()+1)).slice(-2);
        const enddate = ('00'+endday.getUTCDate()).slice(-2);
        const enddaystr= endday.getUTCFullYear()+"-"+endmonth+"-"+enddate;
        
        return {startmonth, startdate, endmonth, enddate, startdaystr, enddaystr};
    }

    setlist(list_data){
        let updateidlist =[];
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

            if(updateidlist.includes(item.id)){
                let listItem = this.state.selectedWeekList.find((user) =>{
                    return (user.id === item.id)
                });
                console.log(listItem);
                listItem[daydict[wDay]]=hour + ":"+ strin +"~"+hourout+":"+strout;
            }
            else{  
                let list = {
                    id: item.id,
                    name: item.name,
                    mon: "",
                    tue: "",
                    wed: "",
                    thu: "",
                    fri: "",
                };

                list[daydict[wDay]]=hour + ":"+ strin+"~"+hourout+":"+strout;

                this.state.selectedWeekList.push(list);
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
                        {this.state.selectedWeekList.map( (item) => <ShowItem item={item}/>)}
                    </table>
            </div>
            </>
        );
    }
}

export default ShowList;



