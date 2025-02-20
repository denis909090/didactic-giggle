const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const makeImgFromObj = (images) => {
//   for (const img of images) {
//     const imgEl = document.createElement("img");
//     imgEl.setAttribute("alt", img.alt);
//     imgEl.setAttribute("url", img.url);
//     const gallery = document.querySelector(".gallery");
//     gallery.appendChild(imgEl);
//     return imgEl
//   }
// };

// makeImgFromObj(images);

// function makeImg(images) {
//   for (const image of images) {
//     const imgEl = `<img src='${image.url}' alt='${image.alt}' width='200px'>`;
//     const liEl = `<li>${imgEl}</li>`;
//     const ulEl = document.querySelector('.gallery')
//     ulEl.insertAdjacentHTML('afterbegin', liEl)
//   }
// }

// makeImg(images);

const makeImgFromObj = (imagesObj) => {
  for (const image of imagesObj) {
    const imgEl = `<img src='${image.url}' alt='${image.alt}' width='200px'>`;
    const liEl = `<li>${imgEl}</li>`;
    const ulEl = document.querySelector(".gallery");
    ulEl.insertAdjacentHTML("afterbegin", liEl);
  }
};

makeImgFromObj(images);
