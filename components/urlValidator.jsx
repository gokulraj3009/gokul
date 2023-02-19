import React, { useState } from 'react';
//import ReactDOM  from 'react-dom/client';
import DomainInput from './domain';
import PathInput from './path';
import MethodSelect from './method';
import BodyInput from './body';

function UrlValidator() {
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const validateUrl = (event) => {
    event.preventDefault();
    // Use a regular expression to validate the domain
    const domainRegex = /^([a-z0-9-]+\.)+[a-z]{2,}$/i;
    if (!domainRegex.test(domain)) {
      setMessage('Invalid domain.');
      return;
    }

    // Validate the path (optional)
    let formattedPath = '';
    if (path) {
      formattedPath = '/' + path.replace(' ', '/');
    }

    // Validate the body (optional)
    if (['POST', 'PUT'].includes(method) && !body) {
      setMessage('Error in the body.');
      return;
    }
    if (body && !isValidJson(body)) {
      setMessage('Invalid JSON in body.');
      return;
    }

    // If everything passes validation, construct the URL
    const url = `${domain}${formattedPath}`;

    // Send the request (optional)
    if (['POST', 'PUT'].includes(method)) {
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
        .then(response => response.json())
        .then(data => {
          setIsValid(true);
          setMessage(`Request succeeded: ${JSON.stringify(data)}`);
          
        })
        .catch(error => {
          setIsValid(false);
          setMessage(`Request failed: ${error.message}`);
        });
  
    } else {
      setIsValid(true);
      setMessage( url);
    }
  if(isValid) console.log("success");
  else console.log("failure");
    
  };

  const isValidJson = (json) => {
    try {
      JSON.parse(json);
      return true;
    } catch (e) {
      return false;
    }
  };
  

  return (
    <form data-testid="submit" onSubmit={validateUrl}>
      <DomainInput
        value={domain}
        onChange={setDomain}
      />
      <PathInput
        value={path}
        onChange={setPath}
      />
      <MethodSelect
        value={method}
        onChange={setMethod}
      />
      
        <BodyInput
          value={body}
          onChange={setBody}
        />
      
      <div data-testid="message">{message}</div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UrlValidator;
