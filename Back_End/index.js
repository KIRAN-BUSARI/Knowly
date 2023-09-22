require("dotenv").config();

const PORT = process.env.PORT || 5004;

const app = require("./app");

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
