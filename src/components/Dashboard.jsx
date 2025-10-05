import { useEffect, useState } from "react";
import TestCaseForm from "./TestCaseForm";
import TestCaseList from "./TestCaseList";
import { api, setAuthToken } from "../api";

export default function Dashboard() {
  const [testCases, setTestCases] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      fetchTestCases();
    }
  }, [token]);

  const fetchTestCases = async () => {
    try {
      const res = await api.get("/testcases");
      setTestCases(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTestCase = (newTestCase) => {
    setTestCases([newTestCase, ...testCases]);
  };

  const handleDeleteTestCase = async (id) => {
    try {
      await api.delete(`/testcases/${id}`);
      setTestCases(testCases.filter(tc => tc._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">QA Automation Helper Dashboard</h2>
      <TestCaseForm onAddTestCase={handleAddTestCase} />
      <TestCaseList testCases={testCases} onDeleteTestCase={handleDeleteTestCase} />
    </div>
  );
}
