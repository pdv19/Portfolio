import React from 'react'
import './card.css'

// const useStyles = makeStyles({

// });
const Card = ({title, description, link, img}) => {
  // const classes = useStyles();
    return (
        <a href={link}>
          <div className="card-container">
            <div className="card">
              <div className="img-content">
                <img src={img} alt="" style={{width: '100%', height: '100%'}}/>
              </div>
              <div className="content">
                <p className="heading">{title}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </a>
    );
};

export default Card