import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Application() {
  const [task, setTask] = useState([
    { description: "something" },
    { description: "something else" },
  ]);

  return (
    <ul>
      {task.map((t, index) => (
        <li key={index}>{t.description}</li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById("app")).render(<Application />);
