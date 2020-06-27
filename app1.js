import $ from "jquery";
import "./app1.css";
// import "./reset.css";
const $plus = $(".plus");
const $minus = $(".minus");
const $double = $(".double");
const $divide = $(".divide");
const $number = $(".number");
const n = localStorage.getItem("n");
$number.text(n || 100);

$plus.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  $number.text(n);
  localStorage.setItem("n", n);
});
$minus.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  $number.text(n);
  localStorage.setItem("n", n);
});
$double.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  $number.text(n);
  localStorage.setItem("n", n);
});
$divide.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  $number.text(n);
  localStorage.setItem("n", n);
});
