import React from "react";
import { Button } from "antd";
import ModalInputs from "../GlobalModal/ModalInputs";
import { useDispatch } from "react-redux";
import "./form.scss";
import { setIsOpenModal } from "../../redux/stored_reducer";

function Form({ currentPage }) {
  const dispatch = useDispatch();
  let districtsFrom = currentPage?.districtsFrom;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsOpenModal(false));
  };

  return (
    <form className="site_form" onSubmit={handleSubmit}>
      {!districtsFrom
        ? currentPage?.form?.map((row) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: row?.gird?.columns,
                gridTemplateRows: row?.grid?.rows,
                gap: "10px",
              }}
            >
              {row?.inputs?.map((input) => {
                return <ModalInputs {...input} />;
              })}
            </div>
          ))
        : currentPage?.form?.map((list) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: list?.grid?.columns,
                gridTemplateRows: list?.grid?.rows,
                gap: "10px",
              }}
            >
              {list.inputs.map((list) => (
                <>
                  {list[0].map((input) => (
                    <ModalInputs {...input} />
                  ))}
                </>
              ))}
            </div>
          ))}
      <div className="site_form_button">
        <button>Orqaga</button>
        <button type="submit">Saqlash</button>
      </div>
    </form>
  );
}

export default Form;
