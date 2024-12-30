import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskStatus, TaskStatusOptions } from '../../utils/statusOption';
import AddTask from '../../utils/sendData';

interface FormCreateEditTaskProps {
  initialData?: AddTask;
  onSubmit: (data: AddTask) => void;
}

const FormCreateEditTask: React.FC<FormCreateEditTaskProps> = ({ initialData, onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddTask>({
    defaultValues: initialData || {
      title: '',
      description: '',
      completed: undefined,
    },
  });
  useEffect(() => {
    if (initialData) {
      const convertedData = {
        ...initialData,
        completed: initialData.completed ? TaskStatus.Completed : TaskStatus.Pending,
      } as unknown as AddTask;
      reset(convertedData);
    }
  }, [initialData, reset]);

  const onSubmitHandler: SubmitHandler<AddTask> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="bg-white p-6 mt-4 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <div className="space-y-4">

        <div className="form-group">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
          <input
            {...register('title', { required: 'El nombre del proyecto es necesario' })}
            type="text"
            id="title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-my-yellow focus:border-my-yellow"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            {...register('description')}
            type="text"
            id="description"
            name="description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-my-yellow focus:border-my-yellow"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="completed" className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            {...register('completed')}
            id="completed"
            name="completed"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-my-yellow focus:border-my-yellow"
          >
            <option value="">Seleccione un estado</option>
            {TaskStatusOptions.map((completed) => (
              <option key={completed.label} value={completed.value}>
                {completed.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-my-black text-my-yellow font-bold rounded-md shadow-md hover:bg-my-second-yellow hover:text-my-black focus:outline-none focus:ring-2 focus:ring-my-yellow"
          >
            {initialData ? 'Guardar cambios' : 'Crear proyecto'}
          </button>
        </div>

      </div>
    </form>
  );
};

export default FormCreateEditTask;
