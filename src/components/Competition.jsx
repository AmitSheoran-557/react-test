import React from 'react'
import { COMPETITION_DESCRIPTION_LIST, COMPETITION_TABLE_LIST } from '../utils/helper'

const Competition = () => {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 bg-deep-blue'>
            <div className="container mx-auto">
                <div className="d-flex flex-wrap w-100 d-flex justify-content-center align-items-center">
                    <div className="col-xl-6 col-12 d-flex justify-content-xl-start justify-content-center align-items-center">
                        <div >
                            <h2 className='heading text-white'>Competition</h2>
                            {COMPETITION_DESCRIPTION_LIST.map((item, index) => (
                                <div key={index}><p className='text-white mb-2 paragraph-width para-font'>{item.description}</p></div>
                            ))}
                        </div>
                    </div>

                    <div className='col-xl-6 table-responsive d-flex table-bg border-radius-xl mt-xl-0 mt-md-5 mt-4'>
                        <div className='d-flex align-items-center justify-content-center '>
                            <table className='table-box'>
                                <tr className='border-bottom'>
                                    <th></th>
                                    <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Rift</th>
                                    <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Taxscout</th>
                                    <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Coconut</th>
                                    <th className='border-top-radius text-center bg-lightGreen fw-semibold table-heading'>Pie</th>
                                </tr>
                                <tbody>
                                    {COMPETITION_TABLE_LIST.map((obj, i) => (
                                        <tr key={i}>
                                            <td className={`text-white fw-normal table-content bg-transparent custom-border-b-none`}>{obj.feature}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-content custom-border-b-none`}>{obj.rift}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-content custom-border-b-none`}>{obj.taxscout}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-content custom-border-b-none`}>{obj.coconut}</td>
                                            <td className={`text-center bg-lightGreen table-content custom-border-b-none ${i === 5 ? 'fees-year border-bottom-radius' : ''}`}>{obj.pie}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competition