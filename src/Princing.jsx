import React from 'react'
import TitreH2 from './titreH2'
import PricingComponent from './PricingComponent'
import Button from './components/Button'

export default function Princing() {
  return (
    <div className='mt-72 lg:mt-80  mx-20'>
        <TitreH2 text1={"Avec nous, pas de bulshit."} text2={"Les prix sont fixes"} />
        
        <div className='w-full flex mt-24 justify-center items-center'>

        <div className='flex w-fit gap-12 items-center justify-center gap flex-col'>
        <div className='flex w-full flex-col gap-4 lg:flex-row items-center justify-between'>
            <PricingComponent/>
            <PricingComponent stroke={true}/>
            <PricingComponent/>
        </div>
      <div className='flex w-full lg:flex-row flex-col gap-4'>

        <div className='flex md:flex-row w-full flex-col md:gap-0 gap-12 item-center  justify-between h-fit  bg-gradient-to-b from-[#ffffff12]  to-[#ffffff10] relative font-urbanist font-medium rounded-[32px]  px-8 py-8  '>
        <div className={` border-[#ffffff1a] border masked-strke z-40  absolute w-full h-full inset-0 rounded-[32px]`}></div>

          <div className=' flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-3xl'>Boost</h2>
            <div className='flex  text-[#FF8C00] items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                         <path d="M8.5 2.5L7.23333 6.36667C7.16847 6.56748 7.05688 6.75003 6.90772 6.8993C6.75856 7.04858 6.57609 7.16032 6.37533 7.22533L2.5 8.5L6.36667 9.76667C6.56748 9.83153 6.75003 9.94312 6.8993 10.0923C7.04858 10.2414 7.16032 10.4239 7.22533 10.6247L8.5 14.5L9.76667 10.6333C9.83153 10.4325 9.94312 10.25 10.0923 10.1007C10.2414 9.95142 10.4239 9.83968 10.6247 9.77467L14.5 8.5L10.6333 7.23333C10.4325 7.16847 10.25 7.05688 10.1007 6.90772C9.95142 6.75856 9.83968 6.57609 9.77467 6.37533L8.5 2.5Z" stroke="#FF8C00" stroke-linecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>
                      Abonnement
                    </p>
            </div>
            <p className='text-[#ffffff23] w-[240px]'>Votre site marketing one-page all-inclusive orienté conversion</p>
            <div className='flex items-center justify-center  gap-2'>
              <p className='text-4xl'>1500€</p>
              <p className='text-2xl text-[#ffffff33] '>/mois</p>
            </div>
          
          </div>

          <div className=' items-center  grid h- gap-x-6 xl:gap-y-0 gap-y-2 xl:grid-cols-1 grid-cols-1 grid-rows-4'>
            <div className='flex items-center flex-col gap-3'>
                  <div className='gap-2 items-center flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>Identité de marque (2 pistes)</p>
                  </div>
              </div>
            <div className='flex items-center flex-col gap-3'>
                  <div className='gap-2 items-center flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>Identité de marque (2 pistes)</p>
                  </div>
              </div>
            <div className='flex items-center flex-col gap-3'>
                  <div className='gap-2 items-center flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>Identité de marque (2 pistes)</p>
                  </div>
              </div>
            <div className='flex items-center flex-col gap-3'>
                  <div className='gap-2 items-center flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>Identité de marque (2 pistes)</p>
                  </div>
              </div>
            <div className='flex items-center flex-col gap-3'>
                  <div className='gap-2 items-center flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>Identité de marque (2 pistes)</p>
                  </div>
              </div>
            
            
            </div>
        </div>

        <div className='border-[#ffffff1a] bg-gradient-to-b from-[#ffffff12]  to-[#ffffff10] border gap-7 flex flex-col font-urbanist  max-w-[330px] rounded-[32px]  px-8 py-8 '>
          <h3 className='font-semibold text-2xl'>Ajoutez vos suppléments</h3>
          <p className='font-light'>Ajoutez n'importe quel élément sur-mesure à votre base et rendez-la absolument unique (pages supp, pitch/sales deck, blog...) Réservez un appel pour en savoir plus !</p>
          <Button text={"Réserver un appel"}/>
        </div>
        </div>
        </div>
        </div>

    </div>
  )
}
