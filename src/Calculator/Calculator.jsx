import CalculatorBtn from "../CalculatorBtn/CalculatorBtn.jsx";
import "./calculator.css";
import { useState } from "react";
export default function Calculator({ loggedIn }) {
  const [currentNum, setNum] = useState(0);
  const [operation, setOperation] = useState("");
  const [lastNum, setLastNum] = useState(0);
  const [res, setRes] = useState(0);

  function sum() {
    setRes(currentNum + lastNum);
  }
  function sub() {
    setRes(lastNum - currentNum);
  }
  function div() {
    setRes(lastNum / currentNum);
  }
  function multiply() {
    setRes(lastNum * currentNum);
  }

  return (
    <div className={`calculator ${loggedIn && "calculator_active"}`}>
      <p className="calculator__exercise">{lastNum ? lastNum + operation : ''}{currentNum}</p>
      <h2 className="calculator__res">{res}</h2>
      <form action="" className="calculator__btns">
        <CalculatorBtn text={"e"} type={"small"} />
        <CalculatorBtn text={"μ"} type={"small"} />
        <CalculatorBtn text={"sin"} type={"small"} />
        <CalculatorBtn text={"deg"} type={"small"} />
        <CalculatorBtn text={"AC"} func={() => {setNum(0); setLastNum(0); setRes(0)}}/>
        <CalculatorBtn text={"C"} func={() => {setNum(0);}} />
        <CalculatorBtn text={"/"} func={()=> {setOperation('/'); setLastNum(currentNum); setNum(0) }} />
        <CalculatorBtn text={"*"} func={()=> {setOperation('*'); setLastNum(currentNum); setNum(0)}} />
        <div className="calculator__nums">
          {(function () {
            let result = [];
            for (let i = 9; i >= 0; i--) {
              result.push(
                <CalculatorBtn
                  key={i}
                  text={i}
                  func={() => setNum(parseInt(currentNum.toString() + i))}
                />
              );
            }
            return result;
          })()}
          <CalculatorBtn text={"."} func={() => setNum(parseInt(currentNum.toString() + '.'))}/>
        </div>
        <div className="calculator__side-nums">
          <CalculatorBtn text={"-"} func={()=> {setOperation('-'); setLastNum(currentNum); setNum(0) }}/>
          <CalculatorBtn text={"+"} func={()=> {setOperation('+'); setLastNum(currentNum); setNum(0) }}/>
          <CalculatorBtn text={"="} func={()=>{
            switch(operation){
              case '+':
                sum();
                break;
              case '-':
                sub();
                break;
              case '*':
                multiply();
                break;
              case '/':
                div();
                break;
            }
          }}/>
        </div>
      </form>
    </div>
  );
}
