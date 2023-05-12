const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.listen(2500);
