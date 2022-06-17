// let url = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`


let searchBookData = ()=>{
let q = document.getElementById('search_books').value;

let url = `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${q}`
getBookData(url)


};

let bestBooks = ()=>{

    let url = `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=to reader books`
    getBookData(url)


}


let getBookData = async (url)=>{
    
    try{
    let res = await fetch(url);
    let data =await res.json();
    console.log()
    appendBookData(data.items)

    }
    catch(err){
        console.log('err :', err);
    }
    
    
}
bestBooks()


let result = document.getElementById('products');

let appendBookData = (data)=>{

    document.getElementById('products').innerHTML = null;


    data.forEach( ( {volumeInfo } )=>{
        
       
        if( typeof(volumeInfo.imageLinks) === 'undefined' || typeof(volumeInfo.subtitle) === 'undefined' || typeof(volumeInfo.pageCount) === 'undefined'  ){
            // console.log("It is undefined data");
            
        }
        else{

        let box = document.createElement('div');
        box.setAttribute('class', 'bookBox');

        let img = document.createElement('img');
        img.setAttribute('class', 'bookImg');
        img.src = volumeInfo.imageLinks.thumbnail  

        let title = document.createElement('h4');
        title.setAttribute('class', 'bookTitle');
        title.innerText =volumeInfo.subtitle

        let price = document.createElement('h4');
        price.setAttribute('class', 'bookPrice');
        price.innerText = volumeInfo.pageCount

        let viewBox = document.createElement('div');
        viewBox.setAttribute('class', "viewBox")
        
        let view = document.createElement('h4');
        view.setAttribute('class', "bookView")
        view.innerText = "View Now";

        let more = document.createElement('h4');
        more.innerText = "More details"
        more.setAttribute('class', "bookDetails")

        box.addEventListener('click', ()=>{
            buyItems(volumeInfo)
        })
        
        viewBox.append(view, more)
        box.append(img, title, price,viewBox);
        result.append(box);
        }

    });




};

let  buyItems = (elem) =>{
    console.log(elem)

    localStorage.setItem('buyProduct', JSON.stringify(elem))
    window.location.href = '../FE/buy.html'


}


