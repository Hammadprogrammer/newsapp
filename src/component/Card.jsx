import React from 'react'
// import Btn from './Btn';

const Card = ({data}) => {
    console.log(data);
   
    
  return (
<>
{/* <Btn/> */}
{
    data? data.map((item,index)=>{

        return                    <div className='border-2 w-72 h-[480px] float-start grid justify-items-center  ms-[55px] mt-5  '>
            <div > <img src={item.urlToImage} alt="" className='w-72 h-56 '/>
         
                <a className='text-[12px] font-bold underline hover:underline-offset-4 'onClick={()=>window.open(item.url)}>{item.title}</a>
                <p className='text-[14px] mt-3  '>{item.description}</p>
                <button className='bg-sky-500 hover:bg-sky-700 '  onClick={()=>window.open(item.url)} >Read More</button>
                </div>
           
        </div> 
      
    }):<h1>hello</h1>
}
</>
  )
}

export default Card
