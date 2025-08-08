document.addEventListener("DOMContentLoaded", function() {
  const card = document.getElementById("card");
  const audio = document.getElementById("audio");

  card.addEventListener("mouseenter", function() {
      audio.play();
  })
});

document.getElementById("gift").classList.add("hidden");

let candlecount = 0;
const gift = document.getElementById("gift");

gift.classList.add("hidden");

function hideButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('hidden');

    candlecount = candlecount + 1;

    if (candlecount == 15) {
      gift.classList.remove("hidden")
      gift.classList.add("visible")
      gift.classList.add("addzindex")
      gift.classList.add("giftgrow");

    } else {
      gift.classList.add("hidden")
      gift.classList.remove("visible")
    }
}   

//function onclickoutside(buttonId) {
  //  const button = document.getElementById(buttonId);
    //const card = document.getElementById()

//}

function stopAnim() {
  const button = document.getElementById("noanimbutton")
  const card = document.getElementById("card")
  const outside = document.getElementById("outside")
  card.classList.add("noanim")
  outside.classList.add("noanim")


  
}

function startAnim() {
  const button = document.getElementById("yesanimbutton")
  const card = document.getElementById("card")
  const outside = document.getElementById("outside")
  card.classList.remove("noanim")
  outside.classList.remove("noanim")
  

}

function openPresent() {
  const gift = document.getElementById("gift");
  gift.classList.add("giftshrink");
  gift.classList.remove("giftgrow");
  //work on later
  document.getElementById("giftcontentimg").classList.add("visible");
  document.getElementById("giftcontentimg").classList.add("addzindex");
  document.getElementById("giftcontentimg").classList.add("giftgrow2");

 
  
}

function clickin() {
  const giftcontentimg = document.getElementById("giftcontentimg");
  giftcontentimg.classList.add("hidden");
  giftcontentimg.classList.remove("visible");
  giftcontentimg.classList.remove("addzindex");
  giftcontentimg.classList.remove("giftgrow2");

  const card = document.getElementById("card");
  card.classList.add("addzindex2");



}

