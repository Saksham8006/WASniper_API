import React from 'react'
import './Code.css'

const CodeEditor = () => {
    return (
        <div className='min-h-[70vh] py-[96px]'>

            <div className='max-w-[1140px] mx-auto px-[24px]'>

                <div className='mb-[50px]'>
                    <h2 className="text-center text-slate-800 text-[32px] md:text-[38px] ls:text-[40px] lm:text-[42px] font-[900] leading-[1.375em] md:leading-[1.211em] lm:leading-[1.333em] tracking-[-.024em]
                     md:tracking-[-.042em] mb-[16px] lm:mb-[24px]">Start working with WA Sniper and send messages via WhatsApp REST API</h2>

                    <p className="mb-5 mt-[30px] font-bold text-slate-800 sm:text-xl useCasesColor z-10 max-w-[1366px] mx-auto w-[68%] text-center">
                        Make a chatbot and integrate WhatsApp with your systems: ERP,CRM, your app or website.

                        You can use any programmable language to easily .</p>
                </div>

                <iframe loading="lazy" className="w-100 border-none" scrolling="yes" frameBorder="0"  width="100%"  
                    height="600px" src="https://codeeditor-new.netlify.app/" title="API Documentation"></iframe>
            </div>
        </div>
    )
}

export default CodeEditor