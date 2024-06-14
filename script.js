AFRAME.registerComponent("yellow-on-click", {
    init() {
      var isYellow = false;
      this.el.addEventListener("click", () => {
        if (!isYellow) {
          this.el.setAttribute("color", "#F4D634");
          isYellow = true;
        } else {
          this.el.setAttribute("color", "#E75A87");
          isYellow = false;
        }
      });
    },
  });