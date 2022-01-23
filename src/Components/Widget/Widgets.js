import React from 'react';
import "./Widgets.css"
import {Users} from "../../dummyData"
import Online from "../Online/Online"

function Widgets({profile}) {
    const HomeRightbar = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
        )
    }
    return (
        <div className='widgets'>
            <div className='widgets_wrapper'>
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
    )
}

export default Widgets
