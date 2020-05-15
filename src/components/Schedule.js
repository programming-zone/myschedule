import React, { Component } from "react";
import Fschedule from "./Fschedule";
import Days from "./Days";

import "./Schedule.css";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      fullView: false,
      displayTime: "HH:MM:SS AMPM",
    };

    setInterval(() => {
      const time = new Date();
      var hh = time.getHours();
      var mm = time.getMinutes();
      var ss = time.getSeconds();

      var ampm = hh >= 12 ? "PM" : "AM";
      hh = hh > 12 ? hh - 12 : hh;
      hh = hh < 10 ? "0" + hh : hh;
      mm = mm < 10 ? "0" + mm : mm;
      ss = ss < 10 ? "0" + ss : ss;
      hh = hh === "00" ? "12" : hh;

      this.setState({
        displayTime:
          ss % 2 === 0
            ? hh + ":" + mm + ":" + ss + " " + ampm
            : hh + " " + mm + " " + ss + " " + ampm,
      });
    }, 500);
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        fullView: !prevState.fullView,
      };
    });
  };

  render() {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();

    const now = date.getHours() * 60 + date.getMinutes();
    const ten_half = 10 * 60 + 30;
    const eleven_half = 11 * 60 + 30;
    const twelve_half = 12 * 60 + 30;
    const thirteen_half = 13 * 60 + 30;
    const fourteen = 14 * 60;
    const fifteen = 15 * 60;
    const sixteen = 16 * 60;
    const seventeen = 17 * 60;

    let timeOfDay;
    let sclass;
    // const room = [
    //     ' ',
    //     'F1',
    //     'S1',
    //     '⇨',
    // ];
    const classes = [
      " ",
      "MICROPROCESSOR & PROGRAMMING (AI)",
      "MICROPROCESSOR & PROGRAMMING LAB (AI)",
      "COMPUTER NETWORK (MR)",
      "COMPUTER NETWORK LAB (MR)",
      "RELATIONAL DATA BASE MANAGEMENT SYSTEMS (FBA)",
      "RELATIONAL DATA BASE MANAGEMENT SYSTEMS LAB (FBA)",
      "OBJECT ORIENTED PROGRAMMING (S.DAS)",
      "OBJECT ORIENTED PROGRAMMING LAB (S.DAS)",
      "COMPUTER GRAPHICS (AHM)",
      "COMPUTER GRAPHICS LAB (AHM)",
      "PROFESSIONAL PRACTICE - II (SP)",
      "DLS-II (ARM)",
      "Break Time",
      "No class available right now !",
    ];

    // For Days Function
    let isHoliday = true;
    let displayDay = "Days";
    let c1 = "Class 1",
      c2 = "Class 2";
    if (5 < hours && hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
    } else if (hours > 17 && hours < 20) {
      timeOfDay = "Evening";
    } else if (hours > 0 && hours < 2) {
      timeOfDay = "Mid Night";
    } else if (hours > 4 && hours < 5) {
      timeOfDay = "Dawn";
    } else {
      timeOfDay = "Night";
    }

    if (day === 0) {
      displayDay = "Sunday";
      c1 = classes[5];
      c2 = classes[3];
      if (ten_half <= now && now < twelve_half) {
        sclass = classes[5];
      } else if (fourteen <= now && now < fifteen) {
        sclass = classes[3];
      } else {
        sclass = classes[14];
      }
      // Old
      // if (ten_half <= now && now < eleven_half) {
      //   sclass = classes[7];
      // } else if (eleven_half <= now && now < twelve_half) {
      //   sclass = classes[3];
      // } else if (twelve_half <= now && now < thirteen_half) {
      //   sclass = classes[5];
      // } else if (thirteen_half <= now && now < fourteen) {
      //   sclass = classes[13];
      // } else if (fourteen <= now && now < fifteen) {
      //   sclass = classes[9];
      // } else if (fifteen <= now && now <= seventeen) {
      //   sclass = classes[8];
      // } else {
      //   sclass = classes[14];
      // }
    } else if (day === 1) {
      displayDay = "Monday";
      c1 = classes[7];
      c2 = classes[1];
      if (ten_half <= now && now < twelve_half) {
        sclass = classes[7];
      } else if (fourteen <= now && now < fifteen) {
        sclass = classes[1];
      } else {
        sclass = classes[14];
      }

      // if (ten_half <= now && now < eleven_half) {
      //   sclass = classes[1];
      // } else if (eleven_half <= now && now < thirteen_half) {
      //   sclass = classes[4];
      // } else if (thirteen_half <= now && now < fourteen) {
      //   sclass = classes[13];
      // } else if (fourteen <= now && now <= fifteen) {
      //   sclass = classes[7];
      // } else if (fifteen <= now && now <= sixteen) {
      //   sclass = classes[3];
      // } else if (sixteen <= now && now <= seventeen) {
      //   sclass = classes[12];
      // } else {
      //   sclass = classes[14];
      // }
    } else if (day === 2) {
      displayDay = "Tuesday";
      c1 = classes[9];
      c2 = classes[7];
      if (ten_half <= now && now < twelve_half) {
        sclass = classes[9];
      } else if (fourteen <= now && now < fifteen) {
        sclass = classes[7];
      } else {
        sclass = classes[14];
      }

      // if (ten_half <= now && now < eleven_half) {
      //   sclass = classes[7];
      // } else if (eleven_half <= now && now < twelve_half) {
      //   sclass = classes[3];
      // } else if (twelve_half <= now && now < thirteen_half) {
      //   sclass = classes[5];
      // } else if (thirteen_half <= now && now < fourteen) {
      //   sclass = classes[13];
      // } else if (fourteen <= now && now < fifteen) {
      //   sclass = classes[3];
      // } else if (fifteen <= now && now <= seventeen) {
      //   sclass = classes[11];
      // } else {
      //   sclass = classes[14];
      // }
    } else if (day === 3) {
      displayDay = "Wednesday";
      c1 = classes[1];
      c2 = classes[3];
      if (ten_half <= now && now < twelve_half) {
        sclass = classes[1];
      } else if (fourteen <= now && now < fifteen) {
        sclass = classes[3];
      } else {
        sclass = classes[14];
      }

      // if (ten_half <= now && now < twelve_half) {
      //   sclass = classes[2];
      // } else if (twelve_half <= now && now < thirteen_half) {
      //   sclass = classes[9];
      // } else if (thirteen_half <= now && now <= fourteen) {
      //   sclass = classes[13];
      // } else if (fourteen <= now && now < fifteen) {
      //   sclass = classes[1];
      // } else if (fifteen <= now && now < sixteen) {
      //   sclass = classes[12];
      // } else if (sixteen <= now && now <= seventeen) {
      //   sclass = classes[5];
      // } else {
      //   sclass = classes[14];
      // }
    } else if (day === 4) {
      displayDay = "Thursday";
      c1 = classes[9];
      c2 = classes[5];
      if (ten_half <= now && now < twelve_half) {
        sclass = classes[9];
      } else if (fourteen <= now && now < fifteen) {
        sclass = classes[5];
      } else {
        sclass = classes[14];
      }

      // if (ten_half <= now && now < eleven_half) {
      //   sclass = classes[1];
      // } else if (eleven_half <= now && now < thirteen_half) {
      //   sclass = classes[10];
      // } else if (thirteen_half <= now && now < fourteen) {
      //   sclass = classes[13];
      // } else if (fourteen <= now && now < seventeen) {
      //   sclass = classes[6];
      // } else {
      //   sclass = classes[14];
      // }
    } else if (day === 5) {
      displayDay = "Friday";
      isHoliday = false;
      sclass = classes[14];
    } else {
      displayDay = "Saturday";
      isHoliday = false;
      sclass = classes[14];
    }

    let value = this.state.fullView;
    let sed;
    if (value === true) {
      sed = <Fschedule />;
    }

    return (
      <div className="section">
        <h1>
          <span>My College Schedule</span>
        </h1>
        <h1>
          Time: {this.state.displayTime} , {timeOfDay}{" "}
        </h1>
        <h1>Now : {sclass}</h1>
        <Days
          isHoliday={isHoliday}
          displayDay={displayDay}
          c1={c1}
          c2={c2}
        />{" "}
        <br />
        <button onClick={this.handleClick}>View Full Schedule</button>
        {sed}
      </div>
    );
  }
}

export default Schedule;
