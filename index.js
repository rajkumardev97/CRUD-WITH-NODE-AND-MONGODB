const app = require("./app");
const connectDatabase = require("./config/database");

const PORT = 3001;

connectDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
