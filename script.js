const container = document.querySelector('.container');
const amount =document.getElementById("amount")
const count =document.getElementById("count")
const select = document.getElementById("movie")
const seats = document.querySelectorAll(".seat:not(.reserved)")
getFromLocalStorage(); 
calculateTotal();

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserve'))
    {
        e.target.classList.toggle('selected');
        calculateTotal();
        
    }
}
)
select.addEventListener("change",function()
{
    calculateTotal();
}
)

function calculateTotal() {
    let selectedSeatCount =container.querySelectorAll('.selected').length;
    const selectedSeats =container.querySelectorAll('.selected');

        // console.log(selectedSeatCount);
        // console.log(seats);

        const selectedSeatArr =[];
        const seatArr=[];

        selectedSeats.forEach(function(seat){
            selectedSeatArr.push(seat);
        })

        seats.forEach(function(seat){
            seatArr.push(seat);
        })

        let selectedSeatIndex = selectedSeatArr.map(function(seat){
            return seatArr.indexOf(seat);
        });

        console.log(selectedSeatIndex);

        // console.log("seats");
        // console.log("selectedSeats");

        let price = select.value;
        count.innerHTML=selectedSeatCount;
        amount.innerHTML=selectedSeatCount * price;

        saveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage(){
    const selectedSeats =JSON.parse(localStorage.getItem("selectedSeats"));

if(selectedSeats != null && selectedSeats.length >0){
    seats.forEach(function(seat,index){
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected');
        }
    })
}

    const selectedMovieIndex =localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex!=null){
        select.selectedIndex = selectedMovieIndex;
    }

}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}