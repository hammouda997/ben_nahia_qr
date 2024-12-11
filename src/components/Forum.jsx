import React, { useState } from "react";

const Forum = () => {
  const [feedback, setFeedback] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setFeedback([...feedback, input]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Feedback Forum</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Leave your feedback here..."
          rows="4"
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Submit
        </button>
      </form>
      <div>
        {feedback.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#f8f9fa",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px auto",
              width: "80%",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
