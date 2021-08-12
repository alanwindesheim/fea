import React from "react";
import { Helmet } from "react-helmet";
import elevator from "../images/elevator2.png";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Liftnaam", width: 150 },
  {
    field: "lastName",
    headerName: "Locatie",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Status",
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: "Lift 1", lastName: "Windesheim", age: "Actief" },
  { id: "Lift 2", lastName: "Parkeergarage", age: "Niet Actief" },
  { id: "Lift 3", lastName: "Treinstation", age: "Niet Actief" },
  { id: "Lift 4", lastName: "Bibliotheek", age: "Niet Actief" },
  { id: "Lift 5", lastName: "Sportschoool", age: "Niet Actief" },
  { id: "Lift 6", lastName: "Ziekenhuis", age: "Niet Actief" },
  { id: "Lift 7", lastName: "Flat", age: "Niet Actief" },
];

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
