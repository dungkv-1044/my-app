import React, { Component } from "react";

export default class LoginScreen extends Component {
    render() {
        const { login, fetching } = this.props as any;
        return (
            <div className="a" style={{backgroundColor: 'red'}}>
                { fetching ? <h1 style={{ backgroundColor: 'blue', textAlign: 'center' }}>Login Screen</h1> : null}
                <div style={{ backgroundColor: 'green', justifyContent: 'center', display: "flex" }}>
                    <div style={{backgroundColor: 'purple'}}>
                        <button onClick={login} style={{ backgroundColor: 'purple', width: 100 }}>OK</button>
                    </div>
                </div>
            </div>
        );
    }
}
