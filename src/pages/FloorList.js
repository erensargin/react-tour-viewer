import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTour } from '../requests'
import TourContext from '../TourContext'
import { useContext } from 'react'

export default function FloorList() {
    const {tourId} = useParams()
    let [local_data,setLocalData] = useState(null)
    const {setData} = useContext(TourContext);

    useEffect(() => {
        getTour(tourId).then(data=>setLocalData(data))
        
    }, [tourId])

    useEffect(() => {
        if(local_data){
            document.getElementById('desc').innerHTML = local_data.description
        }

    }, [local_data])

    let setGlobalData = (data,index)=>{
        setData(data)
    }

  return (
    <div>
        <p>
            {local_data? local_data.name: "Waiting for data"}
        </p>
        <p id='desc'></p>
        <p> Floors in "{local_data? local_data.name: "Waiting for data"}" </p>
        <ul>
            {local_data? local_data.structure.map((floor,index)=> <li  key={floor.id}  onClick={()=> setGlobalData(floor,index)}> <Link to={`/${local_data.id}/${floor.id}`}  > {floor.name}  </Link></li> ): "Waiting for data"}
        </ul>

    

    
    </div>
  )
}
