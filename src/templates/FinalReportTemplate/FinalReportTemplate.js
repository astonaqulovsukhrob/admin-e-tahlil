import { CATEGORIYES_PAGE } from "../../Components/constant/pageConstant";
import { FINAL_REPORT_PATH } from "../../Components/constant/pagePath";

export const FinalReportTemplate = {
  text: "Натижави ҳисобот",
  path: FINAL_REPORT_PATH,
  type: CATEGORIYES_PAGE,
  isOpenModal: false,
  columns: [
    {
      title: "№",
      dataIndex: "key",
      // render: (key, text, index) => ++index,
    },
    {
      title: "Шахар туман номи",
      dataIndex: "name",
    },
  ],
};
