

export default function Download() {
  return (
    <section className="py-stack-lg px-margin-desktop bg-surface-white" id="download">
      <div className="max-w-[1000px] mx-auto bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden text-on-primary shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline-h1 text-headline-h1-mobile md:text-headline-h1 mb-6 leading-tight">
              Ready to upgrade your society experience?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="badge-interactive h-14 w-44 bg-surface-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-surface-container transition-all p-2">
                <img 
                  className="h-full w-full object-contain" 
                  alt="App Store badge" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdTvHFzcwZtgVFTx3N1-3jc7PiMCCnJYyKQIzcTbnykVpwpOnX72RAbGVe6sOSy2ZVZvQf0TZBSIOQ_aoFKb9_9Uo5mXGsSqlJ1BVoiDP1rAMlNXbdU3o5cpPznTd67W_zx8HsGZW6qCBpd18uIW2koH3huo4UvstM5UI7f_x9P75UCjrX7ii95E6Rj_fnNvm83RkMiDXW4iGKKO5LDJow9tE-XZu3D3vn6OaJGJCzUQ3hUtSW0P4rAi-Ju7j8AizBapO9eYNqyHLa"
                />
              </div>
              <div className="badge-interactive h-14 w-44 bg-surface-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-surface-container transition-all p-2">
                <img 
                  className="h-full w-full object-contain" 
                  alt="Google Play badge" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADunPb9Hcbv6bvrahmYVd--aLGcBkVV4lN24Z1padwc0QDxoS1iclTKf0T2TdhKYFTd8IhtZj1h5dF6AiJedC9e0Jol_kqBHHyfIGLm7OXgnWxeciX6zS1ph8GfW_rV6V6v4s35oo1oxSBRTu5V0TK8JHyUjIuwHAA0uVmGfpPDxh06k-4wGarZNRTjAbvZyJpT6Sadu_KHBMeIQWw2VsObBPNAi5KSzjNR8-iK3U67HrKvZlZXgkhu27m0TwQnERuWiANHGyplEBg"
                />
              </div>
            </div>
            
            <button className="mt-8 font-button text-button underline underline-offset-8 hover:text-secondary-fixed transition-colors">
              Request a Demo for your Committee
            </button>
          </div>
          
          <div className="w-48 h-48 bg-surface-white p-4 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="flex flex-col items-center">
              <img 
                className="w-32 h-32 mb-2" 
                alt="QR Code" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgzKipt82UBnNH-Me_ysY_tofOvEoOPpUngTp8laoG1dA8O8zmrLUev4nMerwHJv4VpZWlY6fXaOxEOu5MmISVGtKAqX6Q1rYv0jpIVxUSWNV0EHjfUkUDpSySLS_JkOIIAIKSCrBAQXAgYQ1_vTFVQgXx3l1CCVxrqxemyAvWNxkvr0tsq3YcYvvUWnOGAgc0kU0UgCVoHYhG-fPqhHsKmrH2RdsgkO42eYmiasv1jAFWhbjnxXSezjzGPimJYAdoJcEixDnPaYo4"
              />
              <span className="text-primary font-label-caps text-[10px] tracking-wider">SCAN TO DOWNLOAD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
