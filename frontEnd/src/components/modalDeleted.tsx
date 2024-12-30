import { FaCheck } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import deletedTask from "../services/deletedTask";

interface MenuDeleteProps {
  id: string;
  onClose: () => void; 
}

const MenuDelete: React.FC<MenuDeleteProps> = ({ id, onClose }) => {
  const navigate = useNavigate(); 
  const handleDelete = async () => {
    try {
          await deletedTask(id);
          toast.success("¡Elimino conexito el proyecto!");
          navigate(0); 
        } catch (error) {
          toast.error("¡Ocurrió un error!");
          console.log('error '+error)
        }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-md shadow-lg w-80">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">¿Estas seguro?</h3>
          <button onClick={onClose} className="text-gray-500">
            <IoIosClose size={24} />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">Una vez eliminado no podras volver a ver el proyecto</p>
        <div className="mt-4 flex justify-end gap-4">
          <button 
            onClick={handleDelete} 
            className="button-custom-deleted generic-flex ">
            <FaCheck className="mr-2" />
            Confirmo
          </button>
          <button 
            onClick={onClose} 
            className="generic-flex button-second-deleted">
                <ImCancelCircle className="mr-2" />
                Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDelete;