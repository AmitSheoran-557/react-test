import React from 'react'
import { COMPETITION_DESCRIPTION_LIST } from '../utils/helper'

const Competition = () => {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 bg-deep-blue'>
            <div className="container mx-auto">
                <div className="d-flex flex-wrap w-100">
                    <div className="col-lg-6 col-12">
                        <div className="w-100">
                            <h2 className='heading text-white'>Competition</h2>
                            {COMPETITION_DESCRIPTION_LIST.map((item, index) => (
                                < div key={index}><p className='fs-6 text-white mb-2 paragraph-width'>{item.description}</p></div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="bg-dark-cyan table-box">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competition