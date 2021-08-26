import { Helmet } from "react-helmet";
import { DataGrid } from "@material-ui/data-grid";
import { Doughnut } from "react-chartjs-2";
import { useParams } from "react-router";
import moment from 'moment'
import React, { useEffect, useState } from "react";

function App(){
  
 
 

  const { id } = useParams();

// data van de laatse week
const [pastweek, setPast] = useState([])
const [percData, setPerc] = useState([])
useEffect(() => {
  fetch(`http://localhost:8080/api/liftenhistory/pastweek/${id}`)
  .then((res) => res.json())
  .then(res=>{ 
    console.log(res[0].liftgebruik);
    let liftgebruik = 0;
    let co2 = 0;
    let trapgebruik = 0;

    let liftgebruikOld = 0;
    let co2Old = 0;
    let trapgebruikOld = 0;

    let dataNew = {};
    let dataPerc = {};


  for (var i = 0; i < 7; i++) {
    liftgebruik += res[i].liftgebruik;
    co2 += res[i].co2;
    trapgebruik += res[i].trapgebruik;
  }
  for (var i = 8; i < 15; i++) {
    liftgebruikOld += res[i].liftgebruik;
    co2Old += res[i].co2;
    trapgebruikOld += res[i].trapgebruik;
  }
  
  let changePercLiftgebruik = relDiff(liftgebruikOld, liftgebruik);
  let changePercCo2 = relDiff(co2Old, co2);
  let changePercTrapgebruik = relDiff(trapgebruikOld, trapgebruik);

   dataPerc['liftgebruiktPerc'] = changePercLiftgebruik;
   dataPerc['changePercCo2'] = changePercCo2;
   dataPerc['trapgebruikPerc'] = changePercTrapgebruik;
  
   dataNew['liftgebruik'] = liftgebruik;
   dataNew['co2'] = co2;
   dataNew['trapgebruik'] = trapgebruik;
    setPast(dataNew)
    setPerc(dataPerc)
  
  });
    
    
}, [])
console.log(pastweek);
console.log(percData);

function relDiff(a, b) {
  let answer =  100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
  let answers = answer.toFixed(2);
  if(a < b){
    return "-" + answers;
  }else{
    return "+" + answers;
  }

  
 }

// tabel data
const [dataa, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/api/liftenhistory/${id}`)
    .then((res) => res.json())
    .then(res=>{ 
      let momentDates = res.map(({date})=>{
        return {
          date: moment(date).format('DD-MM-YYYY'),
        };
      })

      momentDates.forEach(function (item, index) {
        res[index].date = momentDates[index].date;
      });

      setData(res)});
      console.log(dataa);
  }, [])

  
// specifieke lift data
  const [liftdata, setLiftData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/api/liften/${id}`)
    .then((res) => res.json())
    .then(res=>{ 
      setLiftData(res)});
  }, [])



const columns = [
  {
    field: "id",
    headerName: "Liftgebruik",
    width: 250,

    editable: true,
  },
  {
    field: "trapgebruik",
    headerName: "Trapgebruik",
    width: 250,
    editable: true,
  },
  {
    field: "co2",
    headerName: "CO2 Uitstoot KG",
    width: 670,
    editable: true,
  },
  {
    field: "date",
    headerName: "Datum",
    width: 200,
    editable: true,
  },
];

const data = {
  labels: ["Trapgebruikers", "Liftgebruikers"],
  datasets: [
    {
      label: "Vandaag",
      data: [315, 40],
      backgroundColor: ["yellow", "red"],
      hoverOffset: 2,
    },
  ],
};


  return (
    <section>
      <Helmet bodyAttributes={{ style: "background-color : #ede1ff" }} />
      <div className="kiezenPage">
        <div className="kiezenbox1">
          <button className="kiezenbox1button">TERUG</button>
          <h1 className="kiezenbox1h1">{liftdata.liftnaam}</h1>
          <h3 className="kiezenbox1h3">Live Dashboard</h3>
        </div>
        <div className="kiezenbox2">
          <div className="kiezenbox2div1">
            <h3 className="kiezenbox2h3">Trap is deze week</h3>
            <h1 className="kiezenbox2h1">{pastweek.trapgebruik}<span class="percs" style={{color: Math.sign(percData.trapgebruikPerc) === -1 ? "#e54a38" : "#20bf6b"}} >{percData.trapgebruikPerc}%</span></h1>
            <h3 className="kiezenbox2h3">Keer gebruikt</h3>
          </div>
          <div className="kiezenbox2div2">
            <h3 className="kiezenbox2h3">Lift is deze week</h3>
            <h1 className="kiezenbox2h1">{pastweek.liftgebruik}<span class="percs" style={{color: Math.sign(percData.liftgebruiktPerc) === -1 ? "#20bf6b" : "#e54a38"}} >{percData.liftgebruiktPerc}%</span></h1>
            <h3 className="kiezenbox2h3">Keer gebruikt</h3>
          </div>
          <div className="kiezenbox2div3">
            <h3 className="kiezenbox2h3">C02 uitstoot deze week </h3>
            <h1 className="kiezenbox2h1">{pastweek.co2}<span class="percs" style={{color: Math.sign(percData.changePercCo2) === -1 ? "#20bf6b" : "#e54a38"}} >{percData.changePercCo2}%</span></h1>
            <h3 className="kiezenbox2h3">C02 kilogram uitstoot</h3>
          </div>
        </div>
        <div className="kiezenbox3">
          <h3 className="kiezenbox3h3">Statistieken</h3>
          <DataGrid
            rows={dataa}
            columns={columns}
            pageSize={8}
        
          />
        </div>
        <div className="kiezenbox4">
          <div className="kiezenbox4div1">
            <Doughnut
              height={500}
              width={450}
              data={data}
              options={{
                maintainAspectRatio: false,
                disableMultipleSelection: true
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );


}

export default App;
