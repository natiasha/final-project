//slider
let imagesslides = ["image/image1.jpg", "image/image2.jpg", "image/image3.jpg"]
let n = 1;
let t = 3000;

function slaider(){
  let slide = document.querySelector(".slider-image img");
  slide.src = imagesslides[n];

  if(n < imagesslides.length - 1){
    n=n+1; 
  }
  else { 
    n = 0;
  }

  setTimeout("slaider()", t);
}
    window.onload=slaider;

    
//recomendation-area
  function batonklickSlider() {
  let clickbutton = document.querySelectorAll(".btn");
  let box = document.querySelectorAll(".recomendation");

  for(let i = 0; i < clickbutton.length; i++){
    clickbuttons[i].addEventListener("click", function() {         
            
            checkForShowClass();

            box[i].classList.add("show");
            console.log(box[i]);

            for(let j = 0; j < box.length; j++) {
                if(!box[j].classList.contains("show")) {
                    box[j].style.display = "none";
                    batonklickSlider[j].style.backgroundColor = "#131A36"; 
                    console.log(batonklickSlider[j])
                    batonklickSlider[j].style.borderStyle = "dashed";
                }  else {
                  box[j].style.display = "flex";
                  console.log(box[j]);
                }
            }
        })
    }

    function checkForShowClass() {
        for(let m = 0; m < box.length; m++) {
            if(box[m].classList.contains("show")) {
                box[m].classList.remove("show");
            } 
        }
    }

}
batonklickSlider()

//filter

function createFilterForProjects() {
    
    let liItem = document.querySelectorAll(".menu-box  ul li");
    let boxItem = document.querySelectorAll('.project-box');
    let smallScreen = window.matchMedia( "(max-width: 768px)" );

    liItem.forEach(li => {
        li.addEventListener("click", function() {
            liItem.forEach(li => {
                li.className = "";
            })
            li.className = "active";

            let value = li.textContent;
            updatedValue = value.replace(/ /g,"_");
            boxItem.forEach(box => {
                box.style.display = "none";
                
                if(box.getAttribute("data-filter") == updatedValue.toLowerCase() || updatedValue == "All") {
                    box.style.display = "flex";
                    
                    if (smallScreen.matches) {
                        box.style.width = "100%";
                        
                    } else {
                        box.style.width = "calc(100% / 2)";
                    }
                    
                }

                if(updatedValue == "All") {
                    box.style.display = "flex";

                    if (smallScreen.matches) {
                        box.style.width = "100%";
                        
                    } else {
                        box.style.width = "calc(100% / 3)";
                    }
                    
                }
            })
        })

        
    })

}

//send-message
function sendMessange() {

    document.querySelector('form').addEventListener('submit', function(e) {
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let website = document.querySelector('#website');
        let messange = document.querySelector('#messange');

        let nameVal = name.value;
        let emailVal = email.value;
        let websiteVal = website.value;    
        let messageVal = messange.value; 

        function send(name, email, website, message){
            fetch('http://api.kesho.me/v1/user-test/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'name=' + encodeURIComponent(name) +'&email=' + encodeURIComponent(email)  +'&website=' + encodeURIComponent(website) +'&message=' + encodeURIComponent(message) 
            })
        }

        send(nameVal, emailVal, websiteVal, messageVal);
        name.value = "";
        email.value = "";
        website.value = "";
        messange.value = "";   

        e.preventDefault();
    });
}
     sendMessange();

