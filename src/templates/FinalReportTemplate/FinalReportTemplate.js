import { NUMBER, STRING } from "../../Components/constant/inputTypes";
import { CATEGORIYES_PAGE } from "../../Components/constant/pageConstant";
import { FINAL_REPORT_PATH } from "../../Components/constant/pagePath";

export const FinalReportTemplate = {
  text: "Натижави ҳисобот",
  path: FINAL_REPORT_PATH,
  type: CATEGORIYES_PAGE,
  isOpenModal: false,
  districtsFrom: false,
  form: [
    {
      grid: {
        columns: "repeat (8, 1fr)",
        rows: "repeat (4, 1fr)",
      },

      inputs: [
        {
          type: STRING,
          name: "name",
          placeholder: "Номи",
          gridColumn: "1 / 2",
        },
        {
          type: NUMBER,
          name: "select_id",
          placeholder: "Категория",
          gridColumn: "2 / 4",
        },
      ],
    },
  ],
  columns: [
    {
      title: "№",
      dataIndex: "key",
      // render: (key, text, index) => ++index,
      width: "20px",
    },
    {
      title: "Шахар туман номи",
      dataIndex: "name",
    },
  ],
};
