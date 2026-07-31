import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllow, setNumbersAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllow) {
      str += "0123456789";
    }

    if (charAllow) {
      str += "!@#$%^&*-+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let randomCharFromStr = Math.floor(Math.random() * str.length + 1);
      // randomCharFromStr = floor(0.78 * 52  + 1)
      // = floor(0.78 * 52 + 1;)
      // =  floor(41.56)
      // floor(41.56) = 41
      pass += str.charAt(randomCharFromStr);
      // pass = str.charAt(41) = p;
    }

    setPassword(pass);
  }, [length, numbersAllow, charAllow, setPassword]);

  // passwordGenerator();

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto h-60 shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 font-normal">
        <h1 className="text-4xl text-center text-white my-10 mx-10 p-2">
          Password Generator
        </h1>
        <div className="flex shadow overflow-hidden m-10 bg-white rounded-xl text-orange-500">
          <input
            name="password"
            type="text"
            value={password}
            className="outline-none w-full py-1 px-2"
            placeholder="Password"
            readOnly
            ref = {passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-900" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ml-2">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numbersAllow}
              onChange={() => {
                setNumbersAllow((prev) => {
                  return !prev;
                });
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 ml-2">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => {
                  return !prev;
                });
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
