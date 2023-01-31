import { useEffect } from "react";
import ReactDOM from "react-dom";




interface IProps {
  onClose: () => void;
  note: {
    description: [],
    tag: string,
    title: string,
  };
}

function Modal({ onClose, note }: IProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  console.log(note);

  const renderedDescription = note.description.map((m: string) => {
    return <div key="0" className="text-center text-sm m-4" dangerouslySetInnerHTML={{ __html: m }}></div>;

  })

  return ReactDOM.createPortal(
    <div className="fixed flex justify-center top-0 left-0 w-full h-full bg-grayMain overflow-y-auto" onClick={onClose}>
      <div className="absolute bg-whiteMain inset-40  bg-white rounded">
        <div className="flex flex-col justify-between ">
          <div className="bg-graySecondary m-4 p-3 text-center text-3xl">{note.tag}</div>
          <div className="text-center text-xl">{note.title}</div>
          <div className="bg-whiteMain scrollbar">{renderedDescription}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")!
  );
}

export default Modal;
