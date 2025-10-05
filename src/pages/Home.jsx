import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
    const token = localStorage.getItem("token");
    
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <h1 className="display-4">QA Automation Helper</h1>
        <p className="lead">Generate automated test cases instantly for multiple frameworks and languages.</p>
        {!token ? (
          <>
            <Link to="/register" className="btn btn-light btn-lg mx-2">Get Started</Link>
            <Link to="/login" className="btn btn-outline-light btn-lg mx-2">Login</Link>
          </>
        ) : (
          <Link to="/dashboard" className="btn btn-light btn-lg mx-2">Go to Dashboard</Link>
        )}
      </header>

      <section className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Multiple Frameworks</h5>
                <p className="card-text">Generate tests for Playwright, Cypress, Selenium (Java), RobotFramework (Python), Puppeteer, and WebDriverIO.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Custom Test Cases</h5>
                <p className="card-text">Describe your test scenario and get a ready-to-use automation script instantly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Boost QA Productivity</h5>
                <p className="card-text">Save time and effort by automatically generating high-quality automation scripts tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
