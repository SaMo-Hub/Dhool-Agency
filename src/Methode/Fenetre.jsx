import React from 'react'

export const Fenetre = () => {
  return (
    <div className="flex text-[#D0D0D0] pt-2 items-center w-fit h-10">
          {/* Bouton à gauche */}
          <div className="ml-4 w-fit h-full bg-[#141414]">
            <div className="flex pr-9 gap-2 h-full items-center w-fit bg-[#080808] rounded-br-2xl">
              <div className="w-[10px] h-[10px] rounded-full hover:bg-orange-400 bg-orange-500"></div>
              <div className="w-[10px] h-[10px] rounded-full hover:bg-yellow-400 bg-yellow-500"></div>
              <div className="w-[10px] h-[10px] rounded-full hover:bg-green-400 bg-green-500"></div>
            </div>
          </div>

          {/* 1ère fenêtre ouverte */}
          <div className="bg-[#171717] items-center h-full gap-12 rounded-t-2xl px-5  flex">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-red-500"></div>
              <p className="">Google Meet</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* 2ème fenêtre fermée */}
          <div className="bg-[#171717] group hover:rounded-t-2xl h-full">
            <div className="bg-[#080808] group-hover:bg-[#0e0e0e] rounded-bl-xl group-hover:rounded-t-2xl w-fit items-center h-full gap-12 px-5 flex">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 bg-red-500"></div>
                <p className="">Notion</p>
                
              </div>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            </div>
          </div>
        </div>
  )
}
