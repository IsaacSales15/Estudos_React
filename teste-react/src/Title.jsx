import { useState } from "react";

function Title({ paragraph, color }) {
  const urlimg = "https://avatars.githubusercontent.com/u/11573039?v=4";
  const [text, setText] = useState("Título inicial");
  const [inputText, setInputText] = useState("");

  function clicked() {
    setText(inputText);
  }

  return (
    <div>
      <Menu />
      <h1 style={{ color: color }}>{text}</h1>
      <img width={100} src={urlimg} alt="Profile" />
      {paragraph ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
          modi similique debitis nisi optio temporibus totam id, quis odio
          dignissimos. Repellat voluptate consequuntur voluptatum vel nobis
          corporis deserunt itaque.
        </p>
      ) : (
        <p>Nada</p>
      )}
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
      />
      <button onClick={clicked}>Mudar</button>
    </div>
  );
}

export default Title;
