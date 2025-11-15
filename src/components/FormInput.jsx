export default function FormInput({ type, text, setData, id, value="" }) {
    return (
        <div className="input-container">
            <span className="input-text">{text}</span>
            <input className="input-box" type={type} onChange={
                (e) => setData(id, e.target.value)} value={value} />
        </div>
    );
}