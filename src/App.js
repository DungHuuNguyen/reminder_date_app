import "./App.scss";
import Header from "./components/Header";
import FormAddRemind from "./components/FormAddRemind";
import ListRemind from "./components/ListRemind";
import { useState } from "react";
import KEY_REMIND_LIST from "./constants/constant";
import dayjs from "dayjs";

function App() {
  const [listRemind, setListRemind] = useState(
    JSON.parse(localStorage.getItem(KEY_REMIND_LIST)) || []
  );

  // console.log(dayjs(new Date()).format("YYYY-MM-DD"));

  const renderListRemind = (list) => {
    return list.map((item) => {
      console.log(item.date);

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
    if (
      new Date(`${dayjs(new Date()).format("YYYY-MM-DD")} 12:00:00`).getTime() >
      new Date(`${_inputDate} 12:00:00`).getTime()
    )
      return;

    const note = {
      id: new Date().getTime(),
      date: `Ngày: ${_inputDate}`,
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

  const handleRemindNote = (list) => {
    list.forEach((item) => {
      if (
        new Date(item.date).getDate() === new Date().getDate() &&
        new Date(item.date).getMonth() === new Date().getMonth() &&
        new Date(item.date).getFullYear() === new Date().getFullYear()
      ) {
        console.log(`Hôm nay bạn phải ${item.note} !!!`);
        return true;
      }
    });
  };

  return (
    <div className="App">
      <div className="remind-date-app-container">
        <div className="remind-date-app-wrapper">
          <Header
            key={listRemind.id}
            listRemind={listRemind}
            handleRemindNote={handleRemindNote}
          />
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
