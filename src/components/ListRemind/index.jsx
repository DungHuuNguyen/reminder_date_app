import "./style.scss";
import { CloseOutlined } from "@ant-design/icons";

const ListRemind = (props) => {
  // console.log(props);

  const { id, date, note } = props.item;
  const { handleRemoveNote } = props;

  const handleCheckBox = () => {
    if (
      new Date(date).getDate() === new Date().getDate() &&
      new Date(date).getMonth() === new Date().getMonth() &&
      new Date(date).getFullYear() === new Date().getFullYear()
    ) {
      return true;
    }
  };

  return (
    <div className="remind-item ">
      <div
        className={`remind-item__box ${
          handleCheckBox() && "remind-item__box--done"
        }`}
      >
        <div className="remind-item__date-grp">
          <h5 className="remind-item__date">{date}</h5>
          <button
            className={`remind-item__button ${
              handleCheckBox() && "remind-item__button--done"
            }`}
            onClick={() => handleRemoveNote(id)}
          >
            <CloseOutlined />
          </button>
        </div>
        <p className="remind-item__note">{note}</p>
      </div>
    </div>
  );
};

export default ListRemind;
