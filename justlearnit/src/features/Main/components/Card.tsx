import axios from "axios";
import TrashIcon from "../../../shared/images/svg/delete-icon.svg";
import { motion } from "framer-motion";

interface ICard {
  note: {
    _id: string,
    description: [];
    tag: string;
    title: string;
  };
  onClick: (p: { _id: string, description: []; tag: string; title: string }) => void;
  onRemove: (id: string) => void;
}

function Card({ note, onClick, onRemove }: ICard) {

  const renderedDescription = note.description.map((m: string) => {
    if (m.length <= 100) {
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

  return (
    <div
      className="bg-grayMain m-4 rounded-md hover:cursor-pointer shadow-md"
      onClick={() => {
        onClick(note);
      }}
    >
      <div className="bg-graySecondary m-4 p-3 text-center text-3xl">
        {note.tag}
      </div>
      <div className="text-center text-xl">{note.title}</div>
      {renderedDescription}
      <div className="flex justify-end">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="" onClick={() => { onRemove(note._id) }}><img className="m-3 w-5" src={TrashIcon}></img></motion.button>
      </div>

    </div>
  );
}

export default Card;
