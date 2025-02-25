import { nanoid } from "nanoid";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskParams } from "./types/Task";
import TaskBoard from "./TaskBoard";
import { useState, FormEvent } from "react";
import { Form, Button, Container } from "react-bootstrap";

const softwareDevelopmentTasks: TaskParams[] = [
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
    status: "In Progress",
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
    status: "To Do",
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

const initialTask: TaskParams[] = [];
softwareDevelopmentTasks.forEach((task) => {
  initialTask.push({
    ...task,
    id: nanoid(),
  });
});

function App() {
  const [tasks, setTasks] = useState<TaskParams[]>(initialTask);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const task: TaskParams = {
      ...newTask,
      id: nanoid(),
      status: "To Do",
    };
    setTasks([...tasks, task]);
    setNewTask({ title: "", description: "", assignee: "" });
  };

  return (
    <>
      <h1 className="text-center mt-5">Task Manager</h1>
      <Container className="mb-4">
        <Form onSubmit={handleSubmit} className="newTaskInput">
          <Form.Group className="mb-3">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Enter task description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assignee</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter assignee name"
              value={newTask.assignee}
              onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </Container>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
