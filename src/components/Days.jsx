import React from "react";

function Days({ isHoliday, displayDay, room, c1, c2, c3, c4, c5, c6, c7, c8 }) {
  return (
    <div>
      {/* <table>
        <tr>
          <th>Day</th>
          <th>Room No</th>
          <th>10:30am - 11:30am</th>
          <th>11:30am - 12:30pm</th>
          <th>12:30pm - 1:30pm</th>
          <th>
            BREAK
            <br />
            1:30pm - 2:00pm
          </th>
          <th>2:00pm - 3:00pm</th>
          <th>3:00pm - 4:00pm</th>
          <th>4:00pm - 5:00pm</th>
        </tr>
        <tr>
          <td> {displayDay} </td>
          <td> {room} </td>
          <td></td>
          <td>
            COMPUTER NETWORK
            <br />
            (MR)
          </td>
          <td>
            RELATIONAL DATA BASE MANAGEMENT SYSTEMS
            <br />
            (FBA)
          </td>
          <td></td>
          <td>
            COMPUTER GRAPHICS
            <br />
            (AHM)
          </td>
          <td colspan="2">
            OBJECT ORIENTED PROGRAMMING LAB
            <br />
            (S.DAS)
          </td>
        </tr>
      </table> */}
      {isHoliday ? (
        <table>
          <tr>
            <th>Day</th>
            <th>11:00am - 12:00am</th>
            <th>
              BREAK
              <br />
              1:30pm - 2:00pm
            </th>
            <th>2:30pm - 3:30pm</th>
          </tr>
          <tr>
            <td>
              <br /> {displayDay} <br />
              <br />
            </td>
            <td>{c1}</td>
            <td> {isHoliday} </td>
            <td>{c2}</td>
          </tr>
        </table>
      ) : (
        <h1> {displayDay} : Today is Holiday</h1>
      )}
    </div>
  );
}
export default Days;
