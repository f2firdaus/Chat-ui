let img_fetch = document.getElementById("img_fetch");
let name_fetch = document.getElementById("name_fetch");
let about_fetch = document.getElementById("about_fetch");
let ur_msg = document.getElementById("ur_msg");
let for_wv_ht = document.getElementById("for_wv_ht");
let for_mine_wv_ht = document.getElementById("for_mine_wv_ht");

let img2 = "./images/img2.jpg";

let main = document.querySelector(".main");

const chatBtn2 = () => {
  img_fetch.src = img2;
  name_fetch.innerHTML = "Reny Delvis";
  about_fetch.innerHTML = "Genius,Billionaire,Playboy,Philanthropist";
  ur_msg.innerHTML =
    "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?";
  for_wv_ht.classList.add("ur_msg_al");
  for_mine_wv_ht.classList.add("mine_wv_ht");
  for_wv_ht.classList.remove("mine1_msg");
  for_mine_wv_ht.classList.remove("mine2_msg");
  main.classList.add("active");
};



let img1 = "./images/img1.jpg";

const chatBtn = () => {
  img_fetch.src = img1;
  name_fetch.innerHTML = "John Mayers";
  about_fetch.innerHTML = "Account Manager";
  ur_msg.innerHTML = `Hi guys Ive got the O2 package and have really slow internet.
                        A speed check online said i can get 3mbps but it seems more 
                        like 0.5 these days, just freezing and taking ages to open
                        pages and open audio files for example. I have decided to switch
                        to the UPC package which offers 10mbps but do you think i will get it?`;
  for_wv_ht.classList.add("mine1_msg");
  for_mine_wv_ht.classList.add("mine2_msg");
  for_wv_ht.classList.remove("ur_msg_al");
  for_mine_wv_ht.classList.remove("mine_wv_ht");
  main.classList.add("active");
};


var links = document.querySelectorAll(".left_sub");

links.forEach((li) => {
  li.addEventListener("click", () => {
    resetLinks();
    li.classList.add("active");
  });
});

function resetLinks() {
  links.forEach((li) => {
    li.classList.remove("active");
  });
}



let cross = document.querySelector(".cross");

cross.addEventListener("click", () => {
  main.classList.remove("active");
});
