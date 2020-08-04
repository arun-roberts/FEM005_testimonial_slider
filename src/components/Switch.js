import React from 'react'
import previous from '../images/icon-prev.svg'
import next from '../images/icon-next.svg'

const Switch = ({ clickPrevious, clickNext }) => {
    return (
        <>
            <div className="switch">
                <button className="switch__buttons switch__buttons--previous" onClick={clickPrevious}>
                    <img className="switch__icons" src={previous} />
                </button>
                <button className="switch__buttons switch__buttons--next" onClick={clickNext}>
                    <img className="switch__icons" src={next} />
                </button>
            </div>
        </>
    )
}

export default Switch