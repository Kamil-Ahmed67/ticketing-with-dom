const selectedSeat=document.getElementById('selected-seat');
const totalBookedEl=document.getElementById('total-booked');
const availableSeat=document.getElementById('available-seat');
const totalPriceEl=document.getElementById('total-price');
const couponInputEl=document.getElementById('coupon-field');
const couponButton=document.getElementById('coupon-btn');
const defaultTextEl=document.getElementById('default-text');
const grandTotalEl=document.getElementById('grand-total');
let totalPrice=0;
let selectedSeatsFromButtons=[];
function handleSelectedSeat(event){
     const value=event.innerText;
     if(selectedSeatsFromButtons.includes(value)){
        return alert('This Seat Already Booked!')
    }
    else if( selectedSeatsFromButtons.length<4){
        event.classList.add('bg-green-400');
        event.classList.add('text-white');
        selectedSeatsFromButtons.push(event.innerText);
        totalBookedEl.innerText=selectedSeatsFromButtons.length;
        //console.log(selectedSeatsFromButtons);
        //DECREASE AVAILABLE SEAT
        // availableSeatValue= no. of previous remaining seats
        const availableSeatValue=parseFloat(availableSeat.innerText);
        const newAvailableSeatValue=availableSeatValue - 1;
        availableSeat.innerText=newAvailableSeatValue;

        //remove default No Seat Booked text
        defaultTextEl.classList.add('hidden');
       
        selectedSeat.innerHTML +=`<li class="text-base font-normal flex justify-between " >
        <span>${event.innerHTML}</span>
        <span>Economy</span>
        <span>550</span>
        
        </li>`
    
        //updating price
        totalPrice=totalPrice+550;
        totalPriceEl.innerText=totalPrice.toFixed(2);
    
        //active coupon button if buy 4 tickets
        if(selectedSeatsFromButtons.length >3){
            couponInputEl.removeAttribute('disabled');
            couponButton.removeAttribute('disabled');
        }
        //
    }
    else{
        return alert('Maximum Seat Booked!');
    }
}

//coupon button function
document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponInputValue=couponInputEl.value;
    let couponSave=0;
    if(couponInputValue !=='NEW15' && couponInputValue !=='Couple-20'){
      alert('Your Provided coupon is not working!!');
      return;
    }
    if(couponInputValue =='NEW15'){
        couponSave=totalPrice* 0.15;
    }else if(couponInputValue =='Couple-20'){
        couponSave=totalPrice* 0.20;
    }
    const grandTotalValue=totalPrice-couponSave;
    grandTotalEl.innerText=grandTotalValue.toFixed(2);
})


