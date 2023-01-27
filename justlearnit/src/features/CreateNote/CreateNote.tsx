import Logo from "../Main/components/Logo";
import NavigationButton from "../Main/components/NavigationButton";
import backIcon from "../../shared/images/svg/back-icon.svg";
import {Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {stateToHTML} from "draft-js-export-html"

function CreateNote() {
  const navigate = useNavigate();
  const [tag, setTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const desc = stateToHTML(editorState.getCurrentContent())
      await axios.post("http://localhost:5000/posts",{
        tag, title, description: desc
      })
      navigate("/");
  }

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState)
      return 'handled';
    }

    return 'not-handled';
  };

  return (
    <div className="h-full">
      <NavigationButton
        className="fixed bg-grayMain w-16 h-16 rounded-xl shadow-md right-5 bottom-5"
        icon={backIcon}
        navigateTo=""
      />
      <div className="flex flex-wrap">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center justify-items-center bg-grayMain my-6 mx-20 rounded-lg ">
        <div className="text-4xl m-4">New Note</div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label className="text-xl mx-4 mt-4"  >Tag</label>
            <input className="bg-graySecondary w-1/2 m-4 p-3 rounded" placeholder="Enter tag..." value={tag} onChange={(e) => {setTag(e.target.value)}}></input>
          </div>
          <div className="flex flex-col  items-center">
            <label className="text-xl mx-4">Title</label>
            <input className="bg-graySecondary w-1/2 m-4 p-3 rounded" placeholder="Enter title..." value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
          </div>

          <div className="flex flex-col  items-center">
            <label className="text-xl mx-4">Description</label>
            <div className="w-full bg-graySecondary w-3/4 rounded-md">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-graySecondary m-2 text-2xl p-2.5 rounded-xl">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
