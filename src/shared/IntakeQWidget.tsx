import React, { useEffect } from 'react'

// REMOVING THE React.StrictMode from the main.tsx file keeps this component from rendering twice.

const IntakeQWidget: React.FC  = () => {
  
    useEffect(() => {

        (window as any).intakeq = '63cf141cbb4caddbf056379e';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://intakeq.com/js/widget.min.js?1';
        document.head.appendChild(script);
        
        return () => {
            document.head.removeChild(script);
        };

    }, []);
  
    return (
    
        <div
            id="intakeq"
            className='max-w-[720px] w-full mx-auto'
        > 
        
        </div>
  )
}

export default IntakeQWidget