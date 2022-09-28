import React from 'react'
import BottomContainerItem from './BottomContainerItem'
import './BottomContainer.css'
const productInfo = [
    {
        header:"The Natural Sweetness of Cow Milk ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit \
        Numquam quae vero quibusdam sit rerum ipsa deleniti ipsam \
        sunt corrupti assumenda officiis accusamus repudiandae, \
        iusto error dolorum maxime. Tempore, culpa cumque!",
        src:"./assets/images/image1.jpg"

    },
    {
        header:"The Natural Sweetness of Cow Milk ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit \
        Numquam quae vero quibusdam sit rerum ipsa deleniti ipsam \
        sunt corrupti assumenda officiis accusamus repudiandae, \
        iusto error dolorum maxime. Tempore, culpa cumque!",
        src:"./assets/images/image2.jpg"
    },
    {
        header:"The Natural Sweetness of Cow Milk ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit \
        Numquam quae vero quibusdam sit rerum ipsa deleniti ipsam \
        sunt corrupti assumenda officiis accusamus repudiandae, \
        iusto error dolorum maxime. Tempore, culpa cumque!",
        src:"./assets/images/image3.jpg"
    },
    {
        header:"The Natural Sweetness of Cow Milk ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit \
        Numquam quae vero quibusdam sit rerum ipsa deleniti ipsam \
        sunt corrupti assumenda officiis accusamus repudiandae, \
        iusto error dolorum maxime. Tempore, culpa cumque!",
        src:"./assets/images/image4.jpg"

    },
    {
        header:"The Natural Sweetness of Cow Milk ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit \
        Numquam quae vero quibusdam sit rerum ipsa deleniti ipsam \
        sunt corrupti assumenda officiis accusamus repudiandae, \
        iusto error dolorum maxime. Tempore, culpa cumque!",
        src:"./assets/images/image5.jpg"
    },

]

const BottomContainer = () => {
  return (
    <div className='product'>
        {
            productInfo.map((item,id)=> <BottomContainerItem key={id} header={item.header} desc={item.desc} src={item.src} />)
        }
    </div>
  )
}

export default BottomContainer
