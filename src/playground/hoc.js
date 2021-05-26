import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is info: {props.info}</p>
    </div>
);

const warningWraped = (Info) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is the warning!!!</p>} 
            <Info {...props} />
        </div>
    );
};
const requireAuthentication = (Info) => {
    return (props) => (
        <div>
            {props.isAutheticated && <p>the is user Autheticated!!!</p>} 
            <Info {...props} />
        </div>
    );
};
const Warn = warningWraped(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<Warn isAdmin={true} info="these are the details!!!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheticated={false} info="these are the details!!!" />, document.getElementById('app'));