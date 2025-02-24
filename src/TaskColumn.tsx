import { Row, Col } from "react-bootstrap";
import { Droppable } from "@hello-pangea/dnd";
import { TaskParams } from "./types/Task";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  status: string;
  task: TaskParams[];
}

function TaskColumn({ status, task }: TaskColumnProps) {
  return (
    <Row>
      <Col>
        <h4>{status}</h4>
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ minHeight: "400px" }}
            >
              {task.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
    </Row>
  );
}

export default TaskColumn;
