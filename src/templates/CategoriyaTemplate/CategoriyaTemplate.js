import { STRING } from "../../Components/constant/inputTypes";
import { CATEGORIYES_PAGE } from "../../Components/constant/pageConstant";
import { CATEGORIYA_PATH } from "../../Components/constant/pagePath";

export const CategoriyaTemplate = {
  text: "Категория",
  path: CATEGORIYA_PATH,
  type: CATEGORIYES_PAGE,
  isOpenModal: false,
  form: [
    {
      grid: {
        colmuns: "repeat(10,1fr)",
        row: "repeat(1,4fr)",
      },

      inputs: [
        {
          type: STRING,
          placeholder: "Парол",
          name: "password",
        },
        {
          type: STRING,
          placeholder: "Парол",
          name: "password",
        },
        {
          type: STRING,
          placeholder: "Парол",
          name: "password",
        },
      ],
    },
  ],
};
