import Image from 'next/image'

function Hero() {

  return (
    <div className='customBg h-[22rem] w-full flex justify-center pb-[3rem]'>
        <Image src={'/Logo.svg'} alt={'World-Ranks'} width={200} height={100}/>
    </div>
  )
}

export default Hero