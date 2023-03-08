
// $(document).ready(function(){
//     $('.links').on('click', function(){
//         $(this).siblings().removeClass('active')
//         $(this).addClass('active')
//     })
// })




let paymentPage = document.querySelector('#payment')
let shopPage = document.querySelector('.shop-page')
let groupsPage = document.querySelector('.groups-page')
let cardsPage = document.querySelector('.cards-page')


let paymentBtn = document.querySelector('.payment-btn');
let shopBtn = document.querySelector('.shop-btn');
let groupsBtn = document.querySelector('.groups-btn');
let cardsBtn = document.querySelector('.cards-btn');


function showPayment(){
    paymentPage.classList.remove('hidden')
    shopPage.classList.add('hidden')
    groupsPage.classList.add('hidden')
    cardsPage.classList.add('hidden')

    paymentBtn.classList.add('active')
    shopBtn.classList.remove('active')
    groupsBtn.classList.remove('active')
    cardsBtn.classList.remove('active')
}

function showShop(){
    paymentPage.classList.add('hidden')
    shopPage.classList.remove('hidden')
    groupsPage.classList.add('hidden')
    cardsPage.classList.add('hidden')

    paymentBtn.classList.remove('active')
    shopBtn.classList.add('active')
    groupsBtn.classList.remove('active')
    cardsBtn.classList.remove('active')
}

function showGroup(){
    paymentPage.classList.add('hidden', )
    shopPage.classList.add('hidden')
    groupsPage.classList.remove('hidden')
    cardsPage.classList.add('hidden')

    paymentBtn.classList.remove('active')
    shopBtn.classList.remove('active')
    groupsBtn.classList.add('active')
    cardsBtn.classList.remove('active')
  
}

function showCard(){
    paymentPage.classList.add('hidden')
    shopPage.classList.add('hidden')
    groupsPage.classList.add('hidden')
    cardsPage.classList.remove('hidden')

    paymentBtn.classList.remove('active')
    shopBtn.classList.remove('active')
    groupsBtn.classList.remove('active')
    cardsBtn.classList.add('active')
    
}



paymentBtn.addEventListener('click', showPayment)
shopBtn.addEventListener('click', showShop)
groupsBtn.addEventListener('click', showGroup)
cardsBtn.addEventListener('click', showCard)

