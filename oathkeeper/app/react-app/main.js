import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

import {SignUpForm} from './views/sign-up-form';

ReactDOM.render(
    <div style={{marginTop: "30px"}} className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <SignUpForm />
            </div>
        </div>
    </div>,
    document.querySelector("#app-container")
);