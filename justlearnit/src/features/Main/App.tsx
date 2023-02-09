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
import { INote } from "../../shared/types/types";
import RingLoader from "react-spinners/RingLoader";
import { motion } from "framer-motion";

function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(0); //0 - loading, 1 - error, 2 - success

  useEffect(() => {
    fetchBooks();
    console.log(data);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedNote, setSelectedNote] = useState<INote>();
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const onRemoveConfirmed = async (id: string) => {
    const newData = data.filter((note: INote) => {
      return note._id !== id;
    });
    const url = `http://127.0.0.1:5000/posts/${id}`;

    await axios.delete(url).then(() => {
      console.log("Pomyślnie usunięto!");
    });
    setData(newData);
    setShowConfirmation(false);
  };

  const handleShowModal = (p: INote) => {
    setSelectedNote(p);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowConfirmation(false);
  };

  const onRemoveConfirmation = (p: INote) => {
    setSelectedNote(p);
    setShowConfirmation(true);
  };

  const onSearchBarValueChangedHandler = (value: string) => {
    setSearchBarValue(value);
  };

  const renderedValue = data.filter((o: INote) => {
    if (
      o.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      o.tag.toLowerCase().includes(searchBarValue.toLowerCase())
    )
      return o;
  });

  const renderedNotes = renderedValue.map((n, index) => {
    return (
      <Card
        key={index}
        note={n}
        onClick={handleShowModal}
        onRemove={onRemoveConfirmation}
      />
    );
  });

  const fetchBooks = useCallback(async () => {
    await axios
      .get(process.env.REACT_APP_DATABASE!)
      .then((res) => {
        setData(res.data);
        setIsError(2)
      })
      .catch((err) => {
        setIsError(1)
      });
  }, []);

  const deleteConfirm = (
    <Modal onClose={handleCloseDeleteConfirmationModal}>
      <DeleteConfirmation
        note={selectedNote!}
        onRemove={() => onRemoveConfirmed(selectedNote!._id)}
        onCancel={handleCloseDeleteConfirmationModal}
      ></DeleteConfirmation>
    </Modal>
  );
  const modal = (
    <Modal onClose={handleCloseModal}>
      <NoteInfo onClose={handleCloseModal} note={selectedNote!}></NoteInfo>
    </Modal>
  );
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
        {isError === 1 && (
          <span className="flex flex-col justify-center m-4 text-xl text-red font-bold">
            Błąd podczas łączenia z bazą
          </span>
        )}
      </div>
      {isError === 2 && (
        <motion.div
          className="h-full grid grid-cols-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {renderedNotes}
        </motion.div>
      )}
      {isError === 0 && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col mt-60 justify-center">
            <RingLoader size={150} color="#d9d9d9" />
            <span className="text-center">Wczytywanie...</span>
          </div>
        </motion.div>
      )}

      {showModal && modal}
      {showConfirmation && deleteConfirm}
    </div>
  );
}

export default App;
