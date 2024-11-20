import React, { useState } from "react"
import Warning from '../assets/warning.webp'
import Setting from '../assets/Settings1.webp'

const Hero = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
        setIsFullscreen(true);
    };

    return (
      <div className={`relative font-geologica ${isFullscreen ? 'fixed inset-0 bg-white z-[9999]' : 'px-6 py-12 max-w-4xl mx-auto'} md:px-8 lg:px-10`}>
        <h1 className="text-[18px] before:leading-[28px] text-ligh-red font-normal mb-[32px] md:text-[22px] lg:text-[24px]">
          Warning Your Apple iPhone is severely damaged by 13 viruses
        </h1>
          
        <p className="text-gray-700 mb-10  text-justify text-sm md:text-base lg:text-lg">
          We have detected that your Browser is (62%) DAMAGED by BROWSER TROJAN VIRUSES picked up while surfing recent corrupted sites.Immediate action is required to prevent ot from <span className="text-ligh-red">spreading and infecting sensitive data like your.Facebook account,Whatsapp messages photos and private.applications.</span>
        </p>

        <div className="text-black mb-8 leading-[32px] md:mb-10">
          <p className="font-normal   text-justify mb-4 text-sm md:text-base lg:text-lg">
            Here is how you can solve this in just few seconds (Step by Step)
          </p>
    
          <div className="space-y-3 mt-10 md:space-y-4 md:mt-12">
            <p className="font-normal  text-justify text-sm md:text-base">Step1: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal  text-justify  text-sm md:text-base">Step2: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal  text-justify  text-sm md:text-base">Step3: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal  text-justify text-sm md:text-base">Step4: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal  text-justify text-sm md:text-base">Step5: Tap REMOVEVIRUS to install VPN from the</p>
          </div>
        </div>

        {/* Center Modal */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-[#1b1b1b]/90 p-4 rounded-xl h-[240px] w-[300px] text-center shadow-2xl z-50
                md:w-[400px] md:h-[280px] lg:w-[450px] lg:h-[300px]">
          <div className="flex justify-center mb-3 md:mb-4">
            <img 
              src={Warning} 
              alt="Warning" 
              className="h-[80px] w-[80px] object-contain md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px]"
            />
          </div>
          
          <div className="mb-3 [&>*]:text-whitish md:mb-4">
            <p className="mb-1 !text-whitish text-sm md:text-base lg:text-lg">Call apple support how To fix this issue</p>
            <p className="!text-whitish text-xs md:text-sm">+1 (833) 638 3086</p>
          </div>
          
          <button 
            onClick={toggleFullscreen}
            className="w-full bg-[#ff4b4b] !text-whitish py-2 rounded-lg hover:bg-[#ff3b30] transition-colors text-xs md:text-sm md:py-3 lg:text-base"
          >
            OK
          </button>
        </div>

        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-50 
                md:w-[400px] lg:w-[450px] md:bottom-24">
          <div className="p-5 flex items-start gap-3 md:p-6 lg:p-7">
            <div className="relative">
              <img 
                src={Setting} 
                alt="Settings" 
                className="h-[74px] w-[74px] object-contain md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px]"
              />
            </div>
            
            <div className="flex flex-col text-left">
              <p className="text-sm text-black md:text-base lg:text-lg">Please call apple support now To fix this issue</p>
              <p className="text-xs mt-3 text-glass-black md:text-sm">Immediate Action Is Required</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-50
                md:w-[400px] lg:w-[450px] md:bottom-6">
          <button 
            onClick={toggleFullscreen}
            className="w-full py-3 text-center text-sm font-medium md:text-base md:py-4 lg:text-lg"
          >
            OK
          </button>
        </div>
      </div>
    )
}

export default Hero