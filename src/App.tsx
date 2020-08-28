import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    const { fetching, data, fetchProducts, error } = this.props as any;
    return (
        <div className="App">
          {data ? (
              <div>
                <p className="App-intro">Products</p>
                {data.map((i: any, index: number) => (
                    <p key={index}>{i.id} - {i.name}</p>
                ))}
              </div>
          ) : (
              <p className="App-intro">No Products</p>
          )}

          {fetching ? (
              <button disabled>Fetching...</button>
          ) : (
              <button onClick={fetchProducts}>Fetch Product</button>
          )}

          {error && <p style={{ color: "red" }}>something went wrong!</p>}

        </div>
    );
  }
}
