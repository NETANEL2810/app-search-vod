import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import VodStrip from "./vodStrip";
import VodList from "./vodList";
import VodInput from "./vodInput";
import "./home.css";

function Home() {
  let [querys] = useSearchParams();
  const [arr_vod, setArr] = useState([]);
  let searchQ;
  useEffect(() => {
    ///each reload do requset
    let searchQ = querys.get("s") || "superman";
    doApi(searchQ);
  }, [querys]); ///do requset each chgnge in the query
  ///API request
  const doApi = async (_searchQ) => {
    let myUrl = `http://www.omdbapi.com/?s=${_searchQ}&apikey=5a292f28`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setArr(data.Search);
  };
  return (
    <React.Fragment>
      <VodStrip></VodStrip>
      <VodList arr_vod={arr_vod}></VodList>
    </React.Fragment>
  );
}

export default Home;
