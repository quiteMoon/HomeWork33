import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NewsPage() {
    const [news, setNews] = useState([]);
    const apiUrl =
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eef038525fa7401d8dfe7cf1a9006b10";

    function getNews() {
        // відправка запиту на api
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data.articles);
                console.log(data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // getNews(); не можна так писати!!!

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <h1>News Page</h1>

            <Grid container gap={4}>
                {news.map((item) => (
                    <Card xs={4} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.urlToImage}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <a href={item.url}>Learn More</a>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </>
    );
}

export default NewsPage;
