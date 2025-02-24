import React from "react";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Container, Row } from "react-bootstrap";
import TaskColumn from "./TaskColumn";
import { TaskParams } from "./types/Task";

interface TaskBoardProps {
  tasks: TaskParams[];
  setTasks: React.Dispatch<React.SetStateAction<TaskParams[]>>;
}

const statuses = ["To Do", "In Progress", "Done"];

function TaskBoard({ tasks, setTasks }: TaskBoardProps) {
  const onDragEnd = (result: DropResult) => {
    console.log("Drag Result:", result);
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTask = tasks.find((task) => task.id === draggableId);
    if (!draggedTask) {
      console.error(`Görev bulunamadı: ${draggableId}`);
      return;
    }

    const newStatus = statuses.includes(
      destination.droppableId as TaskParams["status"]
    )
      ? (destination.droppableId as TaskParams["status"])
      : draggedTask.status;

    const updatedTask: Task = { ...draggedTask, status: newStatus };

    const newTasks = tasks.filter((task) => task.id !== draggableId);
    const destinationTasks = newTasks.filter(
      (task) => task.status === newStatus
    );

    let insertAt = 0;
    if (destination.index === 0) {
      const firstTaskInDestination = newTasks.find(
        (task) => task.status === newStatus
      );
      insertAt = firstTaskInDestination
        ? newTasks.indexOf(firstTaskInDestination)
        : newTasks.length;
    } else {
      const prevTaskInDestination = destinationTasks[destination.index - 1];
      insertAt = prevTaskInDestination
        ? newTasks.indexOf(prevTaskInDestination) + 1
        : newTasks.length;
    }

    newTasks.splice(insertAt, 0, updatedTask);
    setTasks([...newTasks]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Row>
          {statuses.map((status) => (
            <TaskColumn
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
            />
          ))}
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default TaskBoard;
