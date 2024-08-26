import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import React,{useState} from "react";
import './shop.css';


import Data from '../data.js';
function Shop (){

  const [data,setData]= useState(Data);
  const filterResult=(catItem)=>{
    const result=Data.filter((curData)=>{
      return curData.catagory===catItem;
    });
 
  setData(result);
  }
  return(
   <>
 
   
        
<div className="container-fluid mx-2">
  <div className="col mt-5 ">
    <div className="col d-flex px-4">
      <div class="col">
     
       <DropdownButton variant="success" id="dropdown btn-success" title="Labratory Equipment"> 
       <div className='drop'>
       <Dropdown.Item  href="#/Lab equipment" onClick={()=>filterResult('Labequipments')}>Labratory Equipment</Dropdown.Item>
      
      <Dropdown.Item href="#/Lab chemical" onClick={()=>filterResult('Labratorychemical')}>Labratory Chemical</Dropdown.Item>
      <Dropdown.Item href="#/Microbiology" onClick={()=>filterResult('microbiology')}>Microbiology</Dropdown.Item>
      </div>
    </DropdownButton>
 
      </div>
      <div class="col">
      <button className="btn btn-success btn-sm w-90 mb-4 px-4" onClick={()=>filterResult('Industrialchemical')}>Industrial Chemical</button>
      </div>
      <div class="col">
      <button className="btn btn-success btn-sm w-90 mb-4 px-5 " onClick={()=>filterResult('kitsupplies')}>Kit Supplies</button>
      </div>
      <div class="col">
      <button className="btn btn-success btn-sm w-90 mb-4 px-5" onClick={()=>filterResult('Saftyequipment')}>Safty Equipment</button>
      </div>
      <div class="col">
      <button className="btn btn-success btn-sm w-90 mb-4 px-5" onClick={()=>filterResult('Teachingmodel')}>Teaching Model</button>
      </div>
      <div class="col">
      <button className="btn btn-success btn-sm w-90 mb-4 ml-3 px-4" onClick={()=>filterResult('Glassware&Plasticware')}>Glassware & Plasticware</button>
    </div>
    </div>
    
    <div className="cols-md-3">
      <div className="row ">
        {data.map((values)=>{
          const {tittle,details,image}=values;
          return(
            <div class=" col-md-3 mt-5">
              <div className="card">
                <div class="col">
                  <img src={image} className="card-img-top img" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Name:{tittle}</h5>
                  <p className="card-text">
                  {details}
                  </p>
                  <button className="btn btn-primary"> buy </button>
    
                </div>
              </div>
            </div>
   
          )
        })}
      </div>
      </div>
      </div>
    </div>

 
   </>
 );
}
export default Shop;
