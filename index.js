import React from 'react';
//import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import UrlValidator from './components/urlValidator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UrlValidator />)
reportWebVitals();













// function UrlValidator() {
//   const [url, setUrl] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const validateUrl = () => {
//     // Use a regular expression to validate the URL
//     const urlRegex = /^((https?):\/\/)?([a-z0-9-]+\.)+[a-z]{2,}$/i;
//     setIsValid(urlRegex.test(url));
//   };

//   return (
//     <div id='back'>
//       <label htmlFor="url-input">Enter a URL:</label>
//       <input
//         type="text"
//         id="url-input"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button onClick={validateUrl}>Validate</button>
//       {isValid ? <p>vaild</p>: <p>not valid</p> }
//     </div>
//   );
// }

// export default UrlValidator;




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

