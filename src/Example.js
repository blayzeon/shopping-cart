import React from "react";
import "./css/example.css";

export default function Example() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="flex-nav">
            <li>Brand Name</li>
            <li className="flex-pair flex-end">
              <input type="text" />
              <button>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="inherit"
                    d="M22.535 22.647l-.394.908-.707-.309-.619-.619-.883-.972L18.12 19.8l-.664-1.562.865-.725 1.566.961 1.15 1.15 2.28 1.433.106 1.041-.888.55"
                  ></path>
                  <path
                    d="M23.316 21.056l-3.181-3.182a1.682 1.682 0 00-1.814-.362s0-.028-.028-.028l-1.535-1.535c3.349-3.768 3.21-9.544-.39-13.144-3.74-3.74-9.824-3.74-13.563 0-3.74 3.74-3.74 9.823 0 13.562 1.87 1.87 4.325 2.791 6.781 2.791 2.288 0 4.549-.81 6.363-2.428l1.507 1.507a1.658 1.658 0 00.279 2.01l3.181 3.18c.335.336.754.503 1.172.503.419 0 .865-.167 1.172-.502.726-.67.726-1.73.056-2.372zM3.642 15.558c-3.293-3.293-3.293-8.651 0-11.972a8.458 8.458 0 015.972-2.484 8.41 8.41 0 015.972 2.484c3.321 3.321 3.321 8.68.028 11.972-3.293 3.321-8.68 3.321-11.972 0zm18.893 7.089a.54.54 0 01-.782 0l-3.18-3.182a.54.54 0 010-.781.551.551 0 01.39-.168c.14 0 .279.056.39.168l3.182 3.153a.573.573 0 010 .81z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
                <path
                  fill="inherit"
                  d="M4.2 19.6l.144-1.175.47-.47.724-.797.76-.362.725-.362.905-.29.651-.361h4.959l1.919.072.833.109 1.339.543s.543.362.688.434c.145.073.869.76.869.76l.76.797.154 1.102-.661 1.178-.724.724-1.267.616-1.267.47-1.665.435L12.1 23l-2.181.131-1.557-.434-1.303-.507-1.52-.724-.978-.833L4.2 19.6M8.125 7.5l.313-.969.437-.875.563-.468.78-.532.595-.312.843-.188 1.188-.031.75.25.656.344.594.656.687.625.25.688.313.562.125.781.062.969v.906l-.375.875-.406.906-.656.844-.625.469-.906.5-.97.063h-1.53l-.532-.376-.781-.468-.5-.75-.469-.719-.281-.75-.313-.719V8.97l.032-.75z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12.1 14.2c2.6 0 4.7-2.4 4.7-5.3s-2.1-5.3-4.7-5.3S7.4 6 7.4 8.9s2.1 5.3 4.7 5.3zm0-9.6c2.1 0 3.7 1.9 3.7 4.3s-1.7 4.3-3.7 4.3c-2.1 0-3.7-1.9-3.7-4.3s1.6-4.3 3.7-4.3z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12.1 0C5.5 0 .1 5.4.1 12c0 3.1 1.2 6 3.2 8.1 0 .1.1.1.1.1 2.2 2.3 5.3 3.8 8.7 3.8 6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 1c6.1 0 11 4.9 11 11 0 2.6-.9 4.9-2.4 6.8-1.2-2.1-3.4-3.4-5.8-3.4H9.2c-2.4 0-4.6 1.3-5.8 3.3C2 16.9 1.1 14.6 1.1 12c0-6.1 4.9-11 11-11zm0 22c-3.1 0-5.9-1.3-7.9-3.4 1-1.9 2.9-3.2 5.1-3.2H15c2.2 0 4.1 1.2 5.1 3.2-2.1 2.1-4.9 3.4-8 3.4z"
                ></path>
              </svg>
            </li>
            <li className="bag-pair">
              <svg viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="inherit"
                  d="M.957 7.02l3.24-.486 5.79.135 9.778.351.378 2.12-1.185 13.44-.677 1.355-1.083.948-1.591.508-10.597.067-1.523-.575-1.253-1.117-.474-1.49-.44-4.232L.372 7.651z"
                ></path>
                <path
                  d="M20.475 6.318a.777.777 0 00-.556-.244h-4.54v-1.13C15.38 2.199 13.125 0 10.346 0c-2.78 0-5.003 2.228-5.003 4.945v1.13H.773a.727.727 0 00-.557.243c-.154.153-.216.367-.216.58l1.143 14.926c.154 2.259 2.1 4.03 4.385 4.03h9.512c2.285 0 4.2-1.771 4.385-4l1.266-14.986a.832.832 0 00-.216-.55zM6.238 4.945c0-2.228 1.822-4.03 4.108-4.03 2.254 0 4.076 1.802 4.076 4.03v1.13H6.238v-1.13zm12.26 16.88c-.154 1.77-1.667 3.143-3.458 3.143H5.528c-1.822 0-3.335-1.404-3.459-3.174L.957 7.02h18.808l-1.266 14.804z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
              <span id="bag-number">
                <span>0</span>
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <main className="centered">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
      <footer>This is footer text.</footer>
    </div>
  );
}
