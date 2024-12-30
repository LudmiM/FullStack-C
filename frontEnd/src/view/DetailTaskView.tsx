import { useParams } from "react-router-dom";
import getTask from "../services/getTask";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import formatDate from "../utils/formatDate";
import task from "../utils/dataResponse";
import Back from "../components/back";

export default function DetailTaskView() {
  const { id } = useParams<{ id: string }>();
  const [taskData, setTaskData] = useState<task | undefined>(undefined);

  useEffect(() => {
    const getTaskForEdit = async () => {
      if (id) {
        try {
          const data = await getTask(id);
          setTaskData(data?.data);
        } catch (error) {
          toast.error("¡Ocurrió un error al obtener los datos!");
          console.error("Error al obtener los datos de la tarea:", error);
        }
      }
    };

    getTaskForEdit();
  }, [id]);

  return (
    <>
      <Back />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900">{taskData?.title}</h2>
          <p className="mt-2 text-sm text-gray-500">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${taskData?.completed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
            >
              {taskData?.completed ? "Completada" : "Pendiente"}
            </span>
          </p>

          <p className="mt-2 text-sm text-gray-500">{taskData ? formatDate(taskData.createdAt) : ""}</p>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-800">Descripción</h3>
            <p className="text-sm text-gray-600 mt-2">{taskData?.description || "No hay descripción disponible."}</p>
          </div>
        </div>
      </div>
    </>
  );
}
