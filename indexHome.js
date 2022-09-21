// start loden
let loader = document.querySelector('.preloader');
window.addEventListener('load' , function(){
  loader.style.display='none'
})
// end loden

// start colors
// start settings
let settings = document.querySelector('.colors');
let icnSet = document.querySelector('.icn');
icnSet.addEventListener('click', () => {
  settings.classList.toggle('left');
});
// end settings

// colors
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector("body");

// window.localStorage.clear()

if (window.localStorage.getItem('color')) {
    //if there is color in local storage
    // [1] add color to div
    exp.style.color = window.localStorage.getItem('color');

    // [2] remove active class from all lis
    lis.forEach((li) => {
        li.classList.remove('active');
    });

    // [3] add active class too current color
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`);
}



lis.forEach((li) => {

    li.addEventListener('click', (e) => {
        //  console.log(e.currentTarget.dataset.color);
        // remove active class from all lis
        lis.forEach((li) => {
            li.classList.remove('active');
        });
        // add active class to current element
        e.currentTarget.classList.add('active');

        // add current color to local storage
        window.localStorage.setItem('color', e.currentTarget.dataset.color);

        //   change div background color 
        exp.style.color = e.currentTarget.dataset.color;
    });
});
// colors
// end colors

// start navbar sticky
let nav = document.querySelector(".nav")
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 100)
})
// end navbar sticky



// start background open nav
const checkBox = document.getElementById('check')
checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    const div = document.createElement('div')
    div.className = 'layout'
    document.body.appendChild(div)
  } else {
    if (document.querySelector('.layout')) {
      document.querySelector('.layout').remove()
    }
  }
});

// start background open nav


// scrol
let scrol = document.querySelector(".scrol");
let stop = document.querySelector("#stopp");
window.addEventListener('scroll' , () =>{
  
  if (this.scrollY >= 1000) {
    scrol.classList.add("show");
  } else {
    scrol.classList.remove("show");
  };

  scrol.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
})


// scrol




// start nums
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".review");
let started = false;
window.addEventListener('scroll' , ()=>{

  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startcount(num));
  
    }
    started = true;
  
  }
  
  function startcount(el) {
    const goal = el.dataset.goal;
    const count = setInterval(() => {
  
      let value = parseInt(el.innerHTML)
      value += 5
      el.innerHTML = value
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }

});
// end nums


// start btn footer
let btnn = document.querySelector('#btn');
let p = document.querySelector("#p-btn");

btnn.addEventListener('click' , () =>{
p.innerHTML="Submitting..."
});
// enf btn footer