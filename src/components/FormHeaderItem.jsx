export default function FormHeaderItem(props) {
    return (
        <button className={`item ${props.active ? "active" : ""}`} 
        onClick={props.onClick} style={props.style}>
            <img className={`item-icon ${props.active ? "active" : ""}`} 
            src={props.imageLink}></img>
            <span className="item-text">{props.text}</span>
        </button>
    );
}