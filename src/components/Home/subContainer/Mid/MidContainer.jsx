import React from 'react'
import MidContainerItem from './MidContainerItem'
const items =[
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image1.jpg"
  },
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image2.jpg"
  },
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image3.jpg"
  },
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image4.jpg"
  },
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image5.jpg"
  },
  {
    header:"Milking Twice a Day",
    content:"Fresh Milk reaches your doorstep within 24-48 hours",
    src:"./assets/images/image6.jpg"
  },
]
const Items = () => {
  return (
    <div className='mainContainer'>
      <h1 className="mainHeader">
        Why Country Delight? 
      </h1>
      <h2 className="subHeader">
      We make sure every product you get has been fully tested for purity and freshness. 
      </h2>
      <div className='subItems'>
        {items.map((item,id)=> <MidContainerItem key={id} header={item.header} content={item.content} src={item.src}/>
        )}
      </div>
    </div>
  )
}

export default Items
