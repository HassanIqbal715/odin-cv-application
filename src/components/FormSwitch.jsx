export default function FormSwitch({ text, handleClick, active }) {
    return (
        <div className="input-container">
            <span className="input-text">{text}</span>
            <input type="checkbox" hidden />
            <button className="form-switch" onClick={handleClick}>
                <div className={`form-switch-slider ${active ? "active" : ""}`}>
                </div>
                <div className={`form-switch-ball ${active ? "active" : ""}`}>
                </div>
            </button>
        </div>
    );
}