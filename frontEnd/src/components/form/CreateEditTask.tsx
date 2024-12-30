import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskStatusOptions } from '../../utils/statusOption';
import AddTask from '../../utils/sendData';

interface FormCreateEditProjectProps {
  initialData?: AddTask;
  onSubmit: (data: AddTask) => void;
}

const FormCreateEditProject: React.FC<FormCreateEditProjectProps> = ({ initialData, onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddTask>({
    defaultValues: initialData || {
      title: '',
      description: '',
      completed: undefined,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmitHandler: SubmitHandler<AddTask> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='bg-neutral-50 p-5'>
      <div className='div-form-custom'>
        <label htmlFor="title">Titulo</label>
        <input
          {...register('title', { required: 'El nombre del proyecto es necesario' })}
          type="text"
          id="title"
          className="input-custom-form"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          className='input-custom-form'
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="completed">Estado</label>
        <select
          id="completed"
          name="completed"
          className="input-custom-form"
        >

          <option value="">Seleccione un estado</option>
          {TaskStatusOptions.map((completed) => (
            <option key={completed.label} value={completed.value}>
              {completed.label}
            </option>
          ))}
        </select>
        {errors.completed && <p className="text-red-500">{errors.completed.message}</p>}
      </div>

      <button type="submit" className='button-custom'>
        {initialData ? ' Save changes' : 'Create project'}
      </button>
    </form>
  );
};

export default FormCreateEditProject;