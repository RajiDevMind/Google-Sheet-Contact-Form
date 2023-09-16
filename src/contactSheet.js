import { google } from "googleapis";

import key from "../secrets.json" assert { type: "json" };

export const SHEET_ID = "1i3tVwmrH_Ey7Mt4sBDaYs604ySTe_Qb9X5wBaM8AZZk";

const createClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const accessGoogleSheets = google.sheets({ version: "v4", auth: createClient });

export default accessGoogleSheets;
