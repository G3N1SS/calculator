import './calculator__btn.css'

export default function CalculatorBtn ({text}) {
  return(
    <button className={`calculator__btn ${(
      text === "/" ? 'calculator__btn_blue'
      :
      text === "*" ? 'calculator__btn_blue'
      :
      text === "-" ? 'calculator__btn_blue'
      :
      text === "+" ? 'calculator__btn_blue'
      :
      text === "=" && 'calculator__btn_blue'
    )}`
    }>{text}</button>
  )
}