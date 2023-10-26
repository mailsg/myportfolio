import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
    return (
        <div className='fixed left-5 flex flex-col top-1/3 space-y-2'>
            <SocialIcon url='https://github.com/mailsg' target='_blank' bgColor='transparent' />
            <SocialIcon url='https://www.linkedin.com/in/sandeep0912' target='_blank' bgColor='transparent'/>
            <SocialIcon url='mailto:mailsg0912@gmail.com' network='email' label='Mail me' target='_blank' bgColor='transparent'/>
        </div>
    )
}

export default Social;