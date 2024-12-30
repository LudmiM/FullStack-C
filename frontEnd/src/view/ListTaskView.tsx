import { useEffect, useState } from 'react';
import fetchData from './../services/getAll';
import { toast } from 'react-toastify';
import task from '../utils/dataResponse';
import formatDate from '../utils/formatDate';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import DropdownMenu from '../components/menuOpen';
import MenuDelete from '../components/modalDeleted';
import { Link } from 'react-router';
import { TaskStatus } from '../utils/statusOption';
import editTask from '../services/editTask';
import AddTask from '../utils/sendData';
export default function ListTaskView() {

    const [tasks, setTasks] = useState<task[]>([]);
    const [deleteTaskId, setDeleteTaskId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await fetchData();
                setTasks(data);
            } catch (err) {
                toast.error("¡Ocurrió un error al intentar obtener los datos!");
                console.log('Error al obtener las tareas', err);
            }
        }

        getTasks();
    }, []);

    const openDeleteModal = (id: string) => {
        setDeleteTaskId(id);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteTaskId(null);
    };

    const toggleTaskStatus = async (taskId: string, currentStatus: number, task: AddTask) => {
        try {
            const newStatus = currentStatus === TaskStatus.Pending ? TaskStatus.Completed : TaskStatus.Pending;

            const newCompleted = newStatus === TaskStatus.Completed;

            const updatedTasks = tasks.map((task) =>
                task._id === taskId ? { ...task, completed: newCompleted } : task
            );

            const updatedTask: AddTask = {
                ...task,
                completed: newCompleted,
            };

            await editTask(taskId, updatedTask);

            setTasks(updatedTasks);
            toast.success(`Estado de la tarea actualizado a ${newStatus === TaskStatus.Completed ? 'Completada' : 'Pendiente'}`);
        } catch (err) {
            toast.error("¡Ocurrió un error al intentar actualizar el estado!");
            console.log('Error al actualizar el estado', err);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <div className="hidden sm:block">
                    <table className="min-w-full table-auto">
                        <thead className="bg-my-second-yellow">
                            <tr>
                                <th className="th-list">Título</th>
                                <th className="th-list">Estado</th>
                                <th className="th-list">Fecha de Creación</th>
                                <th className="th-list">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="td-list font-medium text-gray-900"><Link to={`/task/detail/${task._id}`}>{task.title}</Link></td>
                                    <td className="td-list text-gray-500">
                                        <button
                                            onClick={() => toggleTaskStatus(task._id, task.completed ? TaskStatus.Completed : TaskStatus.Pending, task)}
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${task.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                        >
                                            {task.completed ? 'Completada' : 'Pendiente'}
                                        </button>
                                    </td>
                                    <td className="td-list text-gray-500">{formatDate(task.createdAt)} </td>
                                    <td className="td-list font-medium text-gray-500 generic-flex">
                                        <Link to={`/task/edit/${task._id}`} className="text-green-600 hover:text-green-900 mr-2"><FaEdit size={18} /></Link>
                                        <button className="text-red-600 hover:text-red-900" onClick={() => openDeleteModal(task._id)}>
                                            <RiDeleteBin5Fill size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isDeleteModalOpen && deleteTaskId && (
                        <MenuDelete id={deleteTaskId} onClose={closeDeleteModal} />
                    )}
                </div>

                <div className="sm:hidden">
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div className="bg-white shadow rounded-lg p-4 flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-500">{formatDate(task.createdAt)}</p>
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${task.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {task.completed ? 'Completada' : 'Pendiente'}
                                        </span>
                                    </div>
                                </div>
                                <button className="ml-4">
                                    <DropdownMenu id={task._id} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
