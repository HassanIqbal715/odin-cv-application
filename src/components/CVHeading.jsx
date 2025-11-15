export default function CVHeading({ text }) {
    return (
        <div className="section-heading">
            <div className="line"></div>
            <h2 className="heading-text">{text}</h2>
            <div className="line"></div>
        </div>
    );
}