import React, { useEffect } from 'react'
import TourContext from '../TourContext'
import { useContext } from 'react'

export default function HotspotList() {

    const {data,setData} = useContext(TourContext);
    const {id,name,floor_plan,hotspots} = data

    useEffect(() => {
        console.log(data)

    }, [data])


    
  return (
    <div>Hotspots in "{name}"
    
    <ul>
        {hotspots.map(hotspot=><li key={hotspot.id} >{hotspot.name}</li>)}
    </ul>

    <p>{name} - floor plan </p>

    <img src={floor_plan} alt={name} />
    
    </div>
  )
}
