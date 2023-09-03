import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
// info about movie according id
function MovieInfo() {
  let params = useParams();///query from url
  const nav =useNavigate();
  let [item,setItem]=useState({});
  useEffect(()=>{
    doApi();///request Api --> acording id in the params
  },[])
  const doApi=async()=>{
    let url=`http://www.omdbapi.com/?i=${params["id"]}&apikey=5a292f28`;
    let resp=await fetch(url);
    let data=await resp.json();
    console.log(data);
    setItem(data);///upDate the item

  }
  return (
    <div className="container p-4 d-flex my-2 ">
      <div className="float-left border p-0 mx-5">
      <img 
          src={item.Poster}
          className="col-md-12 float-left me-2 "
        /> 
      </div>
      <div className="float-left border p-2">
        <h3 >{item.Title}</h3>
        <h4>runtime: {item.Runtime}</h4>
        <h4>rating: {item.imdbRating}</h4>
        <h4>gener: {item.Runtime}</h4>
        <div className="my-3 col-md-5 ">plot:{item.Plot}</div>
        <button onClick={()=>{nav(-1)}} className="btn btn-dark mt-4">back to list</button>
      </div>
    </div>
  );
}

export default MovieInfo;
