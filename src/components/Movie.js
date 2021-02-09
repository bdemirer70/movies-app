import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from 'reactstrap';
import ReactTooltip from 'react-tooltip';


import "./../App.css"

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    useEffect(() => {
        fetch(APIURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);



    return (

        <div className="movie-container">
            {movies.map((movie) =>
                <Card className="m-3 movie" style={{ width: '15rem' }}>
                    <CardImg data-tip={movie.overview} variant="top" src={IMGPATH + movie.poster_path} />
                    <CardBody style={{ width: '16rem' }}>
                        <ReactTooltip className="tooltip" />
                        <Container fluid={true}>
                            <Row>
                                <Col>
                                    <CardTitle className="movie-info">{movie.title}</CardTitle>
                                </Col>
                                <Col className="text-right">
                                    <span>{movie.vote_average}</span>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            )}
        </div>



    )
}

export default Movie;

