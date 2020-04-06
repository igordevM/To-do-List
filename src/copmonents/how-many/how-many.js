import React from 'react';
import './how-many.css';


const HowMany = ({todo, done}) => {
    return(
        <div className="how-many">
            <span>To do {todo} </span>
            <span>Done {done} </span>
        </div>
        

    );
};
export default HowMany;