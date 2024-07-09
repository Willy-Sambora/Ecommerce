import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (

    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to our premier eCommerce site, your ultimate destination for the latest fashion trends 
            and timeless classics. Explore a diverse range of high-quality apparel, accessories, 
            and footwear for men and women. Enjoy seamless shopping with detailed product descriptions, 
            secure payment options, and swift delivery. Redefine your style with us today!</p>
            <p>
            Discover exclusive collections, enjoy seasonal sales, and join our loyalty program 
            for special rewards. With our commitment to quality and customer satisfaction, 
            shopping with us is more than just a purchase – it’s a premium experience.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
