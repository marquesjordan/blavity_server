const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  groupName: { type: String, unique: true},
  articles: { type: [{
    id: { type: String, default: "" },
    title: { type: String, default: "" },
    link: { type: String, default: "" }
  }], default: [] },
});

mongoose.model('news', newsSchema);
