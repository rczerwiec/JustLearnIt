import Button from "../../../shared/components/Button";

function DeleteConfirmation(){

    return(
<div className="absolute flex flex-col justify-center bg-whiteMain mt-80 h-1/4 w-1/3 left-1/3 top-0 bg-white rounded ">
    <div className="flex justify-center m-8 text-xl font-bold">
        Czy na pewno chcesz usunąć tą notatkę?
    </div>
    <div className="flex justify-between mx-40">
        <Button red onClick={() => {}}>Tak</Button>
        <Button gray onClick={() => {}}>Nie</Button>
    </div>

</div>
    )
}

export default DeleteConfirmation;