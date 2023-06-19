import "./App.scss";
import Header from "./components/Header";
import FormAddRemind from "./components/FormAddRemind";
import ListRemind from "./components/ListRemind";
import { useState } from "react";
import KEY_REMIND_LIST from "./constants/constant";

function App() {
  const [listRemind, setListRemind] = useState(
    JSON.parse(localStorage.getItem(KEY_REMIND_LIST)) || []
  );

  const renderListRemind = (list) => {
    return list.map((item) => {
      return (
        <ListRemind
          key={item.id}
          item={item}
          handleRemoveNote={handleRemoveNote}
        />
      );
    });
  };

  const handleAddNote = (_inputNote, _inputDate) => {
    if (_inputNote === "") return;
    const note = {
      id: new Date().getTime(),
      date: _inputDate,
      note: _inputNote,
    };
    setListRemind([note, ...listRemind]);
    localStorage.setItem(
      KEY_REMIND_LIST,
      JSON.stringify([note, ...listRemind])
    );
  };

  const handleRemoveNote = (id) => {
    // console.log(id);
    const existedIndexNote = listRemind.findIndex((item) => {
      return item.id === id;
    });
    const listRemindClone = [...listRemind];
    listRemindClone.splice(existedIndexNote, 1);
    setListRemind(listRemindClone);
    localStorage.setItem(KEY_REMIND_LIST, JSON.stringify(listRemindClone));
  };

  return (
    <div className="App">
      <div className="remind-date-app-container">
        <div className="remind-date-app-wrapper">
          <Header />
          <div className="remind-date-app-main">
            <FormAddRemind handleAddNote={handleAddNote} />

            <div className="list-remind">{renderListRemind(listRemind)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
