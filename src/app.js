/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function genRandomExcuse() {
    let who = ["The Cat", "My grandpa", "His Monkey", "My Dog"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the computer", "the bike"];
    let when = [
      "before the job",
      "right on time",
      "when I walked",
      "during my dinner",
      "while I was playing"
    ];
    var randomWho = who[Math.floor(Math.random() * who.length)];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    var randomWhat = what[Math.floor(Math.random() * what.length)];
    var randomWhen = when[Math.floor(Math.random() * when.length)];
    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  }
  const renderExcuse = () => {
    document.querySelector("#excuse").innerHTML = genRandomExcuse();
  };
  document.querySelector("#btn").addEventListener("click", renderExcuse);
  renderExcuse();
};
