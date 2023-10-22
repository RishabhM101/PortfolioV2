

window.addEventListener('load', function() {
  var overlay = document.querySelector('.overlay');
  var loadedImages = 0;

  function checkIfImagesLoaded() {
      loadedImages++;
      if (loadedImages === 2) {
          overlay.style.display = 'none';
          document.body.classList.add('loaded');
      }
  }

  var img1 = new Image();
  img1.src = "images/bg_final1.webp"
  img1.onload = checkIfImagesLoaded;

  var img2 = new Image();
  img2.src = "images/rocket_final.webp";
  img2.onload = checkIfImagesLoaded;
});



window.addEventListener('scroll', function () {
  var menuContainer = document.querySelector('.menu-toggle')
 
  if (window.scrollY >= window.innerHeight) {
      menuContainer.style.opacity = 1;}
   

});



                        //Toggle Menu

function toggleMenuOff(){
  toggleMenu()
}
function toggleMenu() {

  // Toggle overlay
  var overlay = document.getElementById('menu-overlay');
  var menucont = document.getElementById('menu-container');

  if (overlay) {
    if (overlay.style.opacity == 0) {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        menucont.style.visibility = 'visible';
        
    } else {
        
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
        menucont.style.visibility = 'hidden';
    }
}

  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.classList.toggle('active');
  
  const menuContainer = document.getElementById('menu-container');
  menuContainer.classList.toggle('hidden');
  menuContainer.style.opacity = 1;

 
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item, index) => {
      setTimeout(() => {
          item.classList.toggle('active');
      }, index * 100);
  });
}


                        //Animated Text

window.onload = function() {

  let animationContainer = document.querySelector('.animated-title');
  let textData = animationContainer.getAttribute('aria-label');

  function splitWords() {
    let splitedText = textData.split(' ');
  
    splitedText.join('& &').split('&').forEach(function(e){
      let span = document.createElement('span');
      span.classList.add('animated-word');
      span.setAttribute('data-text', e); 
      animationContainer.appendChild(span);
    });
    splitLetters();
  }

  function splitLetters() {
    let animatedWords = document.querySelectorAll('.animated-word');
    animatedWords.forEach(function(e, i){
      e.getAttribute('data-text').split('').forEach(function(f, j) {
        f = f == ' ' ? '&#32;' : f;
        let span = document.createElement('span');
        span.classList.add('animated-element');
        span.setAttribute('aria-hidden', 'true'); 
        span.innerHTML = f;
        e.appendChild(span);
      });
      animate(e, i);
    })
  }

  function animate(e, i) {
    let wordCount = e.getAttribute('data-text').length;
    e.style.opacity = 1;
    e.classList.add('animate');
  }
 
  splitWords();

                        
  
                                //Animated Paragraph

  function animateParagraphs() {
    let paragraphs = document.querySelectorAll('.animated-paragraph');
    let delay = 0;

    paragraphs.forEach(function(p, i){
        setTimeout(function() {
            p.style.opacity = 1;
        }, delay);
        delay += 1500; 
    });
}


setTimeout(function() {
    animateParagraphs();
}, 4000); //
}





                      // hidden my work box
window.onscroll = function() {
  var logo = document.querySelector('.logo');
  var textBox = document.querySelector('.text-box');
  var logoPosition = logo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3; // Adjust as needed

  if(logoPosition < screenPosition) {
      textBox.style.opacity = '1';
  } else {
      textBox.style.opacity = '0';
  }
};

                      //rocket launch
var rocketImage
var rocketImage;
function preloadImage() {
    rocketImage = new Image();
    if (window.matchMedia("(max-width: 768px)").matches) {
      
        rocketImage.src = 'images/Rocket_launch_final.webp';
    } else {
  
        rocketImage.src = 'images/Rocket_launch_final.webp';
    }
    rocketImage.onload = function() {
        console.log('Image preloaded');
    }
}
preloadImage();

                    

function animateBackground() {

  var countdownContainer = document.getElementById('countdown');
  var rocketContainer = document.getElementById('rocketContainer');
  var headingElement = document.getElementById('headingText');


  countdownContainer.style.display = 'none';


  rocketContainer.classList.add('jitter-animation');

  

  setTimeout(function() {
    document.getElementById('headingText').style.display = 'none';
}, 1100);

setTimeout(function() {
    document.getElementById('launchText').style.display = 'block';
}, 1500);


  var fixedBackground = document.querySelector('.fixed-background');
  var body = document.body;



  if (window.matchMedia("(max-width: 768px)").matches) {

    fixedBackground.style.backgroundImage = "url('images/rocket_final.webp')";
} else {

    fixedBackground.style.backgroundImage = "url('images/bg_final1.webp')";
}

  body.style.backgroundImage = 'url(' + rocketImage.src + ')';

  //moving rocket up
  var element = document.getElementsByTagName("body")[0];
  element.style.animationName = "moveUp";
  element.style.animationDuration = "1s";
  element.style.animationTimingFunction = "linear";
  element.style.animationFillMode = "forwards";

  var keyframes = "@keyframes moveUp { 0% { background-position-y: 0px; } 100% { background-position-y: calc(-100vh + 100%); } }";
  var styleSheet = document.createElement("style");


  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

}



function startCountdown() {
  var button = document.querySelector('.big-button');
  var countdownContainer = document.getElementById('countdown');
  var countdownTimer = document.getElementById('countdownTimer');


  button.style.display = 'none';


  countdownContainer.style.display = 'block';

  // Start countdown
  var count = 4;

  var countdownInterval = setInterval(function() {
      count--;
      if (count >= 0) { 
          countdownTimer.textContent = count;
      } else {
          countdownTimer.textContent = 'Launch';
          clearInterval(countdownInterval);

         
          animateBackground()
          
      }
  }, 700);
}


