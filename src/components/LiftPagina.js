import React from "react";
import { Helmet } from "react-helmet";
import { DataGrid } from "@material-ui/data-grid";
import { Doughnut } from "react-chartjs-2";

const columns = [
  {
    field: "id",
    headerName: "Liftgebruik",
    width: 250,

    editable: true,
  },
  {
    field: "trap",
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
    field: "datum",
    headerName: "Datum",
    width: 200,
    editable: true,
  },
];

const rows = [
  { id: "35", trap: "12", co2: "4", datum: "11-08-2021" },
  { id: "45", trap: "43", co2: "5", datum: "10-08-2021" },
  { id: "78", trap: "43", co2: "8", datum: "08-08-2021" },
  { id: "21", trap: "80", co2: "8", datum: "07-08-2021" },
  { id: "50", trap: "121", co2: "8", datum: "06-08-2021" },
  { id: "25", trap: "60", co2: "8", datum: "05-08-2021" },
  { id: "10", trap: "43", co2: "8", datum: "04-08-2021" },
  { id: "5", trap: "20", co2: "8", datum: "03-08-2021" },
  { id: "20", trap: "30", co2: "8", datum: "02-08-2021" },
  { id: "40", trap: "30", co2: "8", datum: "01-08-2021" },
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

const LiftPagina = () => {
  return (
    <section>
      <Helmet bodyAttributes={{ style: "background-color : #ede1ff" }} />
      <div className="kiezenPage">
        <div className="kiezenbox1">
          <button className="kiezenbox1button">TERUG</button>
          <h1 className="kiezenbox1h1">Lift 1 - Windesheim</h1>
          <h3 className="kiezenbox1h3">Live Dashboard</h3>
        </div>
        <div className="kiezenbox2">
          <div className="kiezenbox2div1">
            <h3 className="kiezenbox2h3">Trap is deze week</h3>
            <h1 className="kiezenbox2h1">315</h1>
            <h3 className="kiezenbox2h3">Keer gebruikt</h3>
          </div>
          <div className="kiezenbox2div2">
            <h3 className="kiezenbox2h3">Lift is deze week</h3>
            <h1 className="kiezenbox2h1">40</h1>
            <h3 className="kiezenbox2h3">Keer gebruikt</h3>
          </div>
          <div className="kiezenbox2div3">
            <h3 className="kiezenbox2h3">C02 uitstoot deze week </h3>
            <h1 className="kiezenbox2h1">13²</h1>
            <h3 className="kiezenbox2h3">C02 kilogram uitstoot</h3>
          </div>
        </div>
        <div className="kiezenbox3">
          <h3 className="kiezenbox3h3">Statistieken</h3>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
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
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiftPagina;
