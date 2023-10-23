import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
    return (
        <div className='fixed left-5 flex flex-col top-1/3 space-y-2'>
            <SocialIcon url='https://github.com/mailsg' target='_blank' bgColor='transparent' />
            <SocialIcon url='https://www.linkedin.com/in/sandeep0912' target='_blank' bgColor='transparent'/>
            <SocialIcon url='mailto:mailsg0912@gmail.com' network='email' label='Mail me' target='_blank' bgColor='transparent'/>
            {/* <SocialIcon url='https://drive.google.com/uc?export=download&id=1VQf3Bl_UHgNjda3mZMhaq5BPf0EWtOEq' network='dropbox' label='My Resume' target='_blank' /> */}
        </div>
    )
}

export default Social;