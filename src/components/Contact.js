import React from "react";


export default function Contact (props) {
    let badge;
    console.log(badge)
    if (props.spots === 0){
        badge = "Sold-Out"
    }else{
        badge = ''
    }
    
    return(
        <div className="card">
            {badge && <div className="badge">{badge}</div>}
            <img src={`./images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
    
}
