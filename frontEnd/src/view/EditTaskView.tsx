import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateEditTask from "../components/form/CreateEditTask";
import AddTask from "../utils/sendData";
import { toast } from "react-toastify";
import editTask from "../services/editTask";
import getTask from "../services/getTask";

export default function EditTaskView() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [taskData, setTaskData] = useState<AddTask | undefined>(undefined);

  useEffect(() => {
    console.log('my id is '+id)
    const getTaskForEdit = async () => {
      if (id) {
        console.log('my id is '+id)
        try {
          const data = await getTask(id);
          console.log(JSON.stringify(data?.data))
          setTaskData(data?.data);
        } catch (error) {
          toast.error("¡Ocurrió un error!");
          console.error("Error al obtener los datos del proyecto:", error);
        }
      }
    };

    getTaskForEdit();
  }, [id]);

  const handleSubmit = async (data: AddTask) => {
    if (id) {
      try {
        await editTask(id, data);
        toast.success("¡Se actualizó con éxito el proyecto!");
        navigate("/");
      } catch (error) {
        toast.error("¡Ocurrió un error!");
        console.log("Error al editar:", error);
      }
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <h1>Holiss</h1>
      <div className="w-full max-w-5xl">
        <CreateEditTask onSubmit={handleSubmit} initialData={taskData} />
      </div>
    </div>
  );
}
