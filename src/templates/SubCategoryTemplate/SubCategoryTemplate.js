import { SELECT, STRING } from "../../Components/constant/inputTypes";
import { CATEGORIYES_PAGE } from "../../Components/constant/pageConstant";
import { SUB_CATEGORIYA_PATH } from "../../Components/constant/pagePath";

export const SubCategoryTemplate = {
  text: "Суб Категория",
  path: SUB_CATEGORIYA_PATH,
  type: CATEGORIYES_PAGE,
  isOpenModal: false,
  optionName: "/subCategories",
  districtsFrom: false,
  modal: {
    width: 500,
  },

  form: [
    {
      grid: {
        columns: "repeat (8, 1fr)",
        rows: "repeat (4, 1fr)",
      },

      inputs: [
        {
          type: SELECT,
          name: "select",
          placeholder: "Категория",
          gridColumn: "1 / 4",
          width: 200,
        },
        {
          type: STRING,
          name: "name",
          placeholder: "Номи",
          gridColumn: "4 / 8",
        },
      ],
    },
  ],

  columns: [
    {
      title: "№",
      dataIndex: "key",
      // render: (key, text, index) => ++index,
      width: "10px",
    },
    {
      title: "Категория ",
      dataIndex: "category_name",
      width: "250px",
    },
    {
      title: "Номи",
      dataIndex: "name",
      width: "250px",
    },
    {
      dataIndex: "status",
      width: "10px",
      render: (status) => {
        return (
          <div style={{ textAlign: "center" }}>
            {/* <Checkbox
              onChange={handleChange}
              defaultChecked={status == 0 || status == null ? false : true}
            /> */}
          </div>
        );
      },
    },
  ],
};
