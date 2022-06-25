import { Input, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setValue } from "../../redux/stored_reducer";
import { NUMBER, STRING, SELECT } from "../constant/inputTypes";
import "../inputStyle/input.scss";
const { Option } = Select;

const ModalInputs = (props) => {
  const {
    placeholder,
    name,
    gridRow,
    gridColumn,
    type,
    maxWidth,
    width,
    tartib,
  } = props;
  let label = placeholder;
  let input = null;
  const { currentPage, value, values } = useSelector(
    (s) => s?.unsaved__reducer
  );
  const [focusInput, setFocusInput] = useState(
    !!value[name] || (!!values?.users && !!values?.users[name])
  );

  console.log(value[name]);

  const dispatch = useDispatch();
  let districts_From = currentPage?.districtsFrom;

  const handleChange = (e) => {
    if (districts_From) {
      /* ----------------------------------- // ----------------------------------- */
      let a = values?.users.find((list, i) => i === tartib);
      let newVelues = [...values?.users];
      newVelues.splice(newVelues.indexOf(a), 1, { ...a, ...e });
      dispatch(setUser(newVelues));
    } else {
      dispatch(setValue({ ...value, ...e }));
    }
  };

  const defaultStyle = {
    gridColumn,
    gridRow,
    position: "relative",
  };

  switch (type) {
    case STRING:
      input = (
        <div style={defaultStyle}>
          <Input
            name={name}
            placeholder={placeholder}
            type="text"
            onFocus={() => setFocusInput(true)}
            onChange={(e) =>
              handleChange({
                [e.target.name]: e.target.value,
              })
            }
          />
          <label className={"special_label"}>{label && label}</label>
        </div>
      );
      break;
    case SELECT:
      input = (
        <div style={defaultStyle}>
          <Select
            name={name}
            style={{
              width: width,
              maxWidth: maxWidth,
            }}
            onBlur={() => setFocusInput("")}
            onFocus={() => setFocusInput(true)}
            placeholder={placeholder}
            onChange={(e) => {
              let target = { [name]: e };
              dispatch(setValue({ ...target }));
            }}
          >
            <Option value="jack">Jack </Option>
            <Option value="lucy">Lucy </Option>
          </Select>
          <label
            className={
              focusInput || value[name]
                ? "special_label_for_input_number "
                : "special_label"
            }
          >
            {placeholder}
          </label>
        </div>
      );
      break;
    case NUMBER:
      input = (
        <div style={defaultStyle}>
          <Input
            name={name}
            type={"number"}
            placeholder={placeholder}
            onFocus={() => setFocusInput(true)}
            onChange={(e) =>
              handleChange({
                [e.target.name]: e.target.value,
              })
            }
          />
          <label className={"special_label"}>{label && label}</label>
        </div>
      );
    default:
      break;
  }
  return input;
};

export default ModalInputs;
