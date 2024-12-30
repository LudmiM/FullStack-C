import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateEditTask from "../components/form/CreateEditTask";
import AddTask from "../utils/sendData";
import { toast } from "react-toastify";
import editTask from "../services/editTask";
import getTask from "../services/getTask";
import Back from "../components/back";

export default function EditTaskView() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [taskData, setTaskData] = useState<AddTask | undefined>(undefined);

  useEffect(() => {
    const getTaskForEdit = async () => {
      if (id) {
        try {
          const data = await getTask(id);
          setTaskData(data?.data);
        } catch (error) {
          toast.error("¡Ocurrió un error!");
          console.error("Error al obtener los datos de la tarea:", error);
        }
      }
    };

    getTaskForEdit();
  }, [id]);

  const handleSubmit = async (data: AddTask) => {
    if (id) {
      try {
        await editTask(id, data);
        toast.success("¡Se actualizó con éxito la tarea!");
        navigate("/");
      } catch (error) {
        toast.error("¡Ocurrió un error!");
        console.log("Error al editar:", error);
      }
    }
  };
  console.log("taskData actualizado:", JSON.stringify(taskData));
  return (
    <div className='w-full flex flex-col items-center'>
      <Back/>
      <div className="w-full max-w-5xl  my-8">
        <CreateEditTask onSubmit={handleSubmit} initialData={taskData} />
      </div>
    </div>
  );
}
