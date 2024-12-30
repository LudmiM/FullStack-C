import { useEffect, useState } from 'react';
import fetchData from './../services/getAll';
import { toast } from 'react-toastify';
import task from '../utils/dataResponse';
import formatDate from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { IoAdd } from 'react-icons/io5';
export default function ListTaskView() {

    const [tasks, setTasks] = useState<task[]>([]);;

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await fetchData();
                setTasks(data);
            } catch (err) {
                toast.error("¡Ocurrió un error al intentar obtener los datos!");
                console.log('Error al obtener las tareas' + err);
            }
        }

        getTasks();
    }, []);

    return (

        <div className="container mx-auto px-4 py-6">
            <Link to="/task/create">
                <button type="submit" className="button-custom generic-flex">
                    <IoAdd size={24} />
                    <span className="hidden lg:block">Add project</span>
                </button>
            </Link>
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <div className="hidden sm:block">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Título</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Estado</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Fecha de Creación</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${task.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {task.completed ? 'Completada' : 'Pendiente'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(task.createdAt)} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                        <button className="text-blue-600 hover:text-blue-900 mr-2">Editar</button>
                                        <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="sm:hidden">
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div className="bg-white shadow rounded-lg p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>
                                <p className="text-sm text-gray-500">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${task.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {task.completed ? 'Completada' : 'Pendiente'}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500">{formatDate(task.createdAt)} </p>
                                <div className="mt-2">
                                    <button className="text-blue-600 hover:text-blue-900 mr-2">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
