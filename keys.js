AFRAME.registerComponent("pageturn", {
  schema: {
    pages: {
      type: "array",
      default: [
        { page: "page1", color: "#d471aa" },
        { page: "page2", color: "#d471aa" },
        { page: "page3", color: "#d471aa" },
        { page: "page4", color: "#d471aa" },
        { page: "page5", color: "#d471aa" },
      ],
    },
    pageIndex: { type: "int", defualt: 0 },
  },
  init: function () {
    var pageEl = (this.pageEl = document.querySelector("[layer]"));
    pageEl.object3D.position.set(0, 1.8, -2.5);
    var pageIndex = this.data.pageIndex;
    window.addEventListener("keydown", (e) => {
      if ((e.key === "ArrowRight") & (pageIndex < 4)) {
        pageIndex += 1;
        this.turnPage(pageIndex);
      }
      if ((e.key === "ArrowLeft") & (pageIndex > 0)) {
        pageIndex -= 1;
        this.turnPage(pageIndex);
      }
    });
  },
  turnPage: function (pageIndex) {
    var pages = this.data.pages;
    var pageId = pages[pageIndex].page;
    var color = pages[pageIndex].color;
    this.pageEl.setAttribute("layer", "src", "#" + pageId);
    this.el.sceneEl.setAttribute("background", "color", color);
  },
});
