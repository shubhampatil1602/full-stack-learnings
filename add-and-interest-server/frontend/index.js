const result = document.getElementById("result");
const result2 = document.getElementById("result2");

async function add() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const API = "http://localhost:3000/add?a=" + a + "&b=" + b;
  try {
    const fetchAPI = await fetch(API);
    if (!fetchAPI.ok) {
      throw new Error(`HTTP error! Status: ${fetchAPI.status}`);
    }
    const res = await fetchAPI.text();
    if ((a === "" && b === "") || a === "" || b === "") {
      alert("Please input numbers");
    } else {
      result.innerHTML = `<h3>Solution: ${res}</h3>`;
    }
  } catch (e) {
    result.innerHTML = `${e} -> Sorry for moye moye moment :(`;
  }
}

// http://localhost:3000/interest?principle=10000&rate=10&time=2
async function interest() {
  const a = document.getElementById("principle").value;
  const b = document.getElementById("rate").value;
  const c = document.getElementById("time").value;
  const API =
    "http://localhost:3000/interest?principle=" +
    a +
    "&rate=" +
    b +
    "&time=" +
    c;
  try {
    const fetchAPI = await fetch(API);
    if (!fetchAPI.ok) {
      throw new Error(`HTTP error! Status: ${fetchAPI.status}`);
    }
    const res = await fetchAPI.json();

    if (
      (a === "" && b === "" && c === "") ||
      a === "" ||
      b === "" ||
      c === ""
    ) {
      alert("Please provide input");
    } else {
      result2.innerHTML = `<h3>Your total profit is ₹${res.total} and Interest is ₹${res.interest}</h3>`;
    }
  } catch (e) {
    result2.innerHTML = `${e} -> Sorry for moye moye moment :(`;
  }
}
