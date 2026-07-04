const mongoose = require("mongoose");
const Listing = require("../models/listings");
const initData = require("./data");
main()
  .then(() => console.log(`connection successful`))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initalized");
};
initDb();
