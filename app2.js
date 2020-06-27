import $ from "jquery";
import "./app2.css";
const $tabar = $(".tab-bar");
$tabar.on("click", "div", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  console.log(index);
  $(".tab-content")
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
