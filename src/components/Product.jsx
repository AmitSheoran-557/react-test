import React from 'react'
import gridImg1 from './../assets/images/png/grid-img-1.png'
import gridImg2 from './../assets/images/png/grid-img-2.png'
import gridImg3 from './../assets/images/png/grid-img-3.png'
import gridImg4 from './../assets/images/png/grid-img-4.png'
import gridImg5 from './../assets/images/png/grid-img-5.png'
import gridImg6 from './../assets/images/png/grid-img-6.png'
import gridImg7 from './../assets/images/png/grid-img-7.png'
import gridImg8 from './../assets/images/png/grid-img-8.png'
import gridImg9 from './../assets/images/png/grid-img-9.png'
import gridImg10 from './../assets/images/png/grid-img-10.png'
import gridImg11 from './../assets/images/png/grid-img-11.png'
import gridImg12 from './../assets/images/png/grid-img-12.png'

const Product = () => {
    return (
        <div className='product-section d-flex justify-content-center align-items-center min-vh-100 bg-deep-blue'>
            <div className="container mx-auto">
                <div className="d-flex w-100">

                    <div className="col-lg-5 col-12">
                        <div className="box p-6 bg-purple w-100">
                            <h2 className='heading text-white'>Product</h2>
                            <p className='fs-6 text-white paragraph'>Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022.</p>
                            <p className='fs-6 text-white paragraph-two'>With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital.</p>
                            <p className='fs-6 text-white paragraph-two'>Once we establish the ourself in the UK, we plan to expand into other territories to take advantage of the £500 billion global market</p>
                            <p className='fs-6 text-white paragraph-three'>We have highlighted some of our key features that will be the cornerstone of our product launch in April 23.</p>
                        </div>
                    </div>

                    <div className="col-lg-7 col-12">
                        <div className="box-2 bg-purple w-100">
                            <div className="d-grid image-grid">
                                <img className='grid-1' src={gridImg1} alt="img-1" />
                                <img className='grid-2' src={gridImg2} alt="img-2" />
                                <img className='grid-3' src={gridImg3} alt="img-3" />
                                <img className='grid-4' src={gridImg4} alt="img-4" />
                            </div>
                            <div className="d-grid image-grid">
                                <img className='grid-5' src={gridImg5} alt="img-5" />
                                <img className='grid-6' src={gridImg6} alt="img-6" />
                                <img className='grid-7' src={gridImg7} alt="img-7" />
                                <img className='grid-8' src={gridImg8} alt="img-8" />
                            </div>
                            <div className="d-grid image-grid">
                                <img className='grid-9' src={gridImg9} alt="img-9" />
                                <img className='grid-10' src={gridImg10} alt="img-10" />
                                <img className='grid-11' src={gridImg11} alt="img-11" />
                                <img className='grid-12' src={gridImg12} alt="img-12" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product