export default function FormButton({ text, onClick }) {
    return (
        <button className="form-button" onClick={onClick}>{text}</button>
    );
}