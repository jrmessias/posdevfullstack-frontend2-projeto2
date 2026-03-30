import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Form() {
    const [searchEntry, setSearchEntry] = useState('');
    const navigate = useNavigate();

    function updateSearchInput(input){
        setSearchEntry(input.target.value);
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            const query = searchEntry.trim();

            if (!query) {
                return;
            }

            navigate(`/search/${encodeURIComponent(query)}`);
        }} className="form-search">
            <input type="text" name="search" placeholder="Pesquisar" onChange={updateSearchInput} value={searchEntry}/>
            <button type="submit" disabled={!searchEntry.trim()} className={`form-button-search ${searchEntry.trim() ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     fillRule="evenodd">
                    <path d="m21 21-4.34-4.34"/>
                    <circle cx="11" cy="11" r="8"/>
                </svg>
            </button>
        </form>
    );
}

export default Form;
