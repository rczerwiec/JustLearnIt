import NavigationButton from "../../shared/components/NavigationButton";
import AddIcon from "../../shared/images/svg/math-plus-icon.svg";
import SearchBar from "./components/SearchBar";
import Logo from "../../shared/components/Logo";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "../../shared/components/Modal";
import NoteInfo from "./components/NoteInfo";
import DeleteConfirmation from "./components/DeleteConfirmation";

interface IDataElement {
  _id: string;
  tag: string;
  title: string;
  description: [];
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedNote, setSelectedNote] = useState<IDataElement>();
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const onRemoveConfirmed = async (id: string) => {
    const newData = data.filter((note:IDataElement) => {
      return note._id !== id
    })
    const url = `http://localhost:5000/posts/${id}`

    await axios.delete(url).then(() => {
      console.log("Pomyślnie usunięto!");
    })

    setData(newData)
  }

  const handleShowModal = (p: IDataElement) => {
    setSelectedNote(p)
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleCloseDeleteConfirmationModal = () => {
    setShowConfirmation(false);
  }


  const onRemoveConfirmation = () => {
    console.log("confirmation")
    setShowConfirmation(true);
  }


  const onSearchBarValueChangedHandler = (value: string) => {
    setSearchBarValue(value);
  };

  const renderedValue = data.filter((o: IDataElement) => {
    if (o.title.toLowerCase().includes(searchBarValue.toLowerCase()) || o.tag.toLowerCase().includes(searchBarValue.toLowerCase())) return o;
  });

  const renderedNotes = renderedValue.map((n, index) => {
    return <Card key={index} note={n} onClick={handleShowModal} onRemove={onRemoveConfirmation}/>;
  });

  const fetchBooks = useCallback(async () => {
    const res = await axios.get(process.env.REACT_APP_DATABASE!);
    setData(res.data);
  }, []);


  const deleteConfirm = <Modal onClose={handleCloseDeleteConfirmationModal}><DeleteConfirmation></DeleteConfirmation></Modal>
  const modal = <Modal onClose={handleCloseModal}><NoteInfo onClose={handleCloseModal} note={selectedNote!}></NoteInfo></Modal>
  return (
    <div className="App">
      <NavigationButton
        className="fixed bg-grayMain w-16 h-16 rounded-xl shadow-md right-5 bottom-5"
        icon={AddIcon}
        navigateTo="nowy"
      />
      <div className="flex flex-wrap">
        <Logo />
        <SearchBar
          onChange={onSearchBarValueChangedHandler}
          searchBarValue={searchBarValue}
        />
      </div>
      <div className="h-full grid grid-cols-3">{renderedNotes}</div>
      {showModal && modal}
      {showConfirmation && deleteConfirm}
    </div>
  );
}

export default App;
