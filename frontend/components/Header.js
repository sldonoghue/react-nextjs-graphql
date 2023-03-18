import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
    
          React Store
        
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}