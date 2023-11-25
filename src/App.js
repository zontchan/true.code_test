import './scss/main.scss';
import Header from "./components/Header";
import Popup from "./components/Popup";
import Main from "./components/Main";
import React, {createContext, useState} from "react";
import Parallax from "./components/Parallax";
import HazeAnimation from "./components/HazeAnimation";

//TODO: 2.видео в буквах
export const PopupContext = createContext();
function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
        <div className="App">
            <div className="wrapper">
                <Parallax/>
                <HazeAnimation/>
                <PopupContext.Provider value={{isPopupOpen, setIsPopupOpen}}>
                    <Header/>
                    <Main/>
                    <Popup/>
                </PopupContext.Provider>
            </div>
        </div>
  );
}

export default App;
