import axios from "axios";

interface ICard {
  note: {
    _id: string,
    description: [];
    tag: string;
    title: string;
  };
  onClick: (p: { description: []; tag: string; title: string }) => void;
}

function Card({ note, onClick }: ICard) {
  const onDeleteButtonClick = async() => {

    const url = `http://localhost:5000/posts/${note._id}`
    console.log(url);

    await axios.delete(url).then(() => {
      console.log("Pomyślnie usunięto!");
    })
  }


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
    <div className="bg-grayMain m-4 rounded-md h-60 hover:cursor-pointer shadow-md">
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
    <div className="flex justify-end bg-graySecondary" onClick={onDeleteButtonClick}>Usuń</div>
    </div>
  );
}

export default Card;
