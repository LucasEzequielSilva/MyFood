import React from 'react'
const ItemDetail = ({item}) => {
    console.log(item)
  return (
    <>
    <h1>{item.name}</h1>
    </>
  )
}

export default ItemDetail