import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import styled from "styled-components"
const movies = [
  {
    Title: "Dragon Ball Super: Broly",
    Year: "2018",
    Rated: "N/A",
    Released: "16 Jan 2019",
    Runtime: "100 min",
    Genre: "Animation, Action, Fantasy",
    Director: "Tatsuya Nagamine",
    Writer: "Akira Toriyama (character creator), Akira Toriyama (screenplay)",
    Actors: "Sean Schemmel, Christopher Sabat, Vic Mignogna, Chris Ayres",
    Plot:
      "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they've faced before.",
    Language: "Japanese",
    Country: "Japan",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg0YzM2NzMtOGM1OC00MzlkLWI1NDEtYTI2MGZkZGJlYWQ0XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "9.2/10" }],
    Metascore: "N/A",
    imdbRating: "9.2",
    imdbVotes: "2,425",
    imdbID: "tt7961060",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Dragon Ball Z: Fusion Reborn",
    Year: "1995",
    Rated: "PG",
    Released: "04 Mar 1995",
    Runtime: "51 min",
    Genre: "Animation, Action, Sci-Fi",
    Director: "Shigeyasu Yamauchi",
    Writer:
      'Akira Toriyama (original manga "Dragon Ball"), Takao Koyama (screenplay)',
    Actors: "Masako Nozawa, Ryô Horikawa, Takeshi Kusao, Daisuke Gôri",
    Plot:
      "When a worker at King Yemma's spiritual check-in station is accidentally covered in spiritual waste, he is transformed into a powerful monster named Janemba, who destroys the barrier between the real world and Other World, allowing the dead to walk the Earth. As the living Z Fighters fend off the dead, it is up to Goku, Pikkon, and Vegeta to stop Janemba.",
    Language: "Japanese",
    Country: "Japan",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWRiNDJlNzAtZjk3ZC00NDhjLTlmNzMtNTJiNDM2NDU3NjI2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "7.8/10" }],
    Metascore: "N/A",
    imdbRating: "7.8",
    imdbVotes: "8,027",
    imdbID: "tt0142236",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Dragon Ball Z: Bardock - The Father of Goku",
    Year: "1990",
    Rated: "Not Rated",
    Released: "09 Oct 2001",
    Runtime: "48 min",
    Genre: "Animation, Drama, Fantasy, Sci-Fi",
    Director: "Mitsuo Hashimoto, Daisuke Nishio",
    Writer:
      'Akira Toriyama (manga "Dragon Ball"), Takao Koyama (scenario), Katsuyuki Sumizawa (scenario)',
    Actors: "Masako Nozawa, Kazuyuki Sogabe, Yûko Mita, Takeshi Watabe",
    Plot:
      "A prequel to the original Dragonball series, this TV movie tells the story of Son Goku's father Bardock and his futile attempt to stop Freeza from destroying his planet Vegeta. It also shows how little Kakarotto (Son Goku) ends up on earth!",
    Language: "Japanese",
    Country: "Japan",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzFkMWM1M2YtYTMwYy00YWZhLWE0ZjktZjhiNTMwMjQ2ZjU5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.0/10" }],
    Metascore: "N/A",
    imdbRating: "8.0",
    imdbVotes: "4,047",
    imdbID: "tt0142245",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Dragon Ball Z: The History of Trunks",
    Year: "1993",
    Rated: "NOT RATED",
    Released: "30 Jan 2001",
    Runtime: "47 min",
    Genre: "Animation, Action, Adventure, Drama, Fantasy, Sci-Fi",
    Director: "Yoshihiro Ueda, Daisuke Nishio",
    Writer:
      "Akira Toriyama (original manga), Hiroshi Toda (screenplay), Neil Bligh",
    Actors: "Masako Nozawa, Mayumi Tanaka, Hiromi Tsuru, Ryô Horikawa",
    Plot:
      'This TV Movie tells the story of "Future" Trunks; that is, the Trunks from the alternate future where Goku has died and Androids terrorize the Earth. Amongst other things, it shows how Gohan trained Trunks, their fights with the Androids, and what inspired Trunks to go time traveling.',
    Language: "Japanese",
    Country: "Japan",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGIwYmQyMmItMmJlZS00OGU1LTkwNmQtZjlhYTdhMTUzYmE3XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.0/10" }],
    Metascore: "N/A",
    imdbRating: "8.0",
    imdbVotes: "4,034",
    imdbID: "tt0142247",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  }
]

const Container = styled.div`
display:flex;
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: movies
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(evt){
    evt.preventDefault();
    const query = this.doSearch(evt.target.value);
    console.log(evt.target.value)
    this.setState({movies:query})

  }
  doSearch(value){
    return movies.filter(item =>{
      const title = item.Title.toLowerCase();
      return title.includes(value.toLowerCase());
    })
  }

  render(){
    return (
    <section>
      <input onChange={this.handleEvent} type="text" placeholder="Filter"/>
      <Card items={this.state.movies}/>
    </section>
    )
  }
}
const root = document.getElementById("app");
ReactDOM.render(<App />, root )