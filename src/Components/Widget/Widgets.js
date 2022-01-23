import React from 'react';
import "./Widgets.css"
import {Users} from "../../dummyData"
import Online from "../Online/Online"

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_wrapper'>
                <div className='widgets_wr_top_bthday'>
                    <img className='widgets_wr_top_bthday_img' src ="https://img2.freepng.fr/20180428/tqq/kisspng-gift-card-gold-discounts-and-allowances-holiday-5ae4a80c2b7a19.3320938715249346681781.jpg" alt=""/>
                    <span>
                        <b>Amina Elk</b> et <b>3 autres</b> murissent
                    </span>
                </div>
                <div className='widgets_wr_middle_ad'>
                    <img className='widgets_wr_middle_ad_img' src ={process.env.PUBLIC_URL + '/assets/pub.png'} alt=""/>
                    <span>
                        {/* <b>Amina Elk</b> et <b>3 autres</b> murissent */}
                    </span>
                </div>
                <div className='widgets_wr_bottom_onlinef'>
                    <h4>Online friends</h4>
                    <ul className='widgets_wr_bottom_listf'>
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ) 
                    )}
                    </ul>
                </div>
          </div>
        </div>
    )
}

export default Widgets
