import React, { useState } from 'react';
import DomainInput from './components/domain';
import PathInput from './components/path';
import MethodSelect from './components/method';
import BodyInput from './components/body';

function UrlValidator() {
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const validateUrl = (event) => {
    event.preventDefault();
    const domainRegex = /^([a-z0-9-]+\.)+[a-z]{2,}$/i;
    if (!domainRegex.test(domain)) {
      setMessage('Invalid URL! Please recheck your URL');
      return;
    }
    let formattedPath = '';
    if (path) {
      formattedPath = '/' + path.replace(' ', '/');
    }
    let url = `${domain}${formattedPath}`;

    if (['GET'].includes(method) && !body) {
      setMessage(url);
      return;
    }

    if (['POST', 'PUT'].includes(method) && !isValidJson(body)) {
      setMessage('Error in the body.');
      return;
    }
    if (!isValidJson(body)) {
      setMessage('Error in the Body of the Query Params');
      return;
    }


    if (method === 'GET' && body) {
      const queryParams = new URLSearchParams(JSON.parse(body));
      url = `${url}?${queryParams.toString()}`;
    }

    setMessage(url);
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
      {['POST', 'PUT','GET'].includes(method) && (
        <BodyInput
          value={body}
          onChange={setBody}
        />
      )}
        
      <button type="submit">Submit</button>
      <div data-testid="message">{message}</div>
    </form>
  );
}

export default UrlValidator;
