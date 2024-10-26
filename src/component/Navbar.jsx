import React, { useEffect, useState } from 'react'
import Card from './Card'
import Btn from './Btn'

const Navbar = () => {
  const [search,setsearch]= useState("pakistan")
  const [Newsdata,setNewsdata]= useState(null)
  const api = "be70b70b2f71456e8390f06119035f5a"
  const getData = async()=>{
 const responce = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}`)
 const jsondata = await responce.json()
 console.log(jsondata.articles);
 setNewsdata(jsondata.articles)
  }
  useEffect(()=>{
    getData()
  },[])

  const handleInput = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
    setsearch(e.target.value)         
  }

  const userInput = (event) =>{
    setsearch(event.target.value)
}
  
  return (
    <>
     <div className='flex bg-slate-500 p-5'>
      <div className='ms-10 '><h1 className='text-2xl font-semibold '>News App</h1></div>
      <div  >
        <ul className=' flex ms-96 mt-2  '>
            <li className='ms-5'><a href="">All News </a></li>
            <li className='ms-5'><a href="" >Treading</a></li>
        </ul>
      </div>

      <div className='ms-64 '>
        <input type="text" placeholder='Search News' className=' border-2 p-1 w-60 ms-5'  onChange={handleInput} value={search}/>
        <button className='bg-red-600 ms-2 p-2 ' onClick={getData}>Search </button>
      </div>    
    </div>

    <Btn/>



    

   
  {Newsdata?  <Card data = {Newsdata}/>:null}


    </>
  )
}

export default Navbar