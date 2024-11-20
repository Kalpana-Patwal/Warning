import React from "react"
import Warning from '../assets/warning.webp'
import Setting from '../assets/Settings1.webp'

const Hero = () => {
    return (
      <div className="px-6 py-12 max-w-4xl mx-auto relative font-geologica md:px-8 lg:px-10 xl:max-w-6xl 2xl:max-w-7xl">
   
        <div className="relative z-0 mb-[400px] md:mb-[450px] lg:mb-[500px]"> {/* Added margin bottom to prevent content overlap */}
          <h1 className="text-[18px] before:leading-[28px] text-ligh-red font-normal mb-[32px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
            Warning Your Apple iPhone is severely damaged by 13 viruses
          </h1>
            
          <p className="text-gray-700 mb-10 text-sm text-justify md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            We have detected that your Browser is (62%) DAMAGED by BROWSER TROJAN VIRUSES picked up while surfing recent corrupted sites.Immediate action is required to prevent ot from <span className="text-ligh-red">spreading and infecting sensitive data like your.Facebook account,Whatsapp messages photos and private.applications.</span>
          </p>

          <div className="text-black mb-8 leading-[32px] md:mb-10">
            <p className="font-normal mb-4  text-justify text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Here is how you can solve this in just few seconds (Step by Step)
            </p>
      
            <div className="space-y-3 mt-10 md:space-y-4 md:mt-12">
              <p className="font-normal text-justify text-sm md:text-base">Step1: Tap REMOVEVIRUS to install VPN from the</p>
              <p className="font-normal text-justify text-sm md:text-base">Step2: Tap REMOVEVIRUS to install VPN from the</p>
              <p className="font-normal text-justify text-sm md:text-base">Step3: Tap REMOVEVIRUS to install VPN from the</p>
              <p className="font-normal text-justify text-sm md:text-base">Step4: Tap REMOVEVIRUS to install VPN from the</p>
              <p className="font-normal text-justify text-sm md:text-base">Step5: Tap REMOVEVIRUS to install VPN from the</p>
            </div>
          </div>
        </div>

     
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-[#1b1b1b]/90 p-4 rounded-xl w-[300px] text-center shadow-2xl z-30
                md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px]">
          <div className="flex justify-center mb-6">
            <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
              <img 
                src={Warning} 
                alt="Warning" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <p className="mb-2 text-whitish text-base  text-justify md:text-lg lg:text-xl">Call apple support how To fix this issue</p>
            <p className="text-whitish text-sm  text-justify md:text-base">+1 (833) 638 3086</p>
          </div>
          
          <button className="w-full bg-[#ff4b4b] text-whitish py-3 rounded-lg hover:bg-[#ff3b30] transition-colors text-sm md:text-base lg:text-lg">
            OK
          </button>
        </div>

        <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-20 
                md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px]">
          <div className="p-4 flex items-center gap-4">
            <div className="flex-shrink-0">
              <img 
                src={Setting} 
                alt="Settings" 
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
            </div>
            
            <div className="flex-grow">
              <p className="text-sm text-black md:text-base lg:text-lg">Please call apple support now To fix this issue</p>
              <p className="text-xs mt-2 text-glass-black md:text-sm">Immediate Action Is Required</p>
            </div>
          </div>
        </div>

       
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-10
                md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px]">
          <button className="w-full py-4 text-center text-sm font-medium md:text-base lg:text-lg">
            OK
          </button>
        </div>
      </div>
    )
}

export default Hero