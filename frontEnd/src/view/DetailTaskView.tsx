import { useNavigate, useParams } from "react-router-dom";
import getTask from "../services/getTask";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import formatDate from "../utils/formatDate";
import task from "../utils/dataResponse";

export default function DetailTaskView (){
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [taskData, setTaskData] = useState<task | undefined>(undefined);
  
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
    return(
        <div>
            <div className="bg-white shadow rounded-lg p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{taskData?.title}</h2>
                                <p className="text-sm text-gray-500">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${taskData?.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {taskData?.completed ? 'Completada' : 'Pendiente'}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500">{formatDate(taskData!.createdAt)} </p>
                                <div className="mt-2">
                                    <button className="text-blue-600 hover:text-blue-900 mr-2">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </div>
                            </div>
        </div>
    )
}
