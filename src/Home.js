import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="Header">
        
        <h1>Home</h1>
        <h1><Link to="/Users">Users</Link></h1>
        
      </div>
      <br/>

      <main className="content">
        <h2>Welcome to the homepage!</h2>
        <p>Navigate to the users to view our users log</p>
      </main>
    </div>
  );
}

export default Home;
