import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const page = useLocation().pathname
    const [shadowNav, setShadowNav] = useState(false)

    const baseURL = window.location.origin

    const resume = `${baseURL}/src/assets/downloadable/resume.pdf`

    const cv = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()

        alert(`${fileName} downloaded, check your download folder`)
    }

    const anchor = [
        {
            name: 'About Me',
            link: '/'
        },
        {
            name: 'Works',
            link: '/project'
        },
        {
            name: 'Experience',
            link: '/experience'
        },
        {
            name: 'Contact me',
            link: '/contact-me'
        },
    ]

    return (
        <>
            <HamburgerMenu open={open} setOpen={setOpen} />

            <NavbarMobile
                open={open}
                page={page}
                cv={cv}
                setOpen={setOpen}
                resume={resume}
                anchor={anchor}
            />

            <NavbarDesktop
                page={page}
                cv={cv}
                resume={resume}
            />

        </>
    )
}

const NavbarDesktop = (props) => {
    return (
        <div className='w-full z-20 hidden container mx-auto h-24 dark:bg-zinc-950 bg-slate-200 lg:flex items-center px-5 md:px-10 transition-colors duration-500'>
            <motion.div
                initial={{
                    y: -50
                }}

                animate={{
                    y: 0
                }}

                transition={{
                    type: 'spring'
                }}
                className='w-2/12 h-full  flex items-center'>
                <Link to="/" className='text-lg font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500 tracking-wider'>
                    Hello Wahyu
                </Link>
            </motion.div>
            <div className='w-7/12 lg:w-6/12 xl:w-7/12 h-full flex items-center gap-16'>
                <Link to="/" className=' flex flex-col w-fit gap-2'>
                    <motion.p
                        initial={{
                            y: -50
                        }}

                        animate={{
                            y: 0
                        }}

                        transition={{
                            type: 'spring',
                            delay: .05
                        }}

                        className={`relative text-sm dark:text-slate-200 text-zinc-700 transition-colors duration-500 tracking-wider  leading-loose ${props.page == '/' ? "border-b border-blue-500" : ""}`}>
                        About Me
                        <motion.div
                            initial={{
                                width: '0%',
                            }}
                            
                            whileHover={{
                                width: '100%',
                            }}
                            className=' border-t border-blue-500 absolute'>

                        </motion.div>
                    </motion.p>
                </Link>
                <Link to="/project" className=' flex flex-col w-fit gap-2'>
                    <motion.p
                        initial={{
                            y: -50
                        }}

                        animate={{
                            y: 0
                        }}

                        whileHover={{
                            y: -5,
                            transition: {
                                delay: 0
                            }
                        }}

                        transition={{
                            type: 'spring',
                            delay: 0.1
                        }}

                        className={`text-sm dark:text-slate-200 text-zinc-700 transition-colors duration-500 tracking-wider  leading-loose ${props.page == '/project' ? "border-b border-blue-500" : ""}`}>
                        Works
                    </motion.p>
                </Link>
                <Link to="/experience" className=' flex flex-col w-fit gap-2'>
                    <motion.p
                        initial={{
                            y: -50
                        }}

                        animate={{
                            y: 0
                        }}

                        whileHover={{
                            y: -5,
                            transition: {
                                delay: 0
                            }
                        }}

                        transition={{
                            type: 'spring',
                            delay: 0.15
                        }}

                        className={`text-sm dark:text-slate-200 text-zinc-700 transition-colors duration-500 tracking-wider  leading-loose ${props.page == '/experience' ? "border-b border-blue-500" : ""}`}>
                        Experience
                    </motion.p>
                </Link>
            </div>
            <div className='w-3/12 lg:w-4/12 xl:w-3/12 h-full flex items-center'>

                <div className='w-full flex justify-center items-center '>
                    <Link to="/contact-me" className={`dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-sm tracking-wider leading-loose `}>
                        <motion.p
                            initial={{
                                y: -50
                            }}

                            animate={{
                                y: 0
                            }}

                            whileHover={{
                                y: -5,
                                transition: {
                                    delay: 0
                                }
                            }}

                            transition={{
                                type: 'spring',
                                delay: .2
                            }}
                            className={`${props.page == '/contact-me' ? "border-b border-blue-500" : ""}`}
                        >
                            Contact me
                        </motion.p>
                    </Link>
                </div>
                <div className='w-full flex justify-center items-center hover:cursor-pointer'>
                    <motion.p
                        animate={{
                            y: [5, -5, 5],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                                // type: 'spring'
                            }
                        }}

                        onClick={() => props.cv(props.resume)} className='text-xs dark:text-zinc-950 text-slate-200 transition-colors duration-500 bg-blue-500 px-3 py-2 rounded hover:bg-blue-600'>
                        Download my CV
                    </motion.p>
                </div>

            </div>
        </div>
    )
}

const NavbarMobile = (props) => {

    return (

        <AnimatePresence>
            {props.open && (
                <motion.div

                    initial={{
                        y: -400
                    }}

                    animate={{
                        y: 0
                    }}

                    exit={{
                        y: -400
                    }}

                    transition={{
                        type: 'spring'
                    }}

                    className={`absolute w-full z-20 py-5 dark:bg-zinc-950 bg-slate-200 lg:hidden flex flex-col justify-center items-center gap-5 transition-colors duration-500`}>

                    {props.anchor.map((data, index) => (
                        <Link to={data.link} key={index} className={`dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-center text-base p-2  ${props.page == data.link ? "border-b border-blue-500" : ""}`}>
                            {data.name}
                        </Link>
                    ))}

                    <motion.p
                        animate={{
                            y: [5, -5, 5],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                            }
                        }}

                        onClick={() => props.cv(props.resume)} className={`text-slate-200 dark:text-zinc-950 transition-colors duration-500 text-center text-xs p-2 bg-blue-500 px-4 rounded hover:bg-blue-600`}>
                        Download my CV
                    </motion.p>

                </motion.div>
            )}
        </AnimatePresence>
    )

}

export default Navbar