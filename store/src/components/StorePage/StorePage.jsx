import React from 'react'
import store from "./StorePage.module.css"
import storage from '../data/storage.json'


function StorePage() {



  return (
    <div className={store.container}>StorePage
    
    <a href='/main'>Back</a>
    
    
    {storage.map(item=>

   
       <nav>
           <ul>
            <li key={item.id}><h2 className={store.title}>{item.title}</h2>
            <div><h3 className={store.color}>{item.color}</h3></div>
            <div><h3 className={store.size}>{item.size}</h3></div>
            <div><h2 className={store.cost}>{item.cost}</h2></div>
            </li>







            </ul>









            </nav>  
        
     )}
    
    
    
    
    
    
    </div>



  )
}

export default StorePage