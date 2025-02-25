import { Card } from "react-bootstrap";
import { TaskParams } from "./types/Task";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  task: TaskParams;
  index: number;
}

function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <Card
          className="task-card mb-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card.Body>
            <Card.Title className="border-bottom pb-2">{task.title}</Card.Title>
            <Card.Text className="task-description">{task.description}</Card.Text>
            <Card.Subtitle className="text-muted mt-2">
              Atanan: {task.assignee}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
}

export default TaskCard;
