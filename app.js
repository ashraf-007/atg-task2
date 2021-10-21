// Importing DOM Elements 
const elTitle = document.getElementById('title')
const elMainTitle = document.getElementById('main-title')
const elDesc = document.getElementById('desc')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const leftSection = document.getElementById('left')
const rightSection = document.getElementById('right')
const svg = document.getElementById('svg')
const pathTexts = document.getElementsByClassName('path-text')
const progressRing = document.getElementById('Opaque_Ring')
const leftParagraph = document.getElementsByClassName('p-width')
const lHeading = document.getElementById('left-heading')
const dots = document.getElementsByClassName('dots-nav')
const rightImages = document.getElementById('right-image')
const nasaImage = document.getElementById('nasa-image')
const cta = document.getElementById('cta')
const mainLabel = document.getElementsByClassName('mainLabel')[0]
console.log('lab',mainLabel)
const percentage = 1000 / 7
const elements = [{
    id: 1,
    title: 'The Next Big',
    mainTitle: 'BLOCKCHAIN',
    desc: 'Revolution',
    leftColor: '#4E27CE',
    rightColor: '#1D0363',
    strokeValue: 10,
    lHeading: 'ABC 789',
    elCta: 'Coming Soon'
  },
  {
    id: 2,
    title: 'Redefining',
    mainTitle: 'Nasa',
    desc: 'and UI Design',
    leftColor: '#17263C',
    rightColor: '#0E131C',
    strokeValue: percentage,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 112',
    elCta: 'Coming Soon'
  },
  {
    id: 3,
    title: 'Biggest Classified',
    mainTitle: 'East Asia',
    desc: 'Countries',
    leftColor: '#01824D',
    rightColor: '#01B76A',
    strokeValue: percentage * 2,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 437',
    elCta: 'View Case Study'
  },
  {
    id: 4,
    title: '',
    mainTitle: '+25 DOWNLOADS',
    desc: 'on app store and google playstore',
    leftColor: '#6211A7',
    rightColor: '#E9ECF3',
    strokeValue: percentage * 3,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 987',
    elCta: 'View Case Study'
  },
  {
    id: 5,
    title: 'Redefining',
    mainTitle: 'UX STRATEGY',
    desc: 'and UI design',
    leftColor: '#17263C',
    rightColor: '#0E131C',
    strokeValue: percentage * 4,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 565',
    elCta: 'Coming Soon',
  },
  {
    id: 6,
    title: 'Text Headline',
    mainTitle: 'TEXT HEADLINE',
    desc: 'Footer headline',
    leftColor: '#022B92',
    rightColor: '#DADAD9',
    strokeValue: percentage * 5,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 234',
    elCta: 'Coming Soon'

  },
  {
    id: 7,
    title: 'Text Headline',
    mainTitle: 'TEXT HEADLINE',
    desc: 'Footer headline',
    leftColor: '#134CA2',
    rightColor: '#2ECDDA',
    strokeValue: percentage * 6,
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus adipisci fugiat culpa quo non in ab incidunt est expedita. Quibusdam nihil aspernatur quae hic sequi magnam nostrum iure repudiandae est?',
    lHeading: 'ABC 098',
    elCta: 'Coming Soon'
 
  }

]
const pWidth = document.getElementsByClassName('p-width')
const els = [elTitle, elDesc, elMainTitle, pWidth, leftParagraph, lHeading]

let i = 0
let windowSize = true

window.addEventListener('wheel', (e) => {
  // Handle Insert Elements and Animations
  handleInsertElementsAndAnimations(e)

  // Handle Stroke Distance
  handleStrokeDistance()

  //Handle Dots Opacity
  handleDotsOpacity()

  //Handle Image Switch
  if (windowSize) {
    handleImageSwitch()
  }
})

// Dots Opacity Function 
function handleDotsOpacity() {
  Array.from(dots).forEach((dot, index) => {
    if (index >= i + 1) {
      dot.style.opacity = '0.5'
    } else {
      dot.style.opacity = '1'
    }
  })
}

// SVG Stroke Length function 
function handleStrokeDistance() {
  switch (i) {
    case 3:
      gsap.to(progressRing, {
        strokeDasharray: (percentage * i - 14)
      });
      break

    case 4:
      gsap.to(progressRing, {
        strokeDasharray: (percentage * i - 35)
      });
      break
    case 5:
      gsap.to(progressRing, {
        strokeDasharray: (percentage * i - 43)
      });
      break

    default:
      gsap.to(progressRing, {
        strokeDasharray: percentage * i - 10
      });
      break
  }
}



// BlockChain animation assets
let blockchain1 = document.getElementsByClassName('blockchain-1')
let blockchain2 = document.getElementsByClassName('blockchain-2')
let tweenBlock1 = gsap.fromTo(blockchain1, {
  y: 300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenBlock2 = gsap.fromTo(blockchain2, {
  y: -300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})

// Nasa Images Animation assets
const nasa1 = document.getElementsByClassName('nasa-1')
const nasa2 = document.getElementsByClassName('nasa-2')
let tweenNasa1 = gsap.fromTo(nasa1, {
  y: 300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenNasa2 = gsap.fromTo(nasa2, {
  y: -300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})

// East Asia Animation assets
const east1 = document.getElementsByClassName('east-1')
const east2 = document.getElementsByClassName('east-2')
let tweenEast = gsap.fromTo([east1, east2 , mainLabel], {
  y: 300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})

//Downloads Animation assets
const download1 = document.getElementsByClassName('download-1')
const download2 = document.getElementsByClassName('download-2')
let tweenDownload1 = gsap.fromTo(download1, {
  y: 300,
  opacity: 0
}, {
  y: -10,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenDownload2 = gsap.fromTo(download2, {
  y: 300,
  opacity: 0
}, {
  y: -10,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
//UX Animation assets
const ux1 = document.getElementsByClassName('ux-1')
const ux2 = document.getElementsByClassName('ux-2')
const ux3 = document.getElementsByClassName('ux-3')
const ux4 = document.getElementsByClassName('ux-4')
const ux5 = document.getElementsByClassName('ux-5')
let tweenUxToRight = gsap.fromTo([ux4, ux5], {
  x: 300,
  opacity: 0
}, {
  x: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenUxUp = gsap.fromTo(ux1, {
  y: 300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenUxDown = gsap.fromTo([ux2, ux3], {
  y: -300,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
//Headline Animation ASSESTS
const head1 = document.getElementsByClassName('headline-1')
let tweenFourniture = gsap.fromTo(head1, {
  y: 200,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})

//Headline 2 Animations assets 
const h1 = document.getElementsByClassName('h1')
const h2 = document.getElementsByClassName('h2')
const h3 = document.getElementsByClassName('h3')
const h4 = document.getElementsByClassName('h4')
const h5 = document.getElementsByClassName('h5')
const h2Images = document.getElementById('headline2-images')
let tweenDown = gsap.fromTo([h3, h5], {
  y: -200,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenUp = gsap.fromTo([h1, h2], {
  y: 200,
  opacity: 0
}, {
  y: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})
let tweenToLeft = gsap.fromTo(h4, {
  x: 300,
  opacity: 0
}, {
  x: 0,
  ease: "power2",
  visibility: 'visible',
  opacity: 1
})


// Images Switch Function
function handleImageSwitch() {
  switch (i) {

    case 0:
      tweenBlock1.play().duration(0.6)
      tweenBlock2.play().duration(0.6)
      tweenNasa1.reverse().duration(0.01)
      tweenNasa2.reverse().duration(0.01)
      tweenEast.reverse()
      tweenDownload1.reverse()
      tweenDownload2.reverse()
      tweenUxToRight.reverse()
      tweenUxUp.reverse()
      tweenUxDown.reverse()
      tweenFourniture.reverse()
      tweenDown.reverse()
      tweenUp.reverse()
      tweenToLeft.reverse()
      break;

    case 1:
      tweenBlock1.reverse().duration(0.2)
      tweenBlock2.reverse().duration(0.2)
      tweenNasa1.play().duration(0.6)
      tweenNasa2.play().duration(0.6)
      tweenEast.reverse().duration(0.2)
      break;

    case 2:
      tweenNasa1.reverse().duration(0.2)
      tweenNasa2.reverse().duration(0.2)
      tweenEast.play().duration(0.6)
      tweenDownload1.reverse().duration(0.01)
      tweenDownload2.reverse().duration(0.01)
      break;

    case 3:
      tweenDownload1.play().duration(0.6)
      tweenDownload2.play().duration(0.6)
      tweenEast.reverse().duration(0.2)
      tweenUxToRight.reverse().duration(0.2)
      tweenUxUp.reverse().duration(0.2)
      tweenUxDown.reverse().duration(0.2)
      break
    case 4:
      tweenUxToRight.play().duration(0.6)
      tweenUxUp.play().duration(0.6)
      tweenUxDown.play().duration(0.6)
      tweenDownload1.reverse().duration(0.2)
      tweenDownload2.reverse().duration(0.2)
      tweenFourniture.reverse().duration(0.2)
      break;

    case 5:
      tweenUxUp.reverse().duration(0.2)
      tweenUxDown.reverse().duration(0.2)
      tweenUxToRight.reverse().duration(0.2)
      tweenFourniture.play().duration(0.6)
      tweenDown.reverse().duration(0.2)
      tweenUp.reverse().duration(0.2)
      tweenToLeft.reverse().duration(0.2)

      break;
    case 6:
      tweenDown.play().duration(0.6)
      tweenUp.play().duration(0.6)
      tweenToLeft.play().duration(0.6)

      tweenFourniture.reverse().duration(0.2)

    default:
      return i

  }
}

// Insert DOM elements and Animations Function 
function handleInsertElementsAndAnimations(e) {

  // Check Mouse event and window Size
  if (e.deltaY === 100 && windowSize === true) {
    // Event for mouse + 
    i++
    // Check i limit
    if (i >= elements.length) {
      i = elements.length - 1
      return

    } else {
      // Insert NASA Heading Image
      if (i == 1) {
        elMainTitle.innerHTML = `<img id='nasa-image' src="./assets/nasa-mobile-app.png" alt="">`

      }else{ 

        // Injecting Dom Elements + Background Animations
        elTitle.innerText = elements[i].title
        elDesc.innerText = elements[i].desc
        elMainTitle.innerText = elements[i].mainTitle
        lHeading.innerText = elements[i].lHeading
      }
        //  Background Animations
        gsap.to([leftSection, svg], {
          backgroundColor: elements[i].leftColor,
          opacity: 1,
          ease: 'power1',
          duration: 0.5
        })
        gsap.to(rightSection, {
          backgroundColor: elements[i].rightColor,
          opacity: 1,
          ease: 'power1',
          duration:0.5
        })
      cta.innerText = elements[i].elCta

      // Stagger Left Elements Animation
      if (windowSize === true) {
        gsap.fromTo(els, {
          y: -70,
          stagger: 0.05,
          ease: 'power1'
        }, {
          y: 0
        })
      }
      // cta button Animation
      gsap.fromTo(cta, {
        opacity: 0,
        transform: 'scale(0)',
        ease: 'power4'
      }, {
        opacity: 1,
        transform: 'scale(1)',
        ease: 'power4'
      })
    }
  }

  if (e.deltaY === -100) {
    // Event for mouse -
    i--
    // Check i limit
    if (i < 0) {
      i = 0

    } else {
      if (i == 1) {
        // Insert NASA Heading Image
        elMainTitle.innerHTML = `<img id='nasa-image' src="./assets/nasa-mobile-app.png" alt="">`
      } else {

        // Injecting Dom Elements 
        elTitle.innerText = elements[i].title
        elMainTitle.innerText = elements[i].mainTitle
        elDesc.innerText = elements[i].desc
        rightSection.style.backgroundColor = elements[i].rightColor
        lHeading.innerText = elements[i].lHeading
      }
      cta.innerText = elements[i].elCta
      //  Background Animations
      gsap.to([leftSection, svg], {
        backgroundColor: elements[i].leftColor,
        opacity: 1,
        ease: 'power1',
        duration: 0.5
      })
      gsap.to(rightSection, {
        backgroundColor: elements[i].rightColor,
        opacity: 1,
        ease: 'power1',
        duration: 0.5
      })

      //Stagger Left Elements
      if (windowSize === true) {
        gsap.fromTo(els, {
          y: 70,
          stagger: 0.05,
          ease: 'power1'
        }, {
          y: 0
        })
      }
      // cta button animations 
      gsap.fromTo(cta, {
        opacity: 0,
        transform: 'scale(0)',
        ease: 'power4'
      }, {
        opacity: 1,
        transform: 'scale(1)',
        ease: 'power4'
      })
    }
  }
  mainLabel.style.display = i == 2 ? 'block' : 'none'

}



window.addEventListener('load', handleImageSwitch)

// Activating Owl Carousel 
$('.owl-carousel').owlCarousel({
  nav: true,
  items: 1,
})
// Handle Window Sizing 
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    windowSize = true
  } 
  if(window.innerWidth <= 600) {
    windowSize = false
  }

})