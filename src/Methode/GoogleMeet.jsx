import React, { forwardRef } from "react";
import { Fenetre } from "./Fenetre";

const GoogleMeet = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="border-[#ffffff1a] border bg-[#080808] text-xs overflow-hidden relative font-urbanist font-light  text-white rounded-xl w-fit"
    >
      <div className="absolute h-full w-full bgr"></div>
      <div className="absolute h-full w-full shadows"></div>
      <Fenetre />

      {/* Contenu des écrans */}
      <div className="bg-[#0e0e0e] font-normal text-[#9F9F9F] bg-gradient-to-b from-[#171717] to-[#0F0F0F] w-fit flex gap-3 p-3">
        <div>
          <div className="w-[450px] rounded-lg flex items-center justify-center h-[460px] bg-[#ffffff09]">
            <div className="w-[78px] text-4xl flex items-center justify-center h-[78px] rounded-full bg-[#ffffff09]">
              S
            </div>
          </div>
          <p className="mt-3 pl-2">Sacha Moricet | Dhool Agency</p>
        </div>
        <div>
          <div className="w-[450px] rounded-lg flex items-center justify-center h-[460px] bg-[#ffffff09]">
            <div className="w-[78px] text-4xl flex items-center justify-center h-[78px] rounded-full bg-[#ffffff09]">
              C
            </div>
          </div>
          <p className="mt-3 mb-6">Client | Ecole</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-[200px] p-4 pl-5">
        <p className="font-semibold text-[#CECECE]">9:10 | On-Boarding</p>
        <div className="flex gap-2">
          <div className="rounded-full flex justify-center text-black items-center w-8 h-8  bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4"
            >
              <path d="M10.047 3.062a.75.75 0 0 1 .453.688v12.5a.75.75 0 0 1-1.264.546L5.203 13H2.667a.75.75 0 0 1-.7-.48A6.985 6.985 0 0 1 1.5 10c0-.887.165-1.737.468-2.52a.75.75 0 0 1 .7-.48h2.535l4.033-3.796a.75.75 0 0 1 .811-.142ZM13.78 7.22a.75.75 0 1 0-1.06 1.06L14.44 10l-1.72 1.72a.75.75 0 0 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L16.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L15.5 8.94l-1.72-1.72Z" />
            </svg>
          </div>
          <div className="rounded-full flex w-fit h-8 bg-[#ffffff33]">
            <div className="w-8 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#ffffff33]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4"
              >
                <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
                <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
              </svg>
            </div>
          </div>
          <div className="rounded-full flex w-fit h-8 bg-[#ffffff33]">
            <div className="w-8 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div id="photo" className="w-8 h-8 flex justify-center items-center rounded-full bg-[#ffffff33]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 8.07 3h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 16.07 6H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Zm13.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-12 h-8 rounded-full flex justify-center bg-[#e60101]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 13 8" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.309 5.26066C12.3089 5.03105 12.2732 4.78494 12.2185 4.59421C12.1394 4.30546 12.0032 4.04541 11.8362 3.79921C10.5658 1.90512 8.75435 0.885778 6.14882 0.895104C4.43924 0.901199 3.43876 1.20169 2.4203 1.9646C1.84969 2.39203 1.33613 2.89336 0.804893 3.36733C0.569443 3.57738 0.378715 3.86296 0.228137 4.13826C0.073362 4.46214 -0.00800858 4.81777 -0.00779472 5.18394C-0.00704624 6.52377 1.07972 7.61054 2.41955 7.61129L2.53618 7.60858C3.77285 7.55071 4.76798 6.56633 4.83981 5.33153L4.84671 4.35562C4.84663 4.17408 4.97713 4.01893 5.15596 3.98803C5.52804 3.92374 6.67508 3.91139 7.00997 3.96325C7.19201 3.99143 7.32642 4.14818 7.3265 4.33239C7.32331 4.64084 7.31682 4.94945 7.31698 5.25793C7.31775 6.63644 8.43586 7.75455 9.81436 7.75531C11.1929 7.75605 12.3098 6.63917 12.309 5.26066Z" fill="white"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GoogleMeet;
