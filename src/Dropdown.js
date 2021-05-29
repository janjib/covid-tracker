import React, { useState } from 'react'
import {countryList} from './countrylist'
import DataOutput from './DataOutput'

const Dropdown = () => {

    const [selectedCountry,setSelectedCountry] = useState('Malaysia')

    const handleChange = e => {
        setSelectedCountry(e.target.value)
    }

    return (
        <>
        <div className='text-center'>
            <select 
            name="country" id='country' 
            value={selectedCountry}
            onChange={handleChange}
            className='select_dropdown'>

                {countryList.map((item,index)=>{
                    return <option key={index} value={item}
                     className='select_dropdown_option'>
                        {item}
                        </option>
                })}
  
</select>
        </div>
        <DataOutput selectedCountry={selectedCountry}/>
        </>
    )
}

export default Dropdown
