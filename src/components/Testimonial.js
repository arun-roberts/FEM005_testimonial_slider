import React from 'react'
import Switch from './Switch'

const Testimonial = ({ testimonial, clickPrevious, clickNext }) => {
    return (
        <>
            <div className="testimonial-image">
                <div className="testimonial-image__div">
                    <figure className="testimonial-image__image"
                        style={{backgroundImage: `url('${testimonial.image}')`}}>
                        <Switch clickPrevious={clickPrevious} clickNext={clickNext} />
                    </figure>
                </div>
            </div>
            <div className="testimonial-text">
                <p className="testimonial-text__quote">
                    {testimonial.quote}
                </p>
                <h1 className="testimonial-text__attribution">
                    {testimonial.name} 
                    <span className="testimonial-text__job-title">   {testimonial.position}</span>
                </h1>
            </div>
        </>
    )
}

export default Testimonial