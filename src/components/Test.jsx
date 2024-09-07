import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Test = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div>
      <p>Language: {currentLanguage}</p>
      <button onClick={changeLanguage}>Change Language</button>
      <h1 className="text-bold">Hi A</h1>
      <h1 className="text-bold">The Notorious</h1>
    </div>
  );
};

export default Test;
