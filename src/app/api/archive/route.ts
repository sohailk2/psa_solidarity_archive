import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const jwt = new JWT({
  email: process.env.GOOGLE_EMAIL,
  key: process.env.GOOGLE_SECRET_KEY!.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});
const doc = new GoogleSpreadsheet(
  "12VQyg0P9Q3k5PIhh2YK8kiL8mO8WnVmEXwMjSm7gGxs",
  jwt
);

interface RetrievalObject {
  url: string;
  location: string;
  date: string;
  description: string;
  tags: string;
}

export async function POST() {
  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  // console.log(sheet.title);
  // console.log(sheet.rowCount);

  const rows = await sheet.getRows();

  let outputData = [];

  for (const row of rows) {
    const urls = row.get("Please upload your image here").split(",");
    for (const url of urls) {
      outputData.push({
        url: url.replace("open?", "uc?export=view&").trim(),
        location: row.get(
          "Specific Location (where the photo(s) were taken : Neighborhood, City, State, Country)"
        ),
        date: row.get("Date picture was taken"),
        description: row.get("Short description of the image(s)"),
        tags: row.get("Type of Submission"),
      });
    }
  }
  const count = outputData.length;

  return Response.json({ title: sheet.title, data: outputData, count: count });
}
