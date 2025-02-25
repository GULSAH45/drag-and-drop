import { Col } from "react-bootstrap";
import { Droppable } from "@hello-pangea/dnd";
import { TaskParams } from "./types/Task";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  status: string;
  tasks: TaskParams[];
}

function TaskColumn({ status, tasks }: TaskColumnProps) {
  return (
    <Col className="task-column p-3" md={4}>
      <h4 className="text-center mb-4">{status}</h4>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
  );
}

export default TaskColumn;
