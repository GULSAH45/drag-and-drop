import { nanoid } from "nanoid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { taskParams } from "./types/Task";
import TaskBoard from "./TaskBoard";
import { useState } from "react";

const softwareDevelopmentTasks: taskParams[] = [
  {
    title: "Homepage Design",
    description: "Create a responsive homepage layout",
    status: "To Do",
    assignee: "Alice",
  },
  {
    title: "API Integration",
    description: "Connect frontend with backend API",
    status: "In Progress",
    assignee: "Bob",
  },
  {
    title: "Bug Fixing",
    description: "Resolve layout issues on mobile view",
    status: "In Review",
    assignee: "Charlie",
  },
  {
    title: "Deployment",
    description: "Deploy the app to production",
    status: "Done",
    assignee: "David",
  },
  {
    title: "User Authentication",
    description: "Implement login and registration",
    status: "To Do",
    assignee: "Eve",
  },
  {
    title: "Database Optimization",
    description: "Improve query performance",
    status: "In Progress",
    assignee: "Frank",
  },
  {
    title: "UI Testing",
    description: "Test UI components for usability",
    status: "In Review",
    assignee: "Grace",
  },
  {
    title: "SEO Improvements",
    description: "Optimize website for search engines",
    status: "To Do",
    assignee: "Hank",
  },
  {
    title: "Content Update",
    description: "Update blog and landing page content",
    status: "In Progress",
    assignee: "Ivy",
  },
  {
    title: "Security Audit",
    description: "Check vulnerabilities and apply patches",
    status: "Done",
    assignee: "Jack",
  },
];

const initialTask: taskParams[] = [];
softwareDevelopmentTasks.forEach((task) => {
  initialTask.push({
    ...task,
    id: nanoid(),
  });
});

function App() {
  const [task, setTask] = useState<taskParams[]>(initialTask);
  return (
    <>
      <h1 className="text-center">Task Manager</h1>
      <TaskBoard task={task} setTask={setTask} />
    </>
  );
}

export default App;
