const landingEl = document.querySelector('.landing');
const polygonEl = document.querySelector('.polygon');
const pfpContainerEl = document.querySelector('.pfp-container');
const aboutSecContainerEl = document.querySelector('.about-sec-content');
const clientsReviewsArticle = document.getElementById('clients-reviews-article');
// const sec1 = document.querySelector('.sec-1');
const sectionEls = document.querySelectorAll('.section');

AOS.init();

// landingEl.style.height = `${polygonEl.offsetHeight + pfpContainerEl.offsetHeight}px`;
// console.log("landingEl.style.height: " + landingEl.style.height);
// console.log("polygonEl.offsetHeight: " + polygonEl.offsetHeight);
// console.log("pfpContainerEl.offsetHeight: " + pfpContainerEl.offsetHeight);

let originalClipPath = polygonEl.style.clipPath;
let originalWidth = polygonEl.style.width;
window.addEventListener('scroll', (e) => {
  // polygonEl.style.position = 'fixed';
  // console.log(window.scrollY, window.innerHeight);
  // console.log(sec1.scrollTop, sec1.clientTop, sec1.style.top /*- window.scrollY*/);
  if (window.innerWidth >= 666) {
    // if (window.scrollY > 10) {
    //   polygonEl.style.width = '50%';
    //   polygonEl.style.clipPath = `polygon(0 0,
    //     100% 0,
    //     100% 100%,
    //     0% 100%,
    //     0% 0%)`
    //   // polygonEl.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    // } else {
    //   polygonEl.style.width = originalWidth;
    //   polygonEl.style.clipPath = originalClipPath;
    // }

    if (window.scrollY >= window.innerHeight) {
      // polygonEl.style.transform = 'translateY(-100%)';
      // sectionEls.forEach((sectionEl) => {
      //   // console.log(sectionEl);
      //   sectionEl.style.width = 'auto';
      // });
      if (window.innerWidth <= 1024) {
        console.log(window.innerWidth)
        aboutSecContainerEl.style.flexDirection = 'column';
      } else {

        aboutSecContainerEl.style.flexDirection = 'row';
      }
    } else {

      if (window.innerWidth <= 1024) {
        console.log(window.innerWidth)
        aboutSecContainerEl.style.flexDirection = 'column';
      } else {

        aboutSecContainerEl.style.flexDirection = 'row';
      }
      // polygonEl.style.transform = 'translateY(0%)';
      // sectionEls.forEach((sectionEl) => {
      //   // console.log(sectionEl);
      //   sectionEl.style.width = '50%';
      // });
    }

  }


  // console.log("window.scrollY: " + window.scrollY);
  // console.log(landingEl.offsetHeight - window.scrollY);
  // console.log("polygonEl.offsetHeight: " + polygonEl.offsetHeight);
});

// polygonEl.addEventListener('scroll', (e) => {
//   e.preventDefault()
// })

let clientsReviews = [
  {
    name: 'gilesshaxted',
    pfp: null,
    country: 'United Kingdom',
    type: 'Individual',
    review: 'Prasant is a brilliant discord bot creator. He goes above and beyond creating bots that not only do what you want but often do more than you imagine. I would not hesitate to work with him again for anything. He knows what he is doing and figures out new things when needed.'
  },
  {
    name: 'mross2196',
    pfp: null,
    type: 'Individual',
    country: 'United States',
    review: 'Prasant is super talented and incredibly resourceful. He is also very patient with your demands and will take the time to implement feedback and update his work accordingly. I highly recommend his services! This guy is a living legend.'
  },
  {
    name: 'tr0n9h',
    pfp: null,
    country: 'United States',
    type: 'Individual',
    review: 'Outstanding developer A+++. Something started as an easy task turn into a much longer task. The developer reproduced what I had from scratch and make it more efficient and much faster using another platform to host my code. He spent half the day with me making sure I was satisficed. He had a great attitude from the beginning to the very end. I have many project ideas and I will definitely contact him first when I am ready. I have worked with dozen of Fiverr developers and decodeprasant definitely stand at the top of my list. '
  },
  {
    name: 'volcano_4808',
    pfp: null,
    country: 'United States',
    type: 'Individual',
    review: 'This is a great seller! They made it perfectly to fit my needs and they added/changed everything I needed. I am astonished with the work and will be coming back if I ever need a discord bot again.'
  },
  {
    name: 'ersin1996',
    country: 'Netherlands',
    pfp: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4cb2dcf9e768849590c4aff0f7a76311-804348121622052299289/JPEG_20210526_200457_4411670563962880484.jpg',
    type: 'Individual',
    review: 'Great sellers great talent!'
  }
]

clientsReviewsArticle.innerHTML = "";
clientsReviews.forEach((cr) => {
  let clientReviewEl = `
  <section class="sec-section cr-sec">
              <div class="client-review-head-container">
                <div class="client-review-head">
                  <div class="client-review-head-img">
                    <img src="${cr.pfp || './default-user-image.png'}" alt="client-review-head-img"
                      class="client-review-img">
                  </div>
                  <div class="client-review-head-name">
                    <h5 class="client-review-name">${cr.name}</h5>
                    <p class="client-review-title">${cr.type || ''}${(cr.type && cr.country) ? ` <span style="color:#7FC1E3;">|</span> ${cr.country}` : (cr.country || '')}</p>
                  </div>
                </div>
              </div>
              <div class="client-review-content">
                ${cr.review}
              </div>
            </section>
  `;
  clientsReviewsArticle.innerHTML += clientReviewEl;
});