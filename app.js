const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const products = [
    {
      id: 1,
      title: "Pace",
      price: 119,
      colors: [
        {
          code: "gray",
          img: './img/pace.png',
        },
        {
          code: "black",
          img: "./img/pace1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Lite Racer 2.0",
      price: 149,
      colors: [
        {
          code: "black",
          img: "./img/literacer.png",
        },
        {
          code: "rgb(91, 91, 223)",
          img: "./img/literacer1.png",
        },
      ],
    },
    {
      id: 3,
      title: "Grand",
      price: 109,
      colors: [
        {
          code: "white",
          img: "./img/grand.png",
        },
        {
          code: "black",
          img: "./img/grand1.png",
        },
      ],
    },
    {
      id: 4,
      title: "Predator",
      price: 129,
      colors: [
        {
          code: "rgb(192, 42, 92)",
          img: "./img/predator.png",
        },
        {
          code: "rgb(7, 7, 129)",
          img: "./img/predator1.png",
        },
      ],
    },
    {
      id: 5,
      title: "Stride",
      price: 99,
      colors: [
        {
          code: "rgb(163, 2, 2)",
          img: "./img/stride.png",
        },
        {
          code: "greenyellow",
          img: "./img/stride1.png",
        },
      ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = '$' + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener('click',()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor='white'
      size.style.color='black'
    })

    size.style.backgroundColor='black'
    size.style.color='white'
  })
})

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click',()=>{
  payment.style.display='flex'
})

close.addEventListener('click',()=>{
  payment.style.display='none'
})

const check = document.querySelector('.payButton');
const oc = document.querySelector('.orderconfirm');
const occlose = document.querySelector('.orderclose');

check.addEventListener('click',()=>{
  oc.style.display='flex'
  payment.style.display='none'
})

occlose.addEventListener('click',()=>{
  oc.style.display='none';
})