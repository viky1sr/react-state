import React from 'react';

 const Materi = (props) => {
    return(
        <div className="wrapper">
            <div className="content">
                <div className="gambarpaket">
                    <img src={props.img} className="imagesslider"/>
                </div>
                <p className="des">{props.desc}</p>
                <p className="des">{props.harga}</p>
            </div>
        </div>
    )
}
export default Materi;