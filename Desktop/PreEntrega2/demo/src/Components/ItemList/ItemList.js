import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'
const ItemList = ({item}) => {
  return (
    <div className='row'>
      {item.map(item =>
        <div className='col-md-3' key={item.id}>


          <Item item={item} />


        </div>
        )}
    </div>
  )
}

export default ItemList