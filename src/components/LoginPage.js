import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
     <div className="box-layout"> 
     <div className="box-layout__box">
         <h1 className="box-layout__box_title">Expensify</h1>
         <p>It's time to get your expenses saved and controlled!!!</p>
        <button
        className="login-button"
         onClick={startLogin}
         >Login with Google</button>
        </div>
     </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);