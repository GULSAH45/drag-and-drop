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
    const { destination, source, draggableId } = result;

    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    const draggedTask = tasks.find((task) => task.id === draggableId);
    if (!draggedTask) {
      console.error(`Görev bulunamadı: ${draggableId}`);
      return;
    }

    // Task'ı yeni statuse taşı
    const newTasks = tasks.map(task => 
      task.id === draggableId 
        ? { ...task, status: destination.droppableId }
        : task
    );
    
    setTasks(newTasks);
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
