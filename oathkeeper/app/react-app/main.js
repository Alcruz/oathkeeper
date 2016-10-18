import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

import {SignUpForm} from './views/sign-up-form';

ReactDOM.render(
    <SignUpForm />,
  document.querySelector("#app-container")
);