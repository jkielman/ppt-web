function base() {

    console.log('run');

const DOM = {
    phone: document.getElementById('phone'),
    vid1: document.getElementById('video__one'),
    vid2: document.getElementById('video__two'),
    getTitle: document.getElementById('titletag')
}

const selectors = {
	utility: document.querySelectorAll('.utility')
}

const colorArray = ['#44E3C1', '#FC5A4C', '#FB4AAC'],
      randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

Array.from(selectors.utility).forEach(utilityTitle => {

    utilityTitle.addEventListener('mouseover', function() {

    DOM.getTitle.innerHTML = `${this.title}`;
    DOM.getTitle.style.color = randomColor;
    this.classList.className = 'scale--selected';

    }, false);

});



let current = 0,
    utilityCount = selectors.utility.length;

DOM.getTitle.innerHTML = selectors.utility[current].title;
DOM.getTitle.style.color = randomColor;

selectors.utility[current].classList.add('scale--selected');

const timer = setInterval(() => {

   const randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

         selectors.utility[current].classList.remove('scale--selected');

            if (current>=utilityCount - 1) {
                current = 0
            } else {
                current++
            }

          console.log(selectors.utility[current].title);

          DOM.getTitle.innerHTML = selectors.utility[current].title;

          DOM.getTitle.style.color = randomColor;

          selectors.utility[current].classList.add('scale--selected');

        }, 6000);



let scrollPos = window.scrollY;

  window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;

      if(scrollPos > 320){
          DOM.phone.classList.add('fix');
      } else {
          DOM.phone.classList.remove('fix');
      }

      if(scrollPos > 500){
          DOM.vid1.classList.remove('opac--full'), DOM.vid2.classList.add('opac--full');
      } else {
          DOM.vid1.classList.add('opac--full'), DOM.vid2.classList.remove('opac--full');
      }
      console.log(scrollPos);
  });

};

export default base;
