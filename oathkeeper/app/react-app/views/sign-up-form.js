import React from 'react';

export class SignUpForm extends React.Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <form method="POST" action="#" role="form">
                        <div className="form-group">
                            <h2>Create account</h2>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="signupName">Your name</label>
                            <input id="signupName" type="text" maxlength="50" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="signupEmail">Email</label>
                            <input id="signupEmail" type="email" maxlength="50" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="signupEmailagain">Email again</label>
                            <input id="signupEmailConfirmation" type="email" maxlength="50" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="signupPassword">Password</label>
                            <input id="signupPassword" type="password" maxlength="25" className="form-control"
                                   placeholder="at least 6 characters" length="40"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="signupPasswordagain">Password
                                again</label>
                            <input id="signupPasswordConfirmation" type="password" maxlength="25"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button id="signupSubmit" type="submit" className="btn btn-info btn-block">Create
                                your
                                account
                            </button>
                        </div>
                        <p className="form-group">By creating an account, you agree to our <a href="#">Terms of
                            Use</a> and our <a href="#">Privacy Policy</a>.</p>
                        <hr />
                        <p>Already have an account? <a href="#">Sign in</a></p>
                    </form>
                </div>
            </div>
        );
    }
}