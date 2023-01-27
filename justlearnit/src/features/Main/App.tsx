import NavigationButton from "../../shared/components/NavigationButton";
import AddIcon from "../../shared/images/svg/math-plus-icon.svg";
import SearchBar from "./components/SearchBar";
import Logo from "../../shared/components/Logo";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";

interface IDataElement {
  tag: string;
  title: string;
  description: [];
}

function App() {
  useEffect(() => {
    fetchBooks();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<[]>([]);
  const [selectedNote, setSelectedNote] = useState<IDataElement>();
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const handleShowModal = (p: IDataElement) => {
    setSelectedNote(p)
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const onSearchBarValueChangedHandler = (value: string) => {
    setSearchBarValue(value);
  };

  const renderedValue = data.filter((o: IDataElement) => {
    if (o.title.toLowerCase().includes(searchBarValue.toLowerCase()) || o.tag.toLowerCase().includes(searchBarValue.toLowerCase())) return o;
  });

  const renderedNotes = renderedValue.map((n, index) => {
    return <Card key={index} note={n} onClick={handleShowModal}/>;
  });

  const fetchBooks = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/posts");
    setData(res.data);
  }, []);



  const modal = <Modal onClose={handleCloseModal} note={selectedNote!}/>
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
    </div>
  );
}

export default App;
