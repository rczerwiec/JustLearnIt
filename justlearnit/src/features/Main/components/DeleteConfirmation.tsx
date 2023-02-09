import Button from "../../../shared/components/Button";
import { INote } from "../../../shared/types/types";

interface IProps{
    onRemove: () => void,
    onCancel: () => void,
    note: INote;
}

function DeleteConfirmation({note, onRemove, onCancel} : IProps){

    return(
<div className="absolute flex flex-col justify-center bg-whiteMain mt-80 h-1/4 w-1/3 left-1/3 top-0 bg-white rounded ">
    <div className="flex justify-center m-8 text-xl font-bold">
        Czy na pewno chcesz usunąć tą notatkę?
    </div>
    <div className="flex justify-between mx-40">
        <Button red onClick={() => {onRemove()}}>Tak</Button>
        <Button gray onClick={() => {onCancel()}}>Nie</Button>
    </div>

</div>
    )
}

export default DeleteConfirmation;