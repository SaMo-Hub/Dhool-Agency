import React from 'react'
import lavendercake from "../public/images/lavender.png"
import TitreH2 from './titreH2'
import { Link } from 'react-router-dom'

export default function VisionDevienLegende() {
  return (
    <div className='mx-20 mt-80 font-urbanist'>
        <TitreH2 text1={"Quand la vision devient"} text2={"une légende"} />
        <div className='mt-20 gap-20  '>
            <div className=' w-full '>
                <div className='flex   justify-between'>
                    <Link to={"/projets/1"} >
                <img src={lavendercake} alt="" />
                    </Link>
                <div className='flex gap-2'>
                        <div className='text-[#ffffff42]  rounded-lg bg-[#ffffff2d]  h-fit py-1  px-4'>
                            Branding
                        </div>
                        
                        <div className='text-[#ffffff42] w-fit rounded-lg bg-[#ffffff2d]  h-fit py-1  px-4'>
                            Branding
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col mt-4 gap-2 '>
                    <h4 className='font-medium text-xl text-[#7d7d7d] mt-5'>
                    The most flowys cake.
                    </h4>
                    <p className='leading-5 w-2/5'>Le premium méritait d'être accessible à tous. Nous avons créé un univers visuel où l'élégance rencontre l'authenticité, sublimant leur vision pour une cosmétique sans compromis.</p>
                   
                </div>
            </div>
           
        </div>
    </div>
  )
}
