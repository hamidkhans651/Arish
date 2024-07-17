import React from "react";


const Footer = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
                    <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
                </div>
                <div className="mt-8 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                                    <p className="mt-1 font-bold text-gray-600"><a href="tel:+123">
                                        <ul>
                                            <li>Tel: +92-21-3243 4308,</li>
                                            <li>3241 3832,</li>
                                            <li>3246 7890</li>
                                            <li>UAN: +92-21- 111 332 497</li>
                                            <li>Fax: +92-21-3242 3721</li>
                                            <li>Email: info@arishdrywall.com</li>
                                        </ul>
                                        <br />
                                    </a></p>
                                    <a className="flex m-1" href="tel:+919823331842">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">

                                                {/* <!-- Heroicon name: phone --> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                Call now
                                            </div>
                                        </div>

                                    </a>
                                </div>
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p className="mt-1 text-gray-600">Sale galli, 60 foot road, Latur</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
                                </div>
                            </div>
                        </div>


                        <div className="rounded-lg overflow-hidden order-none sm:order-second">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14481.71792988515!2d66.999019!3d24.849177000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e01e17043dd%3A0xb0611725a6a560db!2sBusiness%20%26%20Finance%20Centre!5e0!3m2!1sen!2sus!4v1721154998615!5m2!1sen!2sus"
                                className="w-full"
                                width="50"
                                height="100"
                                style={{ border: '0' }} // Define style as an object here
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div id="social-media links" className="flex gap-3 justify-between px-4 text-black ">
                <span className="flex justify-between sm:tex-sm">
                    © 2015 - 2024 Lodhia Gypsum Industries (PVT.) Ltd. - All Rights Reserved
                </span>

                <div className="flex gap-5 ">
                    <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8">
                        <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                    </svg>
                    </a>

                    <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-8">
                        <path fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg>
                    </a>

                </div>

            </div>
            <div className="border-t border-gray-200 px-2 py-4"></div>

        </section>


    );
};

export default Footer;
