import { useState } from "react";
import { api } from "../api";

export default function TestCaseForm({ onAddTestCase }) {
  const [title, setTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [framework, setFramework] = useState("playwright");
  const [loading, setLoading] = useState(false);

  const frameworks = [
    { name: "Playwright", value: "playwright" },
    { name: "Cypress", value: "cypress" },
    { name: "Selenium (Java)", value: "selenium" },
    { name: "RobotFramework (Python)", value: "robotframework" },
    { name: "Puppeteer", value: "puppeteer" },
    { name: "WebDriverIO", value: "webdriverio" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/testcases", { title, inputText, framework });
      onAddTestCase(res.data);
      setTitle("");
      setInputText("");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Test Case Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Test Case Description</label>
        <textarea
          className="form-control"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Framework</label>
        <select
          className="form-select"
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
        >
          {frameworks.map(f => (
            <option key={f.value} value={f.value}>{f.name}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Generating..." : "Generate Test Case"}
      </button>
    </form>
  );
}
