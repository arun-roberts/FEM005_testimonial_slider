import React from 'react'

const Testimonial = ({ testimonial }) => {
    return (
        <>
            <div>
                <figure>
                    <img src={testimonial.image} alt={testimonial.alt}/>
                </figure>
            </div>
            <div>
                <p>{testimonial.quote}</p>
                <h1>{testimonial.name}<span>{testimonial.position}</span></h1>
            </div>
        </>
    )
}

export default Testimonial