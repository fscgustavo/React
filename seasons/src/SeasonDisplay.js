import React from 'react';
//fazendo import de css em js
//ele 'sobe' pro index.html
import './SeasonDisplay.css';

class SeasonDisplay extends React.Component{
    
    
    getSeason(lat,month){
        if(month > 2 && month<9){
           return lat > 0 ? 'summer':'winter'
        } else{
            return lat > 0 ? 'winter':'summer'
        }
    }

    render(){
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const seasonConfig = {
            summer: {
                text: `Let's hit the beach!`,
                iconName: 'sun'
            },
            winter: {
                text: `Burr, it's is chilly`,
                iconName: 'snowflake'
            }
        }
        
        const {text, iconName} = seasonConfig[season]
        
        return(
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`}/>
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div> 
        );
    }
}
export default SeasonDisplay;