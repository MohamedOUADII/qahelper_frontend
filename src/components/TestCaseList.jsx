export default function TestCaseList({ testCases, onDeleteTestCase }) {
  return (
    <div>
      {testCases.length === 0 ? (
        <p>No test cases generated yet.</p>
      ) : (
        testCases.map(tc => (
          <div key={tc._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{tc.title}</h5>
              <p><strong>Framework:</strong> {tc.framework}</p>
              <p><strong>Language:</strong> {tc.language}</p>
              <p><strong>Input:</strong></p>
              <pre className="bg-light p-2" style={{ overflowX: "auto" }}>
                {tc.inputText}
              </pre>
              <p><strong>Output:</strong></p>
              <pre className="bg-light p-2" style={{ overflowX: "auto" }}>
                {tc.generatedCode}
              </pre>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteTestCase(tc._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
