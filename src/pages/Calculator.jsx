import React from "react";
import PageTitle from "../components/PageTitle";
export default function Calculator() {
  const [displayText, setDisplayText] = React.useState("0");
  const handleButtonClick = (item) => {
    switch (item) {
      case "C":
        setDisplayText("0");
        break;
      case "Del":
        setDisplayText((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        break;
      case "=":
        setDisplayText((prev) => {
          try {
            return !prev ? "0" : String(eval(prev.replace("^", "**")));
          } catch (error) {
            return "Error";
          }
        });
        break;
      default:
        setDisplayText((prev) => {
          if (prev === "0" || prev === "Error" || prev === "Infinity") {
            if (operatorList.includes(item)) {
              return prev + item;
            } else {
              return item;
            }
          } else {
            if (
              operatorList.includes(item) &&
              operatorList.includes(prev[prev.length - 1])
            ) {
              return prev.slice(0, -1) + item;
            } else {
              return prev + item;
            }
          }
        });
        break;
    }
  };
  return (
    <>
      <PageTitle title="Calculator" />
      <div className="flex flex-col w-full min-h-screen justify-center items-center">
        <div className="w-[400px] flex flex-col p-10 bg-slate-300 border-2 rounded-xl">
          <div className="w-full rounded-md my-3">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick("=");
                }
              }}
              onChange={(e) => setDisplayText(e.target.value)}
              autoFocus
              className="font-[Poppins] w-full h-14 p-4 bg-black text-white rounded-md text-right"
              value={displayText}
            />
          </div>
          <div className="w-full grid grid-cols-4 gap-2">
            {buttonList.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => {
                    handleButtonClick(item);
                  }}
                  className={`
                    flex justify-center items-center p-2 border-2 rounded-lg text-slate-900 hover:bg-slate-400 shadow-md
                    ${item === "C" ? "bg-amber-400" : ""}
                    ${item === "Del" ? "bg-amber-400" : ""}
                    ${item === "=" ? "bg-green-400 hover:bg-green-300" : ""}
                    ${item === "0" ? "col-span-3" : ""}
                    `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const buttonList = [
  "C",
  "Del",
  ".",
  "%",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "(",
  ")",
  "^",
  "+",
  "0",
  "=",
];

const operatorList = ["+", "-", "*", "/", "%", ".", "^"];
