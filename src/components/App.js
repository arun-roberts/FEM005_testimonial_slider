import React, { useState } from 'react'
import testimonials from '../data/Testimonials'
import Testimonial from './Testimonial'
import '../stylesheets/App.css'

const App = () => {
    const [ currentTestimonial, setCurrentTestimonial ] = useState(0)
    const previousTestimonial = () => {
        if(currentTestimonial === 0) {
            return setCurrentTestimonial(testimonials.length - 1)
        } else {
            setCurrentTestimonial(currentTestimonial - 1)
        } 
    }

    const nextTestimonial = () => {
        if(currentTestimonial < (testimonials.length - 1)) {
            return setCurrentTestimonial(currentTestimonial + 1)
        } else {
            setCurrentTestimonial(0)
        } 
    }

    return (
        <div className="testimonial-container">
            <Testimonial 
                clickPrevious={previousTestimonial} 
                clickNext={nextTestimonial}
                testimonial={ testimonials[currentTestimonial] 
            }/>
        </div>
    )
}

export default App