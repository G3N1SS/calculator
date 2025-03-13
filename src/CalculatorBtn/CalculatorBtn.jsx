import "./calculator__btn.css";

export default function CalculatorBtn({ text, type, func }) {
  return (
    <button
      className={`calculator__btn ${
        text === "/"
          ? "calculator__btn_blue"
          : text === "*"
          ? "calculator__btn_blue"
          : text === "-"
          ? "calculator__btn_blue"
          : text === "+"
          ? "calculator__btn_blue"
          : text === "=" && "calculator__btn_blue"
      }
    ${type === "small" && "calculator__btn_small"}`}
      type={"button"}
      onClick={() => func()}
    >
      {text}
    </button>
  );
}
