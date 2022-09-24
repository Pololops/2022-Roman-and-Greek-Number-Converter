import React from 'react';
import Radio from "./Radio";
import "./style.scss";

interface Props {
  activeLang: string;
  languages: string[];
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Toogle({ activeLang, languages, onRadioChange }: Props) {
  return (
    <div className="languages-selector">
      {languages.map((language) => (
        <Radio
          key={language}
          name="language"
          className={(activeLang === language) ? 'radio active' : 'radio'}
          language={language}
          onRadioChange={onRadioChange}
          checked={activeLang === language}
         />
      ))}
    </div>
  );
}
