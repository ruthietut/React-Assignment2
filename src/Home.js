import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Home</h1>
        <h1>
          <Link to="/Users">Users</Link>
        </h1>
      </div>
      <br />
      <main className="content">
        <h3>Welcome to the homepage!</h3>
        <p>Click on the users at the top of the page to access the users log.</p>
      </main>
    </div>
  );
}

export default Home;
