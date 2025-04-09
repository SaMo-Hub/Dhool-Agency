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
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M0 9.19995C0 9.64193 0.361084 9.99991 0.80597 9.99991H0.817555C0.365856 9.99991 0 9.64193 0 9.19995Z" fill="#FBBC05"/>
              <path d="M6.92603 3.0001V5.08867L9.74183 2.81744V0.800206C9.74183 0.358227 9.38074 0.000244141 8.93585 0.000244141H2.83553L2.83008 3.0001H6.92603Z" fill="#FBBC05"/>
              <path d="M6.92614 7.17817H2.82337L2.8186 10H8.93596C9.38153 10 9.74193 9.64205 9.74193 9.20007V7.37882L6.92614 5.0896V7.17817V7.17817Z" fill="#34A853"/>
              <path d="M2.83555 0L0 2.99986H2.83078L2.83555 0Z" fill="#EA4335"/>
              <path d="M0 7.17773V9.19964C0 9.64162 0.365856 9.9996 0.817555 9.9996H2.81852L2.82329 7.17773H0V7.17773Z" fill="#1967D2"/>
              <path d="M2.83078 3H0V7.1778H2.82329L2.83078 3Z" fill="#4285F4"/>
              <path d="M12.2173 8.48873V1.62239C12.0586 0.711101 11.0591 1.75572 11.0591 1.75572L9.74219 2.81767V7.37812L11.6273 8.91071C12.3079 9.00004 12.2173 8.48873 12.2173 8.48873Z" fill="#34A853"/>
              <path d="M6.92627 5.08941L9.74275 7.3793V2.81885L6.92627 5.08941Z" fill="#188038"/>
            </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3.7824 4.88595V4.7925C3.7824 4.55559 3.97214 4.35912 4.21668 4.34279L5.9979 4.22387L8.46118 7.85124V4.66761L7.82714 4.58309V4.53869C7.82714 4.29901 8.02121 4.10123 8.26887 4.08855L9.88959 4.00552V4.23876C9.88959 4.34825 9.80817 4.4419 9.69658 4.46077L9.30656 4.52674V9.68253L8.81709 9.85086C8.40816 9.99149 7.95292 9.84096 7.71882 9.48772L5.32742 5.87908V9.32332L6.06349 9.46419L6.05323 9.53246C6.02111 9.74632 5.83647 9.90806 5.61311 9.91801L3.7824 9.99949C3.7582 9.76951 3.93056 9.56377 4.16834 9.53879L4.40915 9.51349V4.92117L3.7824 4.88595Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11971 0.00336322L0.780395 0.504448C0.340774 0.534463 0 0.887897 0 1.31384V8.4523C0 8.85251 0.137764 9.24134 0.39159 9.55755L1.97405 11.5289C2.22991 11.8477 2.63255 12.0232 3.04911 11.9975L11.1949 11.4961C11.6124 11.4704 11.9374 11.1357 11.9374 10.7313V2.61559C11.9374 2.36545 11.8111 2.13105 11.599 1.98767L9.0204 0.244233C8.7576 0.0665562 8.43963 -0.018479 8.11971 0.00336322ZM1.14434 1.42518C1.04226 1.34961 1.09084 1.19216 1.21907 1.18297L8.16908 0.684468C8.39051 0.668585 8.61055 0.729563 8.78964 0.85644L10.1841 1.8444C10.237 1.88191 10.2122 1.96288 10.1467 1.96644L2.78663 2.36673C2.5639 2.37884 2.34404 2.3134 2.16694 2.18229L1.14434 1.42518ZM2.44142 3.62159C2.44142 3.38248 2.63459 3.18498 2.8816 3.17152L10.6632 2.74773C10.904 2.73462 11.1066 2.91976 11.1066 3.15279V10.1802C11.1066 10.4188 10.9141 10.6161 10.6676 10.6302L2.93525 11.0701C2.66734 11.0854 2.44142 10.8795 2.44142 10.6201V3.62159Z" fill="white"/>
                </svg>
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
