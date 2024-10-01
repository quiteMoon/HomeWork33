import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
            <h1>404. NOT FOUND</h1>
            <Link to="/">
                <Button variant="contained">Go home</Button>
            </Link>
        </div>
    );
}

export default NotFoundPage;
