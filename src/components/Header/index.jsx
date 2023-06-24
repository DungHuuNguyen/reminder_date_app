import React from "react";
import "./style.scss";

const Header = (props) => {
  // const { date, note } = props.listRemind;
  const { listRemind } = props;

  const arr = [];

  const handleRemindNotes = (listRemind) => {
    listRemind.forEach((item) => {
      if (
        new Date(item.date).getDate() === new Date().getDate() &&
        new Date(item.date).getMonth() === new Date().getMonth() &&
        new Date(item.date).getFullYear() === new Date().getFullYear()
      ) {
        // console.log(`Hôm nay bạn phải ${item.note} !!!`);
        arr.push(
          <p style={{ color: "red" }}>Hôm nay bạn phải {item.note} !!!, </p>
        );
      }
    });
    return arr.map((item) => item);
  };

  return (
    <div className="remind-date-app-header">
      <div className="remind-date-app-header__alert remind-date-app-header__alert--show">
        {handleRemindNotes(listRemind)}
      </div>
      <p className="remind-date-app-header__title">
        Nhắc nhở ngày quan trọng của bạn
      </p>
    </div>
  );
};

export default Header;
