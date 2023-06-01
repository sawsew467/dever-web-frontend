import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='w-screen h-[810px] bg-[#FFFFFF] flex justify-center items-center'>
      <div className='w-[1440px] h-[100%] bg-blue-200 flex justify-center items-center'>
        <div className='w-[620px] h-fit flex flex-col justify-center items-center'>
          <h1 className={`relative text-[#0098FF] text-[40px] flex justify-center items-center font-[700] after:content-[' '] after:w-[120px] after:h-[5px] after:bg-[red] after:absolute after:top-[60px]`}>FU-DEVER</h1>
          <h2 className={`text-[#0098FF] text-[32px] mt-[12px] font-[700]`}>WORK HARD - PLAY HARD</h2>
          <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam, praesentium consequatur amet suscipit, magnam minus reprehenderit quo sint voluptate similique libero ad quas. Adipisci pariatur laboriosam ipsam corrupti quia!</p>
          <button>Send Your CV</button>
        </div>
      </div>
    </section>
  )
}
