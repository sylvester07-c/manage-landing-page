{/* <p>Amazon Shipping Calculator</p>
  <input class="js-cost-input" placeholder="Cost of order" onkeydown="
  handleCostKeydown(event)
   
  ">
  <button onclick="
  calculateTotal();
  ">Calculate
  </button>
  <p class="js-total-cost"></p> */}
const btn = document.getElementById('menu-btn');
btn.addEventListener('click', hamToggle)

function hamToggle(params) {
  btn.classList.toggle('open')
  
}

 function emailHolder(){
  const myEmail = document.querySelector('.inputbutton');
  let output = String(myEmail.value);

  if(output != 'sylvesterpraise123456@gmail.com'){
    console.log("you have a wrong email format.");
  }

  document.querySelector('.container')
  .innerHTML = `${output}`
 }


// function handleCostKeydown(event) {
// if (event.key === 'Enter') {
// calculateTotal()
// }
// }


// function calculateTotal() {
// const inputElement = document.querySelector('.js-cost-input');
// let cost = Number( inputElement.value);



// if(cost < 40) {
// cost = cost + 10;
// console.log(cost);
// }

// document.querySelector('.js-total-cost')
// .innerHTML = `$${cost}`;
// }