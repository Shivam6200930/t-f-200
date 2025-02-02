import React, {useState, useContext, useEffect} from 'react'
import './Booking.css'

import { Form, FormGroup, ListGroup, ListGroupItem} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utilise/config';

import { RiStarFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";

const Booking = ({tour, avgRating}) => {

    const { price, reviews, title } = tour
    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    const [quantity,setquantity]=useState(1)
   
    const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      tourName: title,
      fullName: '',
      phone: '',
      numberofproducts: 1,
      bookAt: ''
   })

    const handleChange = e => {
      setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const serviceFee = 50
    const totalAmount = Number(price) * Number(booking.numberofproducts) + Number(serviceFee)
    
    const handleChangeproduct = e=>{
      if(Number(e.target.value)>=1)
      setquantity(Number(e.target.value))
    }

    const handleClick = async e => {
      e.preventDefault()
      console.log(booking);
      
      try {
         if (!user || user === undefined || user === null) {
            return alert('Please sign in')
         }

         const res = await fetch('http://localhost:4000/api/v1/booking', {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(booking)
         })

         const result = await res.json()
         console.log(result)

         if(!res.ok) {
            return alert(result.message)
         }
         navigate('/thank-you')
      } catch (error) {
         alert(error.message)
      } 
   }

  return (
    <div className='booking'>

    <div className="booking_top d-flex align-items-center justify-content-between">

       <h3><i class='BiRupee'><BiRupee/></i>{price} <span>/per product</span></h3>
       <span className="tour_rating d-flex align-items-center">
            <i class='ri-star-fill'><RiStarFill/></i> 
            {avgRating === 0 ? null : avgRating} ({reviews?.length})          
        </span>

    </div>

    <div className="booking_form">
            <h5>Information</h5>
            <Form className='booking_info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder='Full Name' id='fullName' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="tel" placeholder='Phone' id='phone' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup className='d-flex align-items-center gap-3'>
                  <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} />
                  <input type="number" placeholder='Products' id='guestSize' required
                  value={quantity}    onChange={handleChangeproduct} />
               </FormGroup>
            </Form>
         </div>

            <div className='booking_bottom'>
               <ListGroup>
                  <ListGroupItem className='border-0 px-0'>
                     <h5 className='d-flex align-items-center gap-1'><i class='BiRupee'><BiRupee/></i>{price}<i class='ri-close-line'><RiCloseFill/>Per Product</i></h5>
                     <span><i class='BiRupee'><BiRupee/></i>{Number(price)*quantity}</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 px-0'>
                     <h5>Service Charge</h5>
                     <span><i class='BiRupee'><BiRupee/></i>{serviceFee}</span>
                  </ListGroupItem>
                  <ListGroupItem className='total border-0 px-0'>
                     <h5>Total</h5>
                     <span><i class='BiRupee'><BiRupee/></i>{(Number(price)*quantity)+serviceFee}</span>
                  </ListGroupItem>
               </ListGroup>

               <button className='w-100 mt-4' onClick={handleClick}>Booking Now</button>

            </div>

    </div>
  )
}

export default Booking