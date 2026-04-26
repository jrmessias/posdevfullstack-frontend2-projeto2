// src/components/SuggestedContent.js
import { useNavigate } from "react-router-dom";
const suggestedTerms = [
    { label: "Batman", term: "batman" },
    { label: "007", term: "007" },
    { label: "Spider-Man", term: "spiderman" },
    { label: "Iron Man", term: "ironman" },
    { label: "Avengers", term: "avengers" }
];

function SuggestedContent() {
    const navigate = useNavigate();
    const handleSearch = (searchTerm) => {
        if (!searchTerm.trim()) return;
        navigate(`/search/${encodeURIComponent(searchTerm)}`);
    };
    return (
        <section className="suggested-content">
            <h2>Conteúdos sugeridos</h2>
            <div className="suggested-buttons">
                {suggestedTerms.map((item) => (
                    <button
                        key={item.term}
                        className="suggested-button"
                        onClick={() => handleSearch(item.term)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default SuggestedContent;
