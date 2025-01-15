// Digital Tashbeeh Country

var clickBtn = document.querySelector("#click");

var count = 0;

clickBtn.addEventListener("click", function() {
  count++;
  document.querySelector("#forCountry h1").innerHTML = count;
});

var restBtn = document.querySelector("#restCount");

restBtn.addEventListener("click", function() {
  count = 0;
  document.querySelector("#forCountry h1").innerHTML = count;
});