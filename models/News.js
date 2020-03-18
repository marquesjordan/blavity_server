const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, default: "" },
  description: { type: String, default: ""},
  urlToImage: { type: String, default: "" },
  url: { type: String, default: "" },
});

mongoose.model('news', newsSchema);
