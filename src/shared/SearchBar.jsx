import React, { useRef } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

import { RiMapPin2Line } from "react-icons/ri";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
   const locationRef = useRef('')
   const distanceRef = useRef(0)
   const maxGroupSizeRef = useRef(0)

   const searchHandler = async() => {
      const location = locationRef.current.value
      const distance = distanceRef.current.value
      const maxGroupSize = maxGroupSizeRef.current.value

      if (location === '' || distance === '' || maxGroupSize === '') {
         return alert('All fields are required!')
      }

   }

   
   
}

export default SearchBar