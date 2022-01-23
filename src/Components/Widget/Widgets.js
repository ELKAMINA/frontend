import React from 'react';
import "./Widgets.css"

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
            title = "I'm the Frame"
            src="https://www.businessinsider.fr/ce-quapple-devrait-annoncer-lors-de-la-keynote-du-14-septembre-2021-188603#apple-watch-series-7"
            width = "340"
            height = "100%"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
