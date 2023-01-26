import NavigationButton from "./components/NavigationButton";
import AddIcon from "../../shared/images/svg/math-plus-icon.svg";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <NavigationButton
        className="fixed bg-grayMain w-16 h-16 rounded-xl shadow-md right-5 bottom-5"
        icon={AddIcon}
        navigateTo="nowy"
      />
      <div className="flex flex-wrap">
        <Logo/>
        <SearchBar/>
      </div>
      <div className="h-full grid grid-cols-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
