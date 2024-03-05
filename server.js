import app from "./app.js";
import { config } from "dotenv";

config({ path: "./.env" });

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
