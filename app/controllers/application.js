import Controller from '@ember/controller';
import wiredElements from "wired-elements";

export default Controller.extend({
  eu: "Tom4te",
  init(){
    this._super();
    console.log(wiredElements);
  }
});
