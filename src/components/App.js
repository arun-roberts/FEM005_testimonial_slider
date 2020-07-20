import React, { useState } from 'react'
import testimonials from '../data/Testimonials'
import Testimonial from './Testimonial'
import Switch from './Switch'
import '../App.css'

const App = () => {
    const [ currentTestimonial, setCurrentTestimonial ] = useState(0)
    const cycleTestimonials = () => {
        if(currentTestimonial < (testimonials.length - 1)) {
            return setCurrentTestimonial(currentTestimonial + 1)
        } else {
            setCurrentTestimonial(0)
        } 
    }

    return (
        <div>
            <Testimonial testimonial={ testimonials[currentTestimonial] }/>
            <Switch clickCommand={cycleTestimonials} />
        </div>
    )
}

export default App