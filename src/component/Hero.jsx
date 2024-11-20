const Hero = () => {
    return (
      <div className="px-6 py-12 max-w-4xl mx-auto relative font-geologica md:px-8 lg:px-10 xl:px-12 2xl:px-0">
        <h1 className="text-[18px] before:leading-[28px] text-ligh-red font-normal mb-[32px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
          Warning Your Apple iPhone is severely damaged by 13 viruses
        </h1>
          
        <p className="text-gray-700 mb-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          We have detected that your Browser is (62%) DAMAGED by BROWSER TROJAN VIRUSES picked up while surfing recent corrupted sites.Immediate action is required to prevent ot from <span className="text-ligh-red">spreading and infecting sensitive data like your.Facebook account,Whatsapp messages photos and private.applications.</span>
        </p>

        <div className="text-black mb-8 leading-[32px] md:mb-10 xl:mb-12">
          <p className="font-normal mb-4 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Here is how you can solve this in just few seconds (Step by Step)
          </p>
    
          <div className="space-y-3 mt-10 md:space-y-4 md:mt-12 xl:space-y-5 xl:mt-14">
            <p className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">Step1: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">Step2: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">Step3: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">Step4: Tap REMOVEVIRUS to install VPN from the</p>
            <p className="font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">Step5: Tap REMOVEVIRUS to install VPN from the</p>
          </div>
        </div>

        {/* Center Modal */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-[#1b1b1b]/90 p-4 rounded-xl h-[240px] w-[300px] text-center shadow-2xl z-50
                md:w-[400px] md:h-[280px] lg:w-[450px] lg:h-[300px] xl:w-[500px] xl:h-[320px] 2xl:w-[600px] 2xl:h-[350px]">
          <div className="flex justify-center mb-3 md:mb-4 xl:mb-5">
            <img 
              src={Warning} 
              alt="Warning" 
              className="h-[80px] w-[80px] object-contain md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] 2xl:h-[160px] 2xl:w-[160px]"
            />
          </div>
          
          <div className="mb-3 [&>*]:text-whitish md:mb-4 xl:mb-5">
            <p className="mb-1 !text-whitish text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Call apple support how To fix this issue</p>
            <p className="!text-whitish text-xs md:text-sm lg:text-base xl:text-lg">+1 (833) 638 3086</p>
          </div>
          
          <button className="w-full bg-[#ff4b4b] !text-whitish py-2 rounded-lg hover:bg-[#ff3b30] transition-colors text-xs md:text-sm md:py-3 lg:text-base xl:text-lg xl:py-4 2xl:text-xl">
            OK
          </button>
        </div>

        {/* Bottom Notifications */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-50 
                md:w-[400px] lg:w-[450px] md:bottom-24 xl:w-[500px] xl:bottom-28 2xl:w-[600px]">
          <div className="p-5 flex items-start gap-3 md:p-6 lg:p-7 xl:p-8 2xl:p-10">
            <div className="relative">
              <img 
                src={Setting} 
                alt="Settings" 
                className="h-[74px] w-[74px] object-contain md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px] xl:h-[120px] xl:w-[120px] 2xl:h-[140px] 2xl:w-[140px]"
              />
            </div>
            
            <div className="flex flex-col text-left">
              <p className="text-sm text-black md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Please call apple support now To fix this issue</p>
              <p className="text-xs mt-3 text-glass-black md:text-sm xl:text-base 2xl:text-lg">Immediate Action Is Required</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] bg-whitish rounded-xl z-50
                md:w-[400px] lg:w-[450px] md:bottom-6 xl:w-[500px] xl:bottom-8 2xl:w-[600px]">
          <button className="w-full py-3 text-center text-sm font-medium md:text-base md:py-4 lg:text-lg xl:text-xl xl:py-5 2xl:text-2xl">
            OK
          </button>
        </div>
      </div>
    )
}