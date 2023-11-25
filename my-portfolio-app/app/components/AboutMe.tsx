import React from 'react';

const AboutMe = () => {
const aboutMe: string = `
Hi, I am James Storr, hailing from the picturesque realms of Yorkshire, UK. 
As a seasoned Software Engineering Manager, I've etched over 15 years of footprints in the vast digital sands of IT. 

Embarking on my odyssey as an eager apprentice with BT – the UK's telecommunication titan – I soared through a mosaic of roles, each one a chapter adding depth and colour to my professional tapestry. Remarkably, my allegiance to BT has remained unwavering, a testament to our mutual growth.

While the tapestry is vast, my recent masterstrokes lie in orchestrating a symphony with three dynamic teams – wizards of React, Java, and Flutter – sculpting the Basket & Checkout for EE's avant-garde Marketplace platform.

From my fledgling days as a platform engineer, I dabbled and danced with SQL and MongoDB as a DBA. I then donned the hat of an SCCM engineer, where my database acumen bolstered a gargantuan platform catering to over 100,000 devices at BT. Here, destiny called, and I ascended as an Engineering Manager from the very same team.

Seeking fresh horizons, I morphed into a Cloud Solutions Designer. In this avatar, I masterminded the colossal task of seamlessly transitioning every BT soul from Skype to MS Teams. Further, when the pandemic's shadows loomed, I architected an ECDN solution, acting as BT's digital bulwark against the ensuing network tempests.

Eventually, I found my greatest challenge yet, leading my current band of software developers on a journey both demanding and amazing in equal measures.  

With each role and challenge I faced, I gained value experiences and found success through hard work and a constant desire to learn. 
    `
    return (
        <>
        <p className='whitespace-pre-wrap'>{aboutMe}</p>
        </>
    );
};

export default AboutMe;
