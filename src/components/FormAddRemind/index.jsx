import React, { useState } from "react";
import { DatePicker, Input } from "antd";
// Mình install antd thì antd đã install dayjs để làm datepicker rồi
// Nên không cần npm i dayjs nữa
import dayjs from "dayjs";
import "./style.scss";

const FormAddRemind = (props) => {
  const [inputNote, setInputNote] = useState("Ăn cơm");
  const [inputDate, setInputDate] = useState(
    // syntax dayjs
    dayjs(new Date()).format("YYYY-MM-DD")
  );
  // console.log(dayjs(new Date()).format("YYYY-MM-DD"));
  // console.log(dayjs(new Date()).format("DD/MM/YYYY"));

  // Cách validate hay hơn??
  // const [errorForm, setErrorForm] = useState({});

  // {errorForm.note && ....}

  const { handleAddNote } = props;

  const onChangeInputDate = (date, dateString) => {
    // validate dayjs
    if (dayjs(dateString, "YYYY-MM-DD", true).isValid()) {
      // setInputDate(date);
      setInputDate(dateString);
    }
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

  // const handleValidateForm = () => {
  //   if (!inputDate )
  //   setErrorForm({
  //     note: "Vui lòng nhập nhắc nhở",
  //     date: "Vui lòng nhập ngày nhắc nhở",
  //   });
  // };

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
      {!inputNote && (
        <span className="form-add-remind__error-message form-add-remind__error-message--show">
          Vui lòng nhập nhắc nhở
        </span>
      )}

      <div className="date-remind">
        <div className="date-remind__left">
          <label className="date-remind__title">Ngày nhắc:</label>
          <DatePicker
            onChange={onChangeInputDate}
            value={dayjs(inputDate, "YYYY-MM-DD")}
          />
        </div>
        <button className="date-remind__btn">Lưu ngày</button>
      </div>
      {!inputDate && (
        <span className="error-message">Vui lòng nhập YYYY/DD/MM</span>
      )}
    </form>
  );
};

export default FormAddRemind;
