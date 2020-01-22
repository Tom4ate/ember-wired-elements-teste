import Controller from '@ember/controller';
import wiredElements from "wired-elements";

export default Controller.extend({
  eu: "Tom4te",

  actions: {
    console(valor){
      console.log(valor);
    }
  }

});
