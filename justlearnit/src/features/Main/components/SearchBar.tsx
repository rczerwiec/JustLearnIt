interface IProps{
  onChange: (value: string) => void;
  searchBarValue: string;
}

function SearchBar({onChange, searchBarValue}:IProps) {
  
  return (
    <div className="my-auto w-1/5  ml-6">
    <input
      className="bg-grayMain w-full p-3 align-left  text-sm rounded-md"
      value={searchBarValue} onChange={(e)=>{onChange(e.target.value)}}
    ></input>
    </div>
  );
}

export default SearchBar;
