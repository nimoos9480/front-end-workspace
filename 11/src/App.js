import "./App.css";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const Home = ({ list, deleteMovie }) => {
  const onClick = (event) => {
    deleteMovie(event.target.id);
  };
  return (
    <div>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.release_date}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Create = ({ createMovie }) => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setRelease_Date] = useState("");
  const onSubmit = (event) => {
    const id = event.target.id.value;
    const title = event.target.title.value;
    const genre = event.target.genre.value;
    const release_date = event.target.release_date.value;

    createMovie(id, title, genre, release_date);

    setId("");
    setTitle("");
    setGenre("");
    setRelease_Date("");

    navigate("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Create Movie</h1>
      <div>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Input movie id"
          required
        ></input>
      </div>

      <div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Input movie title"
          required
        ></input>
      </div>

      <div>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Input movie genre"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="date">
          출시일 :{" "}
          <input
            type="date"
            id="release_date"
            name="release_date"
            required
          ></input>
        </label>
      </div>
      <input type="submit" value="Add Movie" id="submit"></input>
    </form>
  );
};

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Movie 1",
      genre: "Drama",
      release_date: "2022-01-01",
    },
    {
      id: 2,
      title: "Movie 2",
      genre: "Action",
      release_date: "2022-02-01",
    },
    {
      id: 3,
      title: "Movie 3",
      genre: "Comedy",
      release_date: "2022-03-01",
    },
  ]);

  const createMovie = (id, title, genre, release_date) => {
    const newMovies = { id, title, genre, release_date };
    setMovies([...movies, newMovies]);
  };

  const deleteMovie = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">List</Link>
      </div>
      <div>
        <Link to="/create">Add New Movie</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Home list={movies} deleteMovie={deleteMovie} />}
        />
        <Route path="/create" element={<Create createMovie={createMovie} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
