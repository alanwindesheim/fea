import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import elevator from "../images/elevator2.png";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Id", width: 150 },
  {
    field: "liftnaam",
    headerName: "Naam",
    width: 150,
    editable: true,
  },{
    field: "liftid",
    headerName: "id",
    width: 150,
    editable: true,
  },
  {
    field: "locatie",
    headerName: "Locatie",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
];



var newie =[];
var newiee = [];

  const getData = async () => {
    const data = [];
    
    const f1_data = await fetch("http://localhost:8080/api/liften")
      .then((res) => res.json());
    newie.push(f1_data);

    newie[0].forEach((p) => newiee.push({
      id: p._id,
      liftnaam: p.liftnaam,
      locatie: p.liftlocatie
    }))
    

    console.log(newie[0][1].liftnaam);
    console.log(newiee);
    console.log(newie);
  };
  
  getData();


  

const rows = [
  { id: "Lift 1", liftnaam: "Windesheim", sr: "Actief" },
  { id: "Lift 2", lastName: "Parkeergarage", age: "Niet Actief" },
  { id: "Lift 3", lastName: "Treinstation", age: "Niet Actief" },
  { id: "Lift 4", lastName: "Bibliotheek", age: "Niet Actief" },
  { id: "Lift 5", lastName: "Sportschoool", age: "Niet Actief" },
  { id: "Lift 6", lastName: "Ziekenhuis", age: "Niet Actief" },
  { id: "Lift 7", lastName: "Flat", age: "Niet Actief" },
];

console.log(rows);

const LiftKiezen = () => {
  return (
    <section>
      <Helmet bodyAttributes={{ style: "background-color : #ede1ff" }} />
      <div className="liftPage">
        <div className="boxlift1"></div>
        <div className="boxlift2"></div>
        <div className="boxlift3">
          <div className="boxlift3div1">
            <img src={elevator} className="boxlift3image" alt="" />
            <h1 className="boxlift3h1">Liftgebruik</h1>
          </div>
          <div className="boxlift3div2">
            <button disabled className="boxlift3button">
              <h4>BEKIJKEN</h4>
            </button>
          </div>
          <div className="boxlift3div3">
            <button disabled className="boxlift3button">
              <h4>BEWERKEN</h4>
            </button>
          </div>
          <div className="boxlift3div4">
            <button disabled className="boxlift3button">
              <h4>VERWIJDEREN</h4>
            </button>
          </div>
          <div className="boxlift3div5">
            <button className="boxlift3button">
              <h4>TOEVOEGEN</h4>
            </button>
          </div>
          <div className="boxlift3div6">
            <button className="boxlift3buttonloguit">
              <h4>UITLOGGEN</h4>
            </button>
          </div>
        </div>
        <div className="boxlift4">
          <div>{/* <h1 className="boxlift4h1">liften beheren</h1> */}</div>
          <div className="boxlift4div2">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={9}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiftKiezen;
