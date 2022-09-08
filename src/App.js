import React from "react";
import { useState } from "react";

function App() {
  const [annually, setAnnually] = useState(false);

  return (
<div class="container">
    <div class="wrapper">
        <h1 class="title">Our Pricing</h1> 
        <div class="toggle">
          <label class="name">Annually</label>
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />
          <label for="checkbox" class="label">
            <div class="ball"></div>
          </label>
          <label class="name">Monthly</label>
        </div>

      <div class="pricing-main">
        <div class="pricing-box">
          <h2 class="box-title">Basic</h2>
          {annually && (
                <p class="monthly"> $ <span class="price">19.99</span></p>
          )}
          {!annually && (
                <p class="annually"> $ <span class="price">199.99</span></p>
          )}
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
        <div class="pricing-box second">
          <h2 class="box-title">Professional</h2>
          {annually && (
                <p class="monthly"> $ <span class="price">24.99</span></p>
          )}
          {!annually && (
                <p class="annually"> $ <span class="price">249.99</span></p>
          )}
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
        <div class="pricing-box">
          <h2 class="box-title">Master</h2>
          {annually && (
                <p class="monthly"> $ <span class="price">39.99</span></p>
          )}
          {!annually && (
                <p class="annually"> $ <span class="price">399.99</span></p>
          )}
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
