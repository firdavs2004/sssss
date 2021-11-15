const imgs = document.querySelectorAll('.img-selector a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem)>{
  imgItem. addEvenListener('click',(event)>{
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
  });
});

function slideImage(){
    const displayWidth =document.querySelector('.img-showcase:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform =`translateX(${-(imgId-1) *displayWidth }px)`;
}