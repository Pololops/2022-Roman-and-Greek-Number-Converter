import React, { useEffect, useState } from 'react';
import "./style.scss";

interface Props {
    resultText: string;
    isDisplay: boolean;
}

export default function ResultMessage({resultText, isDisplay}: Props) {
  return (
    <p className={(isDisplay) ? 'result' : 'result hide'} data-testid="result">{resultText}</p>
  );
}
