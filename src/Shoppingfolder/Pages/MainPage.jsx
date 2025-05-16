

import React,{useState}from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import { Gents ,Ladies } from '../data' 
import Womencollection from '../Components/Womencollection'

const MainPage = () => {
const [gentsFashion, setgentsFashion] =useState(Gents)
const [ladiesFashion ,setladiesFashion] =useState(Ladies)
    console.log(Gents)
  return (
    <div>
       <Header/>
       <Banner/>
       <Collections gentsFashion={gentsFashion}/>
       <Womencollection ladiesFashion={ladiesFashion}/>
       <Footer/>

    </div>
  )
}

export default MainPage