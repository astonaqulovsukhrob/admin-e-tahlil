import { Input, Select } from "antd";
import { NUMBER, STRING, SELECT } from "../constant/inputTypes";
const { Option } = Select;

const ModalInputs = (props) => {
  const { placeholder, name, gridRow, gridColumn, type, maxWidth, width } =
    props;
  let input = null;

  const defaultStyle = {
    gridColumn,
    gridRow,
  };

  switch (type) {
    case STRING:
      input = (
        <div style={defaultStyle}>
          <label>{placeholder}</label>
          <Input
            name={name}
            className="form-control"
            placeholder={placeholder}
            type="text"
          />
        </div>
      );
      break;
    case SELECT:
      input = (
        <div style={defaultStyle}>
          <label htmlFor="">{placeholder}</label>
          <Select
            style={{
              width: width,
              maxWidth: maxWidth,
            }}
            placeholder={placeholder}
            // onChange={handleChange}
          >
            <Option value="jack">Jack (100)</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </div>
      );
      break;
    case NUMBER:
      input = (
        <div style={defaultStyle}>
          <label>{placeholder}</label>
          <Input name={name} type={"number"} placeholder={placeholder} />
        </div>
      );
    default:
      break;
  }
  return input;
};

export default ModalInputs;
