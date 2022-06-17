


let buyProduct = JSON.parse(localStorage.getItem('buyProduct'));
console.log(buyProduct);




let buy_img = document.getElementById('buy_img');
buy_img.src =buyProduct.imageLinks.thumbnail 

let buy_price = document.getElementById('buy_price');
buy_price.innerText = buyProduct.pageCount *3;

let binding = document.getElementById('b');
let number_of_page = document.getElementById('n');
let author = document.getElementById('a');
let publisher = document.getElementById('p');
let language = document.getElementById('l');


if(buyProduct.language === "en"){
    language.innerText = "English"

}
else if(buyProduct.language === "hi"){
    language.innerText = "Hndi"

}
else if(buyProduct.language === "gu"){
    language.innerText = "Guja  rati"

}



author.innerText = buyProduct.authors[0]
publisher.innerText = buyProduct.publisher;
number_of_page.innerText =  buyProduct.pageCount;


let buy_title = document.getElementById('buy_title');
buy_title.innerText = buyProduct.title

let buy_s_title = document.getElementById('buy_s_title');
buy_s_title.innerText = buyProduct.subtitle;

let buy_dis = document.getElementById('buy_dis');
buy_dis.innerText = buyProduct.description;


let goToPayment = ()=>{

    window.location.href = '../FE/payment.html'
}
