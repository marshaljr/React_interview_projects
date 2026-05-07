import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (e) => {
    setSelected(e === selected ? null : e);
  };

  const handleMultiSelection = (e) => {
    let cpyMultiple = [...multiSelected];
    const indexOfCurrentId = cpyMultiple.indexOf(e);

    if (indexOfCurrentId === -1) {
      cpyMultiple.push(e);
    } else {
      cpyMultiple.splice(indexOfCurrentId, 1);
    }
    setMultiSelected(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Select
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
