// Portifólio item filter
const filterContainer = document.querySelector(".portifolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portifolioItens = document.querySelectorAll(".portifolio-item"),
      totalPortifolioItens = portifolioItens.length;

      for(let index = 0; index<totalFilterBtn; index++) {
          filterBtns[index].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for (let k = 0; k < totalPortifolioItens; k++) {
                  if(filterValue === portifolioItens[k].getAttribute("data-category")) {
                    portifolioItens[k].classList.remove("hide")
                      portifolioItens[k].classList.add("show");
                  } else {
                    portifolioItens[k].classList.remove("show");
                    portifolioItens[k].classList.add("hide");
                  }

                  if(filterValue == "all") {
                    portifolioItens[k].classList.remove("hide")
                      portifolioItens[k].classList.add("show");  
                  }
              }
          });
      }


// Portifolio Lightbox

const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-count");
let itemIndex = 0;

for(let i = 0; i<totalPortifolioItens; i++) {
    portifolioItens[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

const $prevItem = lightbox.querySelector(".prev-item");
const $nextItem = lightbox.querySelector(".next-item");
const $closeItem = lightbox.querySelector(".fa-close");

lightbox.addEventListener("click",function(event){
   if(event.target === $closeItem) {
    toggleLightbox();
   }
});

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

$prevItem.addEventListener("click", function(){
    if(itemIndex === 0) {
        itemIndex = totalPortifolioItens-1;
    } else {
        itemIndex--;
    }
    changeItem();
});

$prevItem.addEventListener("click", function(){
    if(itemIndex === 0) {
        itemIndex = totalPortifolioItens-1;
    } else {
        itemIndex--;
    }
    changeItem();
});

$nextItem.addEventListener("click", function(){
    if(itemIndex === totalPortifolioItens-1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
});

function changeItem() {
    imgSrc = portifolioItens[itemIndex].querySelector(".portifolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portifolioItens[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortifolioItens;
}

//Aside Navbar

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalAllSection = allSection.length;

for(let i = 0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let i = 0; i<totalAllSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j = 0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")

        showSection(this);
    })
}

function showSection(element){
    for(let i = 0; i<totalAllSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

      navTogglerBtn.addEventListener("click",() => {
          asideSectionTogglerBtn();
      })

      function asideSectionTogglerBtn(){
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
      }