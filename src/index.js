// let url = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`


let searchBookData = ()=>{
let q = document.getElementById('search_books').value;

let url = `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${q}`
getBookData(url)


};


let getBookData = async (url)=>{
    
    try{
    let res = await fetch(url);
    let data =await res.json();
    console.log(data.items);
    appendBookData(data.items)

    }
    catch(err){
        console.log('err :', err);
    }
    
    
}


let result = document.getElementById('products');

let appendBookData = (data)=>{

    document.getElementById('products').innerHTML = null;
    // let i = 0 ;

    data.forEach( ( {volumeInfo } )=>{
        
       
        if( typeof(volumeInfo.imageLinks) === 'undefined' ){
            // console.log(i+" is undefined");
            
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
        
        box.append(img, title, price);
        result.append(box);
        }

        // i++
    });




};


