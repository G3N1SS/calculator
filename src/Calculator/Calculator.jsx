import CalculatorBtn from "../CalculatorBtn/CalculatorBtn.jsx";
import "./calculator.css";
export default function Calculator({ loggedIn }) {
  return (
    <div className={`calculator ${loggedIn && "calculator_active"}`}>
      <p className="calculator__exercise">6000/2+3227*2</p>
      <h2 className="calculator__res">=12,454</h2>
      <form action="" className="calculator__btns">
      <CalculatorBtn text={"Ac"} />
      <CalculatorBtn text={"C"} />
      <CalculatorBtn text={"/"} />
      <CalculatorBtn text={"*"} />
        <div className="calculator__nums">
          {(function () {
            let result = [];
            for (let i = 9; i >= 0; i--) {
              result.push(<CalculatorBtn key={i} text={i} />);
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
