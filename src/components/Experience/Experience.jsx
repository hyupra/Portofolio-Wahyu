import { motion } from 'framer-motion'
import React from 'react'

import Colspan from '../Experience/Colspan'
import Detail from '../Experience/Detail'
import Timeline from '../Experience/Timeline'

const Experience = () => {
    const baseURL = window.location.origin

    const setpres = `${baseURL}/src/assets/downloadable/sertifikat_setpres.pdf`
    const IL = `${baseURL}/src/assets/downloadable/sertifikat_IL.pdf`

    const download = (url) => {
        // alert('download '+ url)
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()

        alert(`${fileName} downloaded, check your download folder`)
    }

    return (
        <div className='w-full min-h-screen  xl:justify-center container mx-auto flex flex-col mt-10 md:my-24 gap-10 xl:gap-0 px-5 md:px-10'>
            <motion.p
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

                initial={{ scale:0 }}
                animate={{ scale:1 }}

                whileHover={{ cursor:'grab' }}
                whileTap={{ cursor:'grabbing' }}

                transition={{
                    type: 'spring'
                }}
                className='dark:text-slate-200 text-zinc-950 transition-colors duration-500 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit mx-auto leading-loose xl:py-2'>
                My Experience
            </motion.p>

            <div className='w-full mx-auto max-w-3xl h-fit grid grid-cols-5'>
                <Colspan />
                <div className='w-full h-24 flex justify-center items-end'>
                    <div className='w-px h-1/2 border dark:border-slate-500 border-zinc-500'>

                    </div>
                </div>

                <Colspan />

                <Detail
                    certificate={false}
                    date={"2018 Jun - 2021 Jun"}
                    internship={false}
                    left={true}
                    major={"Major: Software Engineering"}
                    title={"Vocational High School"}
                    delay={0.1}
                />

                <Timeline
                />

                <Colspan />
                <Colspan />

                <Timeline />

                <Detail
                    certificate={true}
                    date={"Jan 2019 - Apr 2019"}
                    internship={true}
                    left={false}
                    major={"Front-End Developer, Intern"}
                    title={"CV. FR Academy"}
                    download={download}
                    url={0}
                    delay={0.2}
                />

                <Detail
                    certificate={false}
                    date={"2020 Aug - Dec"}
                    internship={true}
                    left={true}
                    major={"Web Developer"}
                    title={"MejaKita Edunusa Mandiri"}
                    delay={0.3}
                />

                <Timeline />

                <Colspan />

                <Colspan />

                <Timeline />

                <Detail
                    certificate={false}
                    date={"2021 Jun - Now"}
                    internship={false}
                    left={false}
                    major={"Major: Sarjana of Computer Sience"}
                    title={"Bandar Lampung University"}
                    delay={0.4}
                />

                <Detail
                    certificate={false}
                    date={"2022 Jan - 2023 Aug"}
                    internship={false}
                    left={true}
                    major={"Department: Interests and tal   ents"}
                    title={"Robotics Student Activity Unit"}
                    delay={0.5}
                />

                <Timeline />

                <Colspan />
                <Colspan />

                <Timeline />

                <Detail
                    certificate={false}
                    date={"2023 Feb - Aug"}
                    internship={false}
                    left={false}
                    major={"Major: Web Developer"}
                    title={"IndevPro"}
                    delay={0.6}
                />

                <Detail
                    certificate={true}
                    date={"2023 Aug - 2024 Jan"}
                    internship={true}
                    left={true}
                    major={"Major: Independent Study Web Developer"}
                    title={"Infinite Learning"}
                    download={download}
                    url={IL}
                    delay={0.7}
                />

                <Timeline />

                <Colspan />
                <Colspan />

                <div className='w-full h-24 flex justify-center items-start'>
                    <div className='w-px h-1/2 border dark:border-slate-500 border-zinc-500'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience