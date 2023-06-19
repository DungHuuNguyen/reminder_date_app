import React, { useState } from "react";
import "./style.scss";
import { DatePicker, Input } from "antd";

const FormAddRemind = (props) => {
  const [inputNote, setInputNote] = useState("");
  const [inputDate, setInputDate] = useState("");
  const { handleAddNote } = props;

  const onChangeInputDate = (date, dateString) => {
    console.log(dateString);
    return setInputDate(dateString);
  };

  const handleChangeInputNote = (event) => {
    // console.log(event);
    return setInputNote(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleAddNote(inputNote, inputDate);
    setInputNote("");
  };

  return (
    <form className="form-add-remind" onSubmit={handleSubmitForm}>
      <div className="form-add-remind__add-note">
        <label className="form-add-remind__add-note-title">Nội dung:</label>
        <Input
          placeholder="mời nhập nội dung của ngày"
          value={inputNote}
          onChange={handleChangeInputNote}
        />
      </div>
      <span className="error-message">Vui lòng nhập nhắc nhở</span>

      <div className="date-remind">
        <div className="date-remind__left">
          <label className="date-remind__title">Ngày nhắc:</label>
          <DatePicker
            onChange={onChangeInputDate}
            value={new Date(inputDate)}
          />
        </div>
        <button className="date-remind__btn">Lưu ngày</button>
      </div>
      <span className="error-message">Vui lòng nhập yyyy/mm/dd</span>
    </form>
  );
};

export default FormAddRemind;
