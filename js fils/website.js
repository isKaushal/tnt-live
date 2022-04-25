// ---------------------------Header class toggle-------------------//

let header = document.getElementById("header")
  

  window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 100) {
      header.classList.add("color");
    }else{
      header.classList.remove("color");
    }
  })

  // ---------------------------Header class toggle-------------------//
// ------------------------header ul end---------------------------//
// ------------------------preloder html---------------------------//

let preloder  = document.getElementById("preloder-container-wrap");

preloder.innerHTML = `
  <div class="preloder-container">
  <div class="second-container">
    <div class="first-icon">
      <div class="first-icon-inner">
        <div class="first-icon-inner-cut"></div>
      </div>
    </div>
    <div class="second-icon">
      <div class="second-icon-inner">
        <div class="second-icon-inner-cut"></div>
      </div>
    </div>
  </div>
  </div>
`


// ------------------------preloder html---------------------------//
// ------------------------background theme---------------------------//

let theme = document.getElementById("main");
theme.innerHTML = `
  <div id="ani">
    <div class="dot1"></div>
    <div class="dot2"></div>
    <div class="dot3"></div>
    <div class="dot4"></div>
    <div class="dot5"></div>
    <div class="dot6"></div>
    <div class="dot7"></div>
    <div class="dot8"></div>
    <div class="dot9"></div>
    <div class="dot10"></div>
    <div class="dot11"></div>
    <div class="dot12"></div>
    <div class="dot13"></div>
    <div class="dot14"></div>
    <div class="dot15"></div>
    <div class="dot16"></div>
    <div class="dot17"></div>
    <div class="dot18"></div>
    <div class="dot19"></div>
    <div class="dot20"></div>
  </div>
  <div class="container">
    <div class="corner-circle1"></div>
    <div class="corner-circle2"></div>
    <div class="corner-circle3"></div>
    <div class="corner-circle4"></div>
    <div class="corner-circle5"></div>
    <div class="corner-circle6"></div>
    <div class="corner-circle7"></div>
    <div class="corner-circle8"></div>
    <div class="corner-circle9"></div>
    <div class="corner-circle10"></div>
    <div class="corner-circle11"></div>
    <div class="corner-circle12"></div>
    <div class="corner-circle13"></div>
    <div class="corner-circle14"></div>
  </div>`;

// ------------------------background theme---------------------------//
// ------------------------Awards saction---------------------------//

let image = document.getElementById("awards-images");

setTimeout(() => {
  image.style.display = "flex"
}, 3500);

// ------------------------Awards saction---------------------------//
//---------------------------------- IS IN VIEW PORT FUNCTON START------------------------------------//

const Box = document.getElementById("box");
const Boxes = document.getElementById("boxes");
const My = document.getElementById("animation");
const circle = document.getElementById("amimate_circle");
const Percentage = document.getElementById("percentage-number-container");


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('scroll', () =>  {
  const isVisible = isInViewport(circle);
  const Visible = isInViewport(My);
  const IsVisible = isInViewport(Box);
  const Have = isInViewport(Boxes);


  if(isVisible) {
    if (!circle.hasChildNodes()) {
      circle.insertAdjacentHTML("afterbegin", `
      <div class="animation-wrap" id="animation-wrap">
          <div class="animation" id="animation">
              <div class="matrial" id="matrial">
                  <img src="images/1.png" alt="">
              </div>
          </div> 
      </div>
      `)
    }
  }

  if(Visible) {
      if (!My.hasChildNodes()) {
        My.insertAdjacentHTML("afterbegin",`
        <div class="first-circle">
          <div class="second-circle">
            <img src="images/2.png" alt="">
          </div>
        </div>
      `)
     }
  }  

  if(IsVisible) {
    if (!Box.hasChildNodes()) {
      Box.insertAdjacentHTML("afterbegin",`
        <div class="box-wrap1">
          <div class="box">
            <i class="fas fa-bolt"></i>
            <H2> Question Bank</H2>
            <p>Thousands of questions for students practice and making paper creation process stress free via
              TestnTrack.</p>
          </div>
        </div>
        <div class="box-wrap2">
          <div class="box">
            <i class="fas fa-home"></i>
            <h2>Customized Tests</h2>
            <p>Automated customized tests are offered by TestnTrack based on previous performances of
              students.</p>
          </div>
        </div>
        <div class="box-wrap3">
          <div class="box">
            <i class="fas fa-bell"></i>
            <h2>Integrated Study Planner</h2>
            <p>Strategy tailored stitched to your needs for studying effectively.</p>
          </div>
        </div>
      </div>
      `
    )
   }
  }

  if(Have) {
    if (!Boxes.hasChildNodes()) {
      Boxes.insertAdjacentHTML("afterbegin",`
        <div class="box-wrap4">
          <div class="box">
            <i class="fas fa-cog"></i>
            <h2>Adaptive practice</h2>
            <p>AI-driven questions sets for improved output and performance.</p>
          </div>
        </div>
        <div class="box-wrap5">
          <div class="box">
            <i class="fas fa-lock"></i>
            <h2>AI-Based Evaluation</h2>
            <p>Smart analysis to know exactly where you are with the help of AI tools.</p>
          </div>
        </div>
        <div class="box-wrap6">
          <div class="box">
            <i class="fas fa-ad"></i>
            <h2>Demo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis doloribus
              dolore minus.</p>
          </div>
        </div>
    `)
   }
  } 

},{
    passive: true
});


// --------------------------PERCENTAGE SCROLL TRIGGER--------------------------//
// --------------------------FIRST 80% CIRCLE-----------------------------------//

let section1 = document.getElementById("section1");
let offset1 = document.getElementById("offset1");
let percentage1 = document.getElementById("percentage-number1")

gsap.registerPlugin(ScrollTrigger)
gsap.timeline({
  scrollTrigger:{
    trigger:section1,
    trigger:offset1,
    trigger:percentage1,
    

  }
})
  .from("#section1",{y :50, duration:1,opacity:0 ,delay :0.4})
  .from("#offset1", {strokeDasharray:20,duration:5},"<")
  .to("#offset1", {strokeDashoffset:170,duration:5},"<")

// -------------------------------FIRST 70% CIRCLE---------------------------//

let section2 = document.getElementById("section2");
let offset2 = document.getElementById("offset2");
let percentage2 = document.getElementById("percentage-number2");

gsap.registerPlugin(ScrollTrigger)
gsap.timeline({
  scrollTrigger:{
    trigger:section2,
    trigger:offset2,
    trigger:percentage2,
    

  }
})
  .from("#section2",{y :50, duration:1,opacity:0,delay :0.2})
  .from("#offset2", {strokeDasharray:20,duration:5},"<")
  .to("#offset2", {strokeDashoffset:190,duration:5},"<")  

// -------------------------------FIRST 65% CIRCLE---------------------------//

let section3 = document.getElementById("section3");
let offset3 = document.getElementById("offset3");
let percentage3 = document.getElementById("percentage-number3");

gsap.registerPlugin(ScrollTrigger)
gsap.timeline({
  scrollTrigger:{
    trigger:section3,
    trigger:offset3,
    trigger:percentage3,

  }
})
  .from("#section3",{y :50, duration:1,opacity:0 })
  .from("#offset3", {strokeDasharray:20,duration:5},"<")
  .to("#offset3", {strokeDashoffset:220,duration:5},"<") 

// --------------------------PERCENTAGE SCROLL TRIGGER--------------------------//

// percentage counter animation


var a = 0;

$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.percentage-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 5900,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          // alert('complete');
        }
      });
    });
    a = 1;
  }
});

let loding = document.getElementById("preloder-container-wrap")
 
function load() {
  setTimeout(() => {
    loding.style.opacity = 0;
  },3000);
  setTimeout(() => {
    loding.style.display = "none";
  },4000);
}


let arrowBoxList = [
{
  arrowBox: document.getElementById("Most-asked-questions-box-container1"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph1"),
  arrowBtn:document.getElementById("arrowbtn1"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container2"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph2"),
  arrowBtn:document.getElementById("arrowbtn2"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container3"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph3"),
  arrowBtn:document.getElementById("arrowbtn3"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container4"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph4"),
  arrowBtn:document.getElementById("arrowbtn4"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container5"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph5"),
  arrowBtn:document.getElementById("arrowbtn5"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container6"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph6"),
  arrowBtn:document.getElementById("arrowbtn6"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container7"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph7"),
  arrowBtn:document.getElementById("arrowbtn7"),
  isExpanded:true
},
{
  arrowBox: document.getElementById("Most-asked-questions-box-container8"),
  innerBox:  document.getElementById("Most-asked-questions-box-paragraph8"),
  arrowBtn:document.getElementById("arrowbtn8"),
  isExpanded:true
}
];

function ArrowClick(index){
for(let i = 0;i < arrowBoxList.length;i++)
{
  if(i==index)
  {
    if(arrowBoxList[i].isExpanded) {
      arrowBoxList[i].arrowBox.style.height = '15rem';
      arrowBoxList[i].innerBox.style.height = '11rem';
      arrowBoxList[i].isExpanded= false; 
    }else{
      arrowBoxList[i].arrowBox.style.height = '4rem';
      arrowBoxList[i].innerBox.style.height = '0rem';
      arrowBoxList[i].isExpanded = true; 
     
    }
  }else{
    arrowBoxList[i].arrowBox.style.height = '4rem';
    arrowBoxList[i].innerBox.style.height = '0rem';
    arrowBoxList[i].isExpanded = true; 
  }
}
}

//------------------ node mailer start ------------------------------//


  


//------------------ node mailer end------------------------------//