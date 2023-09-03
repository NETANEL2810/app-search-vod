import React from "react";
import { useNavigate } from "react-router-dom";
function VodItem(props) {
  const nav=useNavigate();
  let item = props.item;
 
  const clickInfo =()=>{
    // window.alert("info");
    nav(`/info/${item.imdbID}`);
  }
  return (
    <div className="col-md-4 p-2">
      <div className="border p-2 h-100 overflow-hidden shadow ">
        <img src={item.Poster} className="float-start me-2 w-25" />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button onClick={clickInfo} className="btn btn-dark mt-1">
          More info
        </button>
      </div>
    </div>
  );
}

export default VodItem;
// <div className="col-md-3 p-1 my-3">
// <div class="card h-100" style={{width:15 + 'rem'}}>
//   <img src={item.Poster} class="card-img-cover" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">{item.Title}</h5>
//     <p class="card-text">
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </p>
//     <a href="#" class="btn btn-primary">
//       Go somewhere
//     </a>
//   </div>
// </div>
// </div>
