import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import addTask from '../services/addTask';
import CreateEditTask from '../components/form/CreateEditTask';
import AddTask from '../utils/sendData';

export default function AddTaskView() {
  const navigate = useNavigate(); 
  const handleSubmit = async (data: AddTask) => {
    try {
      await addTask(data);
        toast.success("¡Se creo con exito el projexto!");
        navigate("/");
    } catch (error) {
      toast.error("¡Ocurrió un error!");
      console.log('error '+error)
    }
  };
  return (
    <div className='w-full flex flex-col items-center'>
     {/* <NavForms titleForm='Add project' />*/}
      <div className="w-full max-w-5xl">
        <CreateEditTask onSubmit={handleSubmit} />
      </div>
    </div>
  )
}