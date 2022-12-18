import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./map.scss"

const Map = () => {
    const order = useSelector((state) => state.order);
    var i= 0;
    const nextLocation = () => {
        if(i<order.orderItems.length-1){
            i++
        }
    }
    useEffect(()=>{
        const iframeData=document.getElementById("iframeId")
        console.log("order.orderItemslength",order.orderItems.length)
        const lat=order.orderItems[i].coordLat;
        const lon=order.orderItems[i].coordLon;
        iframeData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div className='map'>
            <iframe id="iframeId" height="500px" width="100%" title='1'></iframe>
            <button onClick={()=> nextLocation()}>Next Order</button>
        </div>
    );
}

export default Map