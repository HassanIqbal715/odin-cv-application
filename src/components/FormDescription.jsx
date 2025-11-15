export default function FormDescription({ text, type, setData, id, value="" }) {
    return (
        <div className="input-container">
            <span className="input-text">{text}</span>
            <textarea className="input-area" type={type} onChange={
                (e) => setData(id, e.target.value)} value={value}></textarea>
        </div>
    );
}