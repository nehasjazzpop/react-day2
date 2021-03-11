    import React, { Component } from 'react';
    import './Card.css';

    class Card extends Component {
        render() {
            let {image, title, desc} = this.props.card1;
            return (
                <div className="Card">
                    <div style={{backgroundImage: `url(${image})`}} className="image"></div>
                    <br/>
                    <hr/>
                    <h3>{title}</h3>
                    <br/>
                    <p>{desc}</p>
                    <br/>
                    <button>Explore</button>
                </div>
            )
        }
    }

    export default Card;
