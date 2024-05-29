import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='customBg h-[25rem] w-full flex justify-center pb-[6rem]'>
        <Image src={'/Logo.svg'} alt={'World-Ranks'} width={250} height={100}/>
    </div>
  )
}

export default Hero