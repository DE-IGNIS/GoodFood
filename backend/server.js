const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "*",
  }),
);

app.get("/api", async (req, res) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
