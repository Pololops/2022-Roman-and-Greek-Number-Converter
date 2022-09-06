import React, { useEffect } from 'react';
import "./style.scss";

interface Props {
    resultText: string;
}

export default function ResultMessage({resultText}: Props) {
  return (
    <p className="result" data-testid="result">{resultText}</p>
  );
}
