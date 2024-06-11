import React from 'react'
import Navbar from '../component/Navbar'
import CategoryMenu from '../component/CategoryMenu'
import FoodItem from '../component/FoodItem'
import Cart from '../component/Cart'

function Home() {
  return (<>
   <Navbar/>
   <CategoryMenu/>
   <FoodItem/>
   <Cart/>
  </>)
}

export default Home
