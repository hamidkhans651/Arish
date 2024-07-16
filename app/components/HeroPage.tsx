import React from 'react'
import Image from 'next/image'


const HeroPage = () => {
    return (
        <div>
            <div id='largescreen' className='min-sm:hidden '>

                <video autoPlay loop muted src="./video.mp4"
                    height={10000}
                    width={10000}

                ></video>
                {/* <section className='p-20 tracking-t lead max-sm:py-5'>
                    <h1 className='flex justify-center items-center font-helvetica-WIN-ON-AIR text-6xl tracking-tighter max-h-full leading-none	md:text max-sm:text-4xl max-sm:items-center text-center'>
                        LODHIA GYPSUM</h1>
                    <div className='flex justify-center items-center font-helvetica-now-text-hero text-xl text-center py-3   max-sm:text-sm  '>
                        <p className=''> Is the leading manufacturer of high quality Gypsum Plaster and Gypsum Board range. <br />of products and the pioneer in introducing Gypsum Wall Plaster in Pakistan, <br />which is supplied to the building construction sector, which are being marketed under Arish® brand.</p>
                    </div>
                </section> */}
                <section className="bg-gray-100" id="aboutus">
                    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">LODHIA GYPSUM INDUSTRIES (PVT) LTD</h2>
                                <p className="mt-4 text-gray-600 text-lg">
                                    Is the leading manufacturer of high quality Gypsum Plaster and Gypsum Board range. of products and the pioneer in introducing Gypsum Wall Plaster in Pakistan, <br />which is supplied to the building construction sector, which are being marketed under Arish® brand.</p>
                                    
                                <p className="mt-4 text-gray-600 text-lg">Lodhia Gypsum Industries (Pvt) Ltd is the leading manufacturer of Gypsum Plaster and Gypsum Board range of products and the pioneer in introducing Gypsum Plaster in Pakistan and the founder of DFB GYPSUM® which happens to be the pioneer in Gypsum Board manufacturing in Pakistan. Lodhia Industries, supplying Gypsum based products to the building construction sector, which are being marketed under Arish® Drywall System.</p>
                            </div>
                            <div className="mt-12 md:mt-0">
                                {/* <Image src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/> */}
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </div>
    )
}

export default HeroPage
