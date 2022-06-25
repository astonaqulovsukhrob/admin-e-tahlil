import { NUMBER, STRING } from "../../Components/constant/inputTypes";
import { CATEGORIYES_PAGE } from "../../Components/constant/pageConstant";
import { CATEGORIYA_PATH } from "../../Components/constant/pagePath";

export const CategoriyaTemplate = {
  text: "Категория",
  path: CATEGORIYA_PATH,
  type: CATEGORIYES_PAGE,
  isOpenModal: false,
  optionName: "/banks",
  districtsFrom: false,
  modal: {
    width: 500,
  },
  form: [
    {
      grid: {
        colmuns: "repeat(7, 1fr)",
        row: "repeat(1, 4fr)",
      },

      inputs: [
        {
          type: STRING,
          name: "name",
          placeholder: "Номи",
          gridColumn: "1 / 6",
        },
        {
          type: NUMBER,
          name: "password",
          placeholder: "Такрорийлиги Рақам",
          gridColumn: "6 / 8",
        },
        {
          type: STRING,
          name: "password",
          placeholder: "Изоҳ",
          gridColumn: "1 / 8",
          gridRow: "2 / 2",
        },
      ],
    },
  ],
  columns: [
    {
      title: "№",
      dataIndex: "key",
      // render: (text, key, index) => ++index,
      width: "20px",
    },
    {
      title: "Номи",
      dataIndex: "name",
      width: "200px",
    },

    {
      title: "Изоҳ",
      dataIndex: "description",
      width: "350px",
    },
    {
      title: "Такрорийлиги Рақам",
      dataIndex: "repetition",
      width: "350px",
    },
  ],
};
