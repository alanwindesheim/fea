import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import elevator from "../images/elevator2.png";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from 'react-router-dom';


function App(){
  




const [data, setData] = useState([])
const columns = [
  { field: "id", headerName: "Id", width: 150, hide: true },
  {
    field: "liftnaam",
    headerName: "Naam",
    width: 250,
    editable: true,
  },{
    field: "liftid",
    headerName: "id",
    width: 200,
    editable: true,
    hide: true
  },
  {
    field: "liftlocatie",
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

useEffect(() => {
  fetch("http://localhost:8080/api/liften")
  .then((res) => res.json())
  .then(res=>{ 
    console.log(res)
    setData(res)});
}, [])


    // fetch("http://localhost:8080/api/liften")
    //   .then((res) => res.json());
    // newie.push(liftdata);

    // newie[0].forEach((p) => newiee.push({
    //   id: p._id,
    //   liftnaam: p.liftnaam,
    //   locatie: p.liftlocatie
    // }))
    
    // newiee = JSON.parse(JSON.stringify(newiee));

 
    
    
   
 
  

const rows = [
  { id: "Lift 1", liftnaam: "Windesheim", sr: "Actief" },
  { id: "Lift 2", lastName: "Parkeergarage", age: "Niet Actief" },
  { id: "Lift 3", lastName: "Treinstation", age: "Niet Actief" },
  { id: "Lift 4", lastName: "Bibliotheek", age: "Niet Actief" },
  { id: "Lift 5", lastName: "Sportschoool", age: "Niet Actief" },
  { id: "Lift 6", lastName: "Ziekenhuis", age: "Niet Actief" },
  { id: "Lift 7", lastName: "Flat", age: "Niet Actief" },
];


const [selectionModel, setSelectionModel] = React.useState([]);
const buttonRef = useRef();

const disableButton = () =>{
  buttonRef.current.disabled = true; // this disables the button
 }

useEffect(() => {
  console.log(selectionModel);
  console.log('yes');
 
  var button = document.getElementsByClassName("boxlift3button");
  button.disabled = true;

}, [selectionModel])

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
          <Link to={{pathname:`/liftPagina/${selectionModel}`, 
                state: {liftid: 'idjfsd'} 
                }}
                >
            <button ref={buttonRef} className="boxlift3button">
              <h4>BEKIJKEN</h4>
            </button>
            </Link>
          </div>

          {/* <div className="boxlift3div6">
          
            <button className="boxlift3buttonloguit">
              <h4>UITLOGGEN</h4>
            </button>
           
          </div> */}
        </div>
        <div className="boxlift4">
          <div>{/* <h1 className="boxlift4h1">liften beheren</h1> */}</div>
          <div className="boxlift4div2">
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={9}
              NoRowsOverlay
              onSelectionModelChange={(rows) => setSelectionModel(rows)}
              
             
            />
            

           
          </div>
        </div>
      </div>
    </section>
  )
    }

export default App;
