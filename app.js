const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/contacts");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use("/api/contacts", contactsRouter);

app.listen(2500);
