


let price = JSON.parse(localStorage.getItem("buyProduct"));
document.querySelector("#TotalPeise").innerHTML = "Rs." + " " +  price.pageCount;

document.querySelector("#Calculate").innerHTML += 100 + 50 + price.pageCount;



function Final() {
  let card = document.querySelector("#card").value;
  let Cvv = document.querySelector("#Cvv").value;
  let Code = document.querySelector("#Code").value;
  if (
    card !== "" &&
    Cvv !== "" &&
    Code !== "" 
  ){
    alert("Order Placed");
    window.location.href = '../index.html';
  }
  else{
    alert("Please Fill required Details");
  }
}


