import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce website is an online platform that facilitates buying and selling
        of products or services over the internet. It serves as a virtual marketplace where 
        businesses and indicators showcase thier products, interact with customers, and company
        transactions without the need for a physical presence. E-commerce websites have gained 
        immense popularity due to thier conventional accessibility, and the global reach they offer.</p>
        <p>E-commerce websites typically display products and services for detailed description, images, prices,
        and any available items (e.g., sizes, colors). Each product usually has its own dedicated page with its
        relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
