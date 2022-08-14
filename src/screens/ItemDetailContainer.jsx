import React, {useState, useEffect} from 'react'
import data from '../data/data.json'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const {id} = useParams()
    console.log(id)
    const [item, setItem] = useState({})
    let promise = new Promise((resolve) => {
        resolve(data)
    })
    useEffect(()=>{
      promise.then(res=>{
        setItem(...res.filter(item=>item.id == id))
      })
    }, [])

  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer