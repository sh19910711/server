import NavBar from "components/navbar"
import List from "components/list"

export default {
  name: "home",
  template: require("./home.html"),
  components: {
    "nav-bar": NavBar,
    "simple-list": List
  },
  data() {
    return {
      "apps": []
    }
  },
  created() {
    this.apps = [
    {
      title: "led-blink",
      menu: [{
        title: "delete",
        link:  "/somewhere"
      }]
    },
    {
      title: "led-blink",
      menu: [{
        title: "delete",
        link:  "/somewhere"
      }]
    },
    {
      title: "led-blink",
      menu: [{
        title: "delete",
        link:  "/somewhere"
      }]
    }
    ];
  }
}
