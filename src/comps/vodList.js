import React from 'react'
import VodItem from './vodItem'
// list of the all vod
function VodList(props) {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <h2>List TV shows:</h2>
            <div className='row'>
                {/* movie item is display here */}
                {props.arr_vod.map(item=>{
                    return(
                        // sent to Vod Item
                        <VodItem key={item.imdbID} item={item}></VodItem>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default VodList