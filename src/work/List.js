import React from 'react'
import { useNavigate } from 'react-router-dom'

export const List = () => {
    const data=[
        {
        userid:1,
        id:1,
        name:"25th may 2015 rob simpson seen",
        detail:'Faster fontloading with',
        paragraph:'web fonts are great and make the web a more beatuiful space,however,loading them can be slow, which result in an unwanted side effect:'
       },
       {
        userid:1,
        id:2,
        name:"24th may 2015 rob simpson seen",
        detail:'Improving font-end preformance',
        paragraph:'Last year I worte a post Need for speed,where i shared my workflow and technique along with the tools involved in the development of my site'
       },
       {
        userid:1,
        id:3,
        name:"23th may 2015 kev simpsons",
        detail:'Responsible social share link',
        paragraph:'Social share script are convenient and easy to copy & paste but rely on javaScript and add additional overhead to your site, which means more HTTP request and slower load times'
       },
       {
        userid:1,
        id:4,
        name:"22th may 2015 kev simpsons",
        detail:'Responsive typography with sass maps',
        paragraph:'Managing consistent, typography rhythm isnt easy, but when the type is responsive, it make things even more difficult.Fortunately sass maps can help make responsive typography much more manageable'
       },
       {
        userid:1,
        id:5,
        name:"21th may 2015 Rob simpsons",
        detail:'Google mobile-friendly search results update',
        paragraph:'Back in February 2015 Google announced that starting April 21 it would be expanding its use of mobile-friendliness as a ranking signal.Today is April 21.'
       }
    
      ]

      const navigate=useNavigate()
      const handleClick=((data)=>{
      if(data){
        navigate(`/Detail/${data.id}`,{state:data})
      }
      })
  return (
    
    <>
    {data.map((data) => (
            <div className='container' style={{paddingLeft:180, paddingRight:180,padding:20}}>
                 <strong>{data.name}</strong>
                  <h1>{data.detail}</h1>
                  <p>{data.paragraph}</p>
         <button onClick={()=>handleClick(data)} >Read More</button>
            </div>

    ))}</>
  )
}

