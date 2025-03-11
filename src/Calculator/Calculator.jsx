import CalculatorBtn from "../CalculatorBtn/CalculatorBtn.jsx";
import './calculator.css'
export default function Calculator({loggedIn}) {
  return (
    <div className={`calculator ${loggedIn && 'calculator_active'}`}>
      <p className="calculator__nums"></p>
      <h2 className="calculator__res"></h2>
      <form action="" className="calculator__btns">
        {(function () {
          let result = [];
          for (let i = 9; i >= 0; i--) {
            result.push(
                <CalculatorBtn
                    key={i}
                    text={i}
                />
            );
          }
          return result;
        })()}
      </form>
    </div>
  )
}