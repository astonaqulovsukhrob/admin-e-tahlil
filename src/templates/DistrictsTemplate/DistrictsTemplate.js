import { Popover } from "antd";
import { NUMBER, SELECT, STRING } from "../../Components/constant/inputTypes";
import { DISTRICT_PAGE } from "../../Components/constant/pageConstant";
import { DISTRICT_PATH } from "../../Components/constant/pagePath";

export const DistrictsTemplate = {
  text: "Туманлар",
  path: DISTRICT_PATH,
  type: DISTRICT_PAGE,
  isOpenModal: false,
  optionName: "/cities/10",
  optionRegion: "/states",
  modal: {
    width: 820,
  },
  districtsFrom: true,
  form: [
    {
      grid: {
        columns: "repeat(12, 1fr)",
        rows: "repeat(1, 7fr)",
      },
      inputs: [
        {
          0: [
            {
              type: SELECT,
              name: "region_id",
              placeholder: "Туманлар",
              label: "Туманлар",
              gridColumn: "1 / 4",
              gridRow: "1 / 1",
              width: 185,
            },
            {
              sector_id: 1,
              name: "name",
              type: STRING,
              placeholder: "1-сектор ФИO",
              label: "1-сектор ФИO",
              gridColumn: "1 / 4",
              gridRow: "2 / 2",
            },
            {
              type: STRING,
              name: "login",
              placeholder: "Логин",
              label: "Логин",
              gridColumn: "4 / 7",
              gridRow: "2 / 2",
            },
            {
              type: NUMBER,
              name: "password",
              placeholder: "Парол",
              label: "Парол",
              gridColumn: "7 / 10",
              gridRow: "2 / 2",
            },
            {
              type: NUMBER,
              name: "phone_number",
              placeholder: "Телефон номер",
              label: "Телефон номер",
              gridColumn: "10 / 13",
              gridRow: "2 / 2",
            },
          ],
        },
        {
          0: [
            {
              sector_id: 2,
              type: STRING,
              name: "name",
              placeholder: "2-сектор ФИO",
              gridColumn: "1 / 4",
              gridRow: "3 / 3",
            },
            {
              type: STRING,
              name: "login",
              placeholder: "Логин",
              gridColumn: "4 / 7",
              gridRow: "3 / 3",
            },
            {
              type: NUMBER,
              name: "password",
              placeholder: "Парол",
              gridColumn: "7 / 10",
              gridRow: "3 / 3",
            },
            {
              type: NUMBER,
              name: "phone_number",
              placeholder: "Телефон номер",
              gridColumn: "10 / 13",
              gridRow: "3 / 3",
            },
          ],
        },
        {
          0: [
            {
              sector_id: 3,
              name: "name",
              type: STRING,
              placeholder: "3-сектор ФИO",
              gridColumn: "1 / 4",
              gridRow: "4 / 4",
            },
            {
              type: STRING,
              placeholder: "Логин",
              name: "login",
              gridColumn: "4 / 7",
              gridRow: "4 / 4",
            },
            {
              type: NUMBER,
              name: "password",
              placeholder: "Парол",
              gridColumn: "7 / 10",
              gridRow: "4 / 4",
            },
            {
              type: NUMBER,
              name: "phone_number",
              placeholder: "Телефон номер",
              gridColumn: "10 / 13",
              gridRow: "4 / 4",
            },
          ],
        },
        {
          0: [
            {
              sector_id: 4,
              type: STRING,
              name: "name",
              placeholder: "4-сектор ФИO",
              gridColumn: "1 / 4",
              gridRow: "5 / 5",
            },
            {
              type: STRING,
              name: "login",
              placeholder: "Логин",
              gridColumn: "4 / 7",
              gridRow: "5 / 5",
            },
            {
              type: NUMBER,
              name: "password",
              placeholder: "Парол",
              gridColumn: "7 / 10",
              gridRow: "5 / 5",
            },
            {
              type: NUMBER,
              name: "phone_number",
              placeholder: "Телефон номер",
              gridColumn: "10 / 13",
              gridRow: "5 / 5",
            },
          ],
        },
      ],
    },
  ],
  columns: [
    {
      title: "№",
      dataIndex: "id",
      // render: (key, text, index) => ++index,
      width: "20px",
    },
    {
      title: "Туман",
      dataIndex: "region_name",
    },
    {
      title: "1-сектор ФИO",
      dataIndex: "name_1",
    },
    {
      title: "2-сектор ФИO",
      dataIndex: "name_2",
    },
    {
      title: "3-сектор ФИO",
      dataIndex: "name_3",
    },
    {
      title: "4-сектор ФИO",
      dataIndex: "name_4",
    },
  ],
};
