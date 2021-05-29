import React, { useEffect,useState } from 'react'
import {Card} from 'react-bootstrap'
import axios from 'axios'

const DataOutput = ({selectedCountry}) => {

    const [covidData,setCovidData] = useState(null)
    const [loading,setLoading] = useState(true)

    // https://disease.sh/v3/covid-19/countries/{country}

    const fetchCovidData = async (country) => {
        try {
            const resp = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
            console.log(resp.data)
            setCovidData({
                active:resp.data.active,
                todayCases : resp.data.todayCases,
                recovered : resp.data.recovered,
                deaths : resp.data.deaths
            })
            setLoading(false)
            console.log(covidData)
          
            
        } catch (err) {
            // Handle Error Here
            console.error(err,'There is an error !');
        }
    }

    useEffect(()=>{

     fetchCovidData(selectedCountry)

    },[selectedCountry])

    return (
         <>
        
        {!loading && 

            <div className='my-5'>

        <Card className='my-2 data-card'>
            <div className='d-flex justify-content-between'>
            <Card.Body className='w-50 data_title'><i className="mx-2 fas fa-virus"></i>TOTAL CASES</Card.Body>
            <Card.Body className='text-center data_value'>{covidData.active}</Card.Body>
            </div>
         </Card>

        <Card className='my-2 data-card'>
            <div className='d-flex justify-content-between'>
            <Card.Body className='w-50 data_title'><i className="mx-2 fas fa-calendar-day"></i>TODAY CASES</Card.Body>
            <Card.Body className='text-center data_value'>{covidData.todayCases}</Card.Body>
            </div>
         </Card>
         
        <Card className='my-2 data-card'>
            <div className='d-flex justify-content-between'>
            <Card.Body className='w-50 data_title'><i className="mx-2 fas fa-skull-crossbones"></i>DEATHS</Card.Body>
            <Card.Body className='text-center data_value'>{covidData.deaths}</Card.Body>
            </div>
         </Card>

        <Card className='my-2 data-card'>
            <div className='d-flex justify-content-between'>
            <Card.Body className='w-50 data_title'><i className="mx-2 fas fa-diagnoses"></i>RECOVERED</Card.Body>
            <Card.Body className='text-center data_value'>{covidData.recovered}</Card.Body>
            </div>
         </Card>
        
    </div>
}
        
        </>
    )
}

export default DataOutput
