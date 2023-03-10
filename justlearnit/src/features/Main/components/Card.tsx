import axios from "axios";
import TrashIcon from "../../../shared/images/svg/delete-icon.svg";
import { motion } from "framer-motion";
import { INote } from "../../../shared/types/types";



interface ICard {
  note: INote;
  onClick: (p: { _id: string, description: []; tag: string; title: string }) => void;
  onRemove: (p: INote) => void;
}

function Card({ note, onClick, onRemove }: ICard) {
  let renderedDescription;
  if(note.description.length>0){
    renderedDescription = note.description.map((m: string) => {
      if (m.length <= 50) {
        return (
          <div
            key="0"
            className="text-center text-sm m-4"
            dangerouslySetInnerHTML={{ __html: m }}
          ></div>
        );
      } else {
        let newM = m.slice(0, 50);
        newM = newM + "<div>Read more...</div>";
        return (
          <div
            key="0"
            className="text-center text-sm m-4"
            dangerouslySetInnerHTML={{ __html: newM }}
          ></div>
        );
      }
    });
  }
  else{
    renderedDescription= <div
    key="0"
    className="text-center text-sm m-4"
  ></div>
  }
  

  return (
    <div className="flex flex-col justify-between h-80 min-h-fit bg-grayMain m-4 rounded-md hover:cursor-pointer shadow-md">
      <div
        onClick={() => {
          onClick(note);
        }}
      >
        <div className="bg-graySecondary m-4 p-3 text-center text-3xl">
          {note.tag}
        </div>
        <div className="text-center text-xl">{note.title}</div>
        {renderedDescription}

      </div>
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="" onClick={() => { onRemove(note) }}><img alt="trash icon" className="m-3 w-5" src={TrashIcon}></img></motion.button>
      </div>
    </div>
  );
}

export default Card;
