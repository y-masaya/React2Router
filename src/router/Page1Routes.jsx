import { Page1 } from "../Page1";
import { Page1DtaileA } from "../Page1DtaileA";
import { Page1DtaileB } from "../Page1DtaileB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/dtaileA",
    exact: false,
    children: <Page1DtaileA />
  },
  {
    path: "/dtaileB",
    exact: false,
    children: <Page1DtaileB />
  }
];
