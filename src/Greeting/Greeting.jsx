import "./greeting.css";

export default function Greeting({ loggedIn, setLoggedIn }) {
  return (
    <div className={`greeting ${loggedIn && "greeting_active"}`}>
      <h1 className="greeting__title">Hi, that's my "Calculator-App"</h1>
      <p className="greeting__subtitle">Wanna enter?</p>
      <button
        className={`greeting__btn ${loggedIn && "greeting__btn_active"}`}
        onClick={() => setLoggedIn(true)}
      >
        Enter
      </button>
    </div>
  );
}
