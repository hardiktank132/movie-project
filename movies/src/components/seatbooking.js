import React from 'react'
import "./Seatbooking.css"
function SeatBooking() {
    // let seats = document.querySelector(".all-seats");
    // for (var i = 0; i < 59; i++) {
    //   let randint = Math.floor(Math.random() * 2);
    //   let booked = randint === 1 ? "booked" : "";
    //   seats.insertAdjacentHTML(
    //     "beforeend",
    //     '<input type="checkbox" name="tickets" id="s' +
    //       (i + 2) +
    //       '" /><label for="s' +
    //       (i + 2) +
    //       '" class="seat ' +
    //       booked +
    //       '"></label>'
    //   );
    // }

    // let tickets = seats.querySelectorAll("input");
    // tickets.forEach((ticket) => {
    //   ticket.addEventListener("change", () => {
    //     let amount = document.querySelector(".amount").innerHTML;
    //     let count = document.querySelector(".count").innerHTML;
    //     amount = Number(amount);
    //     count = Number(count);

    //     if (ticket.checked) {
    //       count += 1;
    //       amount += 200;
    //     } else {
    //       count -= 1;
    //       amount -= 200;
    //     }
    //     document.querySelector(".amount").innerHTML = amount;
    //     document.querySelector(".count").innerHTML = count;
    //   });
    // });
    const Submit=(e)=>{
      alert("your seat booked");
    }
  return (
    <div>
      <>
      <>
  <div className="center">
    <div className="tickets">
      <div className="ticket-selector">
        <div className="head">
          <div className="title">Movie Name</div>
        </div>
        <div className="seats">
          <div className="status">
            <div className="item">Available</div>
            <div className="item">Booked</div>
            <div className="item">Selected</div>
          </div>
          <div className="all-seats">
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <label htmlFor="s1" className="seat booked" />
          </div>
          <div className="all-seats">
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <label htmlFor="s1" className="seat booked" />
          </div>
          <div className="all-seats">
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <label htmlFor="s1" className="seat booked" />
          </div>
          <div className="all-seats">
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <label htmlFor="s1" className="seat booked" />
          </div>
          <div className="all-seats">
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <input type="checkbox" name="tickets" id="s1" /><input type="checkbox" name="tickets" id="s1" />
            <label htmlFor="s1" className="seat booked" />
          </div>
        </div>
        <div className="timings">
          <div className="dates">
            <input type="radio" name="date" id="d1" defaultChecked="" />
            <label htmlFor="d1" className="dates-item">
              <div className="day">Sun</div>
              <div className="date">11</div>
            </label>
            <input type="radio" id="d2" name="date" />
            <label className="dates-item" htmlFor="d2">
              <div className="day">Mon</div>
              <div className="date">12</div>
            </label>
            <input type="radio" id="d3" name="date" />
            <label className="dates-item" htmlFor="d3">
              <div className="day">Tue</div>
              <div className="date">13</div>
            </label>
            <input type="radio" id="d4" name="date" />
            <label className="dates-item" htmlFor="d4">
              <div className="day">Wed</div>
              <div className="date">14</div>
            </label>
            <input type="radio" id="d5" name="date" />
            <label className="dates-item" htmlFor="d5">
              <div className="day">Thu</div>
              <div className="date">15</div>
            </label>
            <input type="radio" id="d6" name="date" />
            <label className="dates-item" htmlFor="d6">
              <div className="day">Fri</div>
              <div className="date">16</div>
            </label>
            <input type="radio" id="d7" name="date" />
            <label className="dates-item" htmlFor="d7">
              <div className="day">Sat</div>
              <div className="date">17</div>
            </label>
          </div>
          <div className="times">
            <input type="radio" name="time" id="t1" defaultChecked="" />
            <label htmlFor="t1" className="time">
              11:00
            </label>
            <input type="radio" id="t2" name="time" />
            <label htmlFor="t2" className="time">
              {" "}
              14:30{" "}
            </label>
            <input type="radio" id="t3" name="time" />
            <label htmlFor="t3" className="time">
              {" "}
              18:00{" "}
            </label>
            <input type="radio" id="t4" name="time" />
            <label htmlFor="t4" className="time">
              {" "}
              21:30{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="price">
        <div className="total">
          <span>
            {" "}
            <span className="count">0</span> Tickets{" "}
          </span>
          <div className="amount">0</div>
        </div>
        <button type="button" onClick={Submit}>Book</button>
      </div>
    </div>
  </div>
  
</>

</>

    </div>
  )
}

export default SeatBooking
