import React from "react";
import ModalInputs from "../GlobalModal/ModalInputs";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModal } from "../../redux/stored_reducer";
import "./form.scss";

function Form() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const dispatch = useDispatch();
  let districtsFrom = currentPage?.districtsFrom;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsOpenModal(false));
  };

  return (
    <form className="site_form" onSubmit={handleSubmit}>
      {districtsFrom
        ? currentPage?.form?.map((list) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: list?.grid?.columns,
                gridTemplateRows: list?.grid?.rows,
                gap: "30px",
              }}
            >
              {list.inputs.map((list, i) => (
                <>
                  {list[0].map((input) => (
                    <ModalInputs {...input} tartib={i} />
                  ))}
                </>
              ))}
            </div>
          ))
        : currentPage?.form?.map((row, i) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: row?.gird?.columns,
                gridTemplateRows: row?.grid?.rows,
                gap: "30px",
              }}
            >
              {row?.inputs?.map((input) => {
                return <ModalInputs {...input} />;
              })}
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
