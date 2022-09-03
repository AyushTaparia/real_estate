import React from 'react'
import './card.css'
import {FaBed,FaBath} from 'react-icons/fa'
import {TbSquaresFilled} from 'react-icons/tb'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {BsStars} from 'react-icons/bs'

export default function Card({obj}) {
  const imageUrl = 'assets/house' + (obj.id % 8 + 1) + '.jpg';

  const [like, setLike] = React.useState(false);

  // toggles like btn
  const toggle=() => { 
    setLike(old => !old);
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
      <div className="cardContainer">
      <div className="houseImage" style={{ backgroundImage: `url("${imageUrl}")` }}>
      {obj.popularity&&<div className="pop"><BsStars/> POPULAR</div>}
      </div>
        <div className="info">
          <div className="rentalInfo">
            <div className="price">
              <div className="amt">
                <span className="pricing">{'$'+numberWithCommas(obj.price)}</span> / month
              </div>
              <div className="heart">
                {!like?<AiOutlineHeart className='heartSym' onClick={()=>{toggle()}}/>:<AiFillHeart className='heartSym' onClick={()=>{toggle()}}/>}
              </div>
            </div>
            <div className="name">
              {obj.region}
            </div>
            <div className="address">
              {obj.address}
            </div>     
            <div className="country">
              {obj.country}
            </div>     
          </div>
          <div className="houseInfo">
            <div className="rooms">
              <FaBed className ='infoIcons'/>
              {obj.rooms} Beds
            </div>
            <div className="bath">
              <FaBath className ='infoIcons'/>
              {obj.bath} Bath
            </div>
            <div className="area">
              <TbSquaresFilled className ='infoIcons'/>
              {obj.area} m<sup>2</sup>&nbsp;Area
            </div>
          </div>
        </div>
      </div>
  )
}
