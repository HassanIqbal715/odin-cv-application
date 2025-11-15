import CVListItem from "./CVListItem";

export default function CVList({ itemsList, preText }) {
    return (
        <ul className="cv-text cv-list">
            {itemsList.map((item, i) => {
                if (item.trim() != "") {
                    return (
                        <CVListItem key={i} text={item} preText={preText} />
                    );
                }
            })}
        </ul>
    );
}