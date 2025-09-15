import './App.css'

function App() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to My Landing Page</h1>
        <p>A simple, clean introduction to something awesome</p>
      </header>
      <main>
        <section>
          <h2>What We Offer</h2>
          <div className="features">
            <div className="feature">
              <h3>Feature 1</h3>
              <p>Exciting description of the first feature</p>
            </div>
            <div className="feature">
              <h3>Feature 2</h3>
              <p>Amazing details about the second feature</p>
            </div>
            <div className="feature">
              <h3>Feature 3</h3>
              <p>Incredible information about the third feature</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Get Started</h2>
          <button>Learn More</button>
        </section>
      </main>
      <footer>
        <p>© 2025 My Awesome Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
