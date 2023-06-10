import React, { useEffect } from 'react'

// REMOVING THE React.StrictMode from the main.tsx file keeps this component from rendering twice.

const MailChimp: React.FC  = () => {
  
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'mcjs';
        script.async = true;
        script.src =
          'https://chimpstatic.com/mcjs-connected/js/users/e01919a7baafa2016354fe5f6/2069cd9a2aa0b8c007a9ee66b.js';
        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
    
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      }, []);
  
    return (
    
        <div
            id="intakeq"
            className='max-w-[720px] w-full'
        > 
        
        </div>
  )
}

export default MailChimp