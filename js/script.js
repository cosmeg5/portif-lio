// Portifólio item filter
const filterContainer = document.querySelector(".portifolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portifolioItens = document.querySelectorAll(".portifolio-item"),
      totalPortifolioItens = portifolioItens.length;
      console.log(totalPortifolioItens)
    


      for(let index = 0; index<totalFilterBtn; index++) {
          filterBtns[index].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");
          });
      }