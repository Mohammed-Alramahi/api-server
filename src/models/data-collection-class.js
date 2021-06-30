class DataCollection {
  constructor(model) {
    this.model = model;
  }
  read(_id) {
    if (_id) {
      return this.model.find({ _id });
    }
    return this.model.find({});
  }
  create(dataObj) {
    const doc = new this.model(dataObj);
    return doc.save();
  }
  update(_id, dataObj) {
    return this.model.findByIdAndUpdate(_id, dataObj, { new: true });
  }
  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}
module.exports = DataCollection;
