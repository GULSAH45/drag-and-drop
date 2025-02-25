import { Row, Col } from "react-bootstrap";
import { Droppable } from "@hello-pangea/dnd";
import { TaskParams } from "./types/Task";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  status: string;
  tasks: TaskParams[]; // task yerine tasks olarak güncellendi
}

function TaskColumn({ status, tasks }: TaskColumnProps) {
  return (
    <Row className=" justify-content-between">
      <Col className="task-column" md={4} sm={6}>
        <h4>{status}</h4>
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-column"
            >
              {tasks.map((task, index) => (
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
