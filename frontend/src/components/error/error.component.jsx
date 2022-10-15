import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const CustomError = ({message, classes, dismiss}) => {
  const [show, setShow] = useState(true);


  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} className={classes} dismissible = {dismiss}>
        <Alert.Heading>Oops! Something went wrong</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
}

export default CustomError;

