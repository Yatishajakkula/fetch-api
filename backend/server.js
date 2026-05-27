const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// route to get photos - using picsum which actually works
app.get("/api/photos", async (req, res) => {
  try {
    const response = await fetch("https://picsum.photos/v2/list?limit=12");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
