import React from 'react';
import { Interface } from 'readline';
import "./style.scss";

interface Props {
    messageText: string;
}

export default function Message({messageText}: Props) {
  return (
    <p className="message">
      {messageText}
    </p>
  );
}
