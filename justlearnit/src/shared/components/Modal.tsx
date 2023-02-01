import { useEffect } from "react";
import ReactDOM from "react-dom";

interface IProps {
  onClose: () => void;
  children: JSX.Element;
}

function Modal({ onClose, children}: IProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);


  return ReactDOM.createPortal(
    <>
      <div
        className="fixed flex justify-center top-0 left-0 w-full h-full bg-transparentGrayMain"
        onClick={onClose}
      ></div>
      {children}
    </>,
    document.querySelector(".modal-container")!
  );
}

export default Modal;
