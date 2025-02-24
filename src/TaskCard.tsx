import { Card } from "react-bootstrap";
import { TaskParams } from "./types/Task";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  task: TaskParams;
  index: number;
}

function TaskCard({ task, index }: TaskCardProps) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Card
            style={{ width: "18rem" }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Card.Subtitle>Atanan: {task.assignee}</Card.Subtitle>
            </Card.Body>
          </Card>
        )}
      </Draggable>
    </>
  );
}

export default TaskCard;
