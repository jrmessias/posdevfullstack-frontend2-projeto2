import Container from "./Container";
import {useParams} from "react-router-dom";

function Item({searchTerm}) {
    const params = useParams();
    const currentSearchTerm = searchTerm || params.searchTerm;

    return (
        <div>
            <Container searchTerm={currentSearchTerm}></Container>
        </div>
    )
}

export default Item;
