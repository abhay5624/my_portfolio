"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

const Achivement = () => {
  return (
      <div className='h-[40rem] [perspective:1000px] relative b flex flex-col    items-start justify-start my-60'>
          <h1 className="text-2xl font-semibold text-white mb-6 max-w-7xl mx-auto w-full">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none mb-7">
                    Achivement
              </span>
              (Hover to find)
          </h1>
          <div className="min-w-screen bg-black">
            <MaskContainer
            revealText={
            <ul className="max-w-7xl mx-auto text-white md:text-4xl font-bold">
                <li>Hacktoberfest 2023 level 4</li>
                <li> Leetcode Contest Rating ( 1,567 ), Max</li>
                <li> Secured first place in the PixelSync hackathon at OJASS 2024 .</li>
                <li> Mastered the correct implementation of data structures and algorithms through the completion of 380+ questions on GeeksforGeeks</li>
                <li> Achieved a rank under 250 on the geeksforgeeks Institute Leadership Boards</li>
            </ul>
            }
            className="h-[40rem] rounded-md w-screen"
            >
                <li>Hacktoberfest 2023 <span className="text-red-500">level 4</span></li>
                <li> Leetcode Contest Rating <span className="text-red-500">( 1,567 ), Max</span></li>
                <li> Secured <span className="text-red-500">first place</span> in the PixelSync hackathon at OJASS 2024 .</li>
                <li> Mastered the correct implementation of data structures and algorithms through the completion of <span className="text-red-500">380+ questions</span> on GeeksforGeeks</li>
                <li> Achieved a <span className="text-red-500">rank under 250</span> on the geeksforgeeks Institute Leadership Boards</li>
              </MaskContainer>
              </div>
    </div>
  )
}

export default Achivement