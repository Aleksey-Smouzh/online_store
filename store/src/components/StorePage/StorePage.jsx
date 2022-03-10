import React from 'react'
import store from "./StorePage.module.css"
import storage from '../data/storage.json'


function StorePage() {
  return (
    <div className={store.container}>StorePage
    {storage.map(item=>
    <section>
        <ul>
            <li> <h2>{item.title}</h2></li>
            <li><h3>{item.color}</h3></li>
            <li><h3>{item.size}</h3></li>
            <li><h2>{item.cost}</h2></li>
            <li>{item.img}</li>
            <li>{item.id}</li>
        </ul>
    </section> )}
    
    
    
    
    
    
    </div>



  )
}

export default StorePage