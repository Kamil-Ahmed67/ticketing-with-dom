const selectedSeat=document.getElementById('selected-seat');
function handleSelectedSeat(event){
    selectedSeat.innerHTML=`<li class="text-base font-normal flex justify-between " >
    <span>${event.innerHTML}</span>
    <span>Economy</span>
    <span>500</span>
    
    </li>`
}
