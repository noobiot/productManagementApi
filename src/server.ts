import "dotenv/config";
import app from "./app.js";
import { environment } from "./config/env.js";

const port = Number(process.env.PORT ?? 3000);

app.listen(environment.PORT, ()=> {
    console.log(`The APP is listening on port ${environment.PORT} \n`);
});