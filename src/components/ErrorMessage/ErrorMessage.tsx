import React from 'react';
import "./style.scss";

interface Props {
    messageText: string;
}

export default function ErrorMessage({messageText}: Props) {
  return (
    <p className="error-message" data-testid="error-message">{messageText}</p>
  );
}
