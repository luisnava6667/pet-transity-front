import React, { useState } from 'react'
import axios from 'axios'

const LocationAutocomplete = ({ setCoordinates }) => {
  const [address, setAddress] = useState('')

  const handleChange = async (e) => {
    const inputAddress = e.target.value
    setAddress(inputAddress)

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      )
      console.log(response.data)
      const location = response.data.results[0].geometry.location

      setCoordinates(location)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <input
      type='text'
      value={address}
      onChange={handleChange}
      placeholder='Ingresa tu dirección'
    />
  )
}

export default LocationAutocomplete
