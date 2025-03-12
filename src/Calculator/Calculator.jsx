import CalculatorBtn from "../CalculatorBtn/CalculatorBtn.jsx";
import "./calculator.css";
import {useState} from "react";
export default function Calculator({ loggedIn }) {
  const [currentNum, setNum] = useState(0);
  console.log(currentNum);
  return (
    <div className={`calculator ${loggedIn && "calculator_active"}`}>
      <p className="calculator__exercise">{currentNum}</p>
      <h2 className="calculator__res">=12,454</h2>
      <form action="" className="calculator__btns">
      <CalculatorBtn text={"e"} type={'small'}/>
      <CalculatorBtn text={"μ"} type={'small'}/>
      <CalculatorBtn text={"sin"} type={'small'}/>
      <CalculatorBtn text={"deg"} type={'small'}/>
      <CalculatorBtn text={"Ac"} />
      <CalculatorBtn text={"C"} setNum={()=>setNum(0)}/>
      <CalculatorBtn text={"/"} />
      <CalculatorBtn text={"*"} />
        <div className="calculator__nums">
          {(function () {
            let result = [];
            for (let i = 9; i >= 0; i--) {
              result.push(<CalculatorBtn key={i} text={i} setNum={()=>setNum(parseInt(currentNum.toString() + i))} currentNum={currentNum} />);
            }
            return result;
          })()}
          <CalculatorBtn text={"."} />
        </div>
        <div className="calculator__side-nums">
          <CalculatorBtn text={"-"} />
          <CalculatorBtn text={"+"} />
          <CalculatorBtn text={"="} />
        </div>
      </form>
    </div>
  );
}
