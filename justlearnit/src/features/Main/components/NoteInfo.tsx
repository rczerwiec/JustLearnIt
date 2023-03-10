import CloseIcon from "../../../shared/images/svg/close-icon.svg";

interface INoteInfoProps{
    onClose: () => void;
    note: {
        description: [];
        tag: string;
        title: string;
      };
}

function NoteInfo({onClose, note}:INoteInfoProps){
    const renderedDescription = note.description.map((m: string) => {
        return (
          <div
            key="0"
            className="text-center text-sm m-4"
            dangerouslySetInnerHTML={{ __html: m }}
          ></div>
        );
      });

    return(
        <div className="absolute bg-whiteMain mt-20 h-full w-1/2 left-1/4 top-0 bg-white rounded ">
        <div className="flex justify-end ">
          <img
            onClick={onClose}
            alt="close icon"
            className="hover:cursor-pointer m-2 w-5"
            src={CloseIcon}
          ></img>
        </div>
        <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide">
          <div className="bg-graySecondary mx-4 p-3 text-center text-3xl">
            {note.tag}
          </div>
          <div className="text-center text-xl  mx-4 p-3 ">{note.title}</div>
          <div className="bg-whiteMain scrollbar ">{renderedDescription}</div>
        </div>
      </div>
    )
}

export default NoteInfo;