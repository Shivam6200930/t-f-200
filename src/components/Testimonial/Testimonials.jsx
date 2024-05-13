import React from 'react'
import './Testimonials.css';

import per01 from '../../file/image/Person-1.jpg'
import per02 from '../../file/image/Person-2.jpg'
import per03 from '../../file/image/Person-3.jpg'
import per04 from '../../file/image/Person-4.jpg'
import per05 from '../../file/image/Person-5.jpg'
import per06 from '../../file/image/Person-6.jpg'

const Testimonials = () => {
   

   return <>
         <div className="per01">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per01} className='img1' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per02">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per02} className='img2' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Devy Jones</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per03">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per03} className='img3' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Lia Franklin</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per04">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per04} className='img4' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Karls Marn</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per05">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per05} className='img5' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Robert Brown</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per06">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per06} className='img6' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Peter dan</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </>
}

export default Testimonials