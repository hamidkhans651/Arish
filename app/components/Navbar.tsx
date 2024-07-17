import React from 'react'
import Image from 'next/image'
import { navlinks } from '../Constants/indext'
import { categoryieslinks } from '../Constants/indext'

const Navbar = () => {
    return (
        <div>
            <header className="lg:px-10 px-4  bg-white flex flex-wrap items-center py-4 shadow-md ">
                <div className=" flex text-xl justify-start ">
                    {['arish-icon-logo'].map((path) => {
                        return (
                            <div className='' key={path}>
                                <Image src={`/${path}.PNG`}
                                    alt="Logo" width={100} height={100} />
                            </div>
                        )
                    })}
                  
                </div>

                <div className="flex-1 flex justify-between items-center">
                </div>

                hamid
                <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
                    <svg className="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden lg:flex sm:items-center md:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul id='catogrieslinks' className='flex gap-6 md:text-sm  '>
                            {categoryieslinks.map((links) =>
                                <li key={links.label}>
                                    <a href="{item.label}" className='flex font-Helvetica-Now-Text-Medium text-black text-md leading-7'>
                                        {links.label}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>


            </header>
        </div>
    )
}

export default Navbar
