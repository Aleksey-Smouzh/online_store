import React from 'react'
import basket from "./BasketPage.module.css"
import{NavLink} from "react-router-dom"


function BasketPage() {
  return (
<div className={basket.container}>BasketPage

<div><NavLink to='/store'>Back to store</NavLink></div>

</div>
  )
}

export default BasketPage