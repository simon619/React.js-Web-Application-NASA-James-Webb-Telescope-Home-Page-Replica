import React from "react";
import img1 from './Image/backgroud.png';
const Banner = () => {
    return ( 
        <section className="banner">
            <img src={ img1 } alt="backgroud"/>
            <div className="webb">
                <h1>James Webb Space Telescope</h1>
            </div>
            <div className="detail">
            <h2>First Images From The James Webb Space Telescope</h2>
            <p>The dawn of a new era in astronomy has begun as the world gets its first look at the full capabilities of NASA's 
                James Webb Space Telescope, a partnership with ESA (European Space Agency) and CSA (Canadian Space Agency). The 
                telescope's first full-color images and spectroscopic data were released during a televised broadcast at 10:30 
                a.m. EDT (14:30 UTC) on Tuesday, July 12, 2022, from NASA's Goddard Space Flight Center in Greenbelt, Maryland. 
                These listed targets below represent the first wave of full-color scientific images and spectra the observatory 
                has gathered, and the official beginning of Webb's general science operations. They were selected by an international 
                committee of representatives from NASA, ESA, CSA, and the Space Telescope Science Institute.</p>
                <p><span>Press release: </span><a href="https://www.nasa.gov/press-release/nasa-reveals-webb-telescope-s-first-images-of-unseen-universe/">
                    NASA Reveals Webb Telescope's First Images of Unseen Universe</a></p>
            </div>
        </section>
     );
}
 
export default Banner;