// NoTE dATA wILL FETCH FROM APIS OR DATA BASE BUT I USE STATIC DATA YOU CAN USE APIS OR DATA BASE DATA
// Api data or static data will fetch from data base
let currentActiveButton = document.querySelector("#Day-chart");
const CheckoutChart = document.getElementById("pure-chart");
const CurrentDate = new Date();
const GetCurrentMonth = CurrentDate.getMonth();
let CurrentMonth = getCurrentMonth(GetCurrentMonth);
// objects

const data = {
  labels: [
    `1${CurrentMonth}`,
    `2${CurrentMonth}`,
    `3${CurrentMonth}`,
    `4${CurrentMonth}`,
    `5${CurrentMonth}`,
    `6${CurrentMonth}`,
    `7${CurrentMonth}`,
  ],
  datasets: [
    {
      label: [],
      fill: false,
      backgroundColor: "rgba(255,255,255,1)",
      borderColor: "rgb(255,255,255,1)",
      borderWidth: 1,
      borderJoinStyle: "miter",
      borderCapStyle: "butt",
      pointBackgroundColor: "rgb(172,236,253)",
      pointBorderColor: "rgba(172,236,253,0.56)",
      data: [20, 30, 110, 60, 80, 100, 120],
      pointBorderWidth: 7,
      pointRadius: 4,
      pointHoverRadius: 10,
    },
  ],
};

// Options for chart
const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

let LineChart = new Chart(CheckoutChart, {
  type: "line",
  data: data,
  options: options,
});

// helping function
function getCurrentMonth(DateIndex) {
  let Months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return Months[DateIndex];
}

const SetActiveButton = (e) => {
  currentActiveButton.classList.remove("active-graph-option");
  currentActiveButton = document.querySelector(`#${e.target.id}`);
  currentActiveButton.classList.add("active-graph-option");
};

export const DayLineChart = (e) => {
  SetActiveButton(e);
  // Api data or data base data will fetch from data base
  CurrentMonth = getCurrentMonth(GetCurrentMonth);
  // x-axis data
  let days = [
    `1${CurrentMonth}`,
    `2${CurrentMonth}`,
    `3${CurrentMonth}`,
    `4${CurrentMonth}`,
    `5${CurrentMonth}`,
    `6${CurrentMonth}`,
    `7${CurrentMonth}`,
  ];
  data["labels"] = days;
  // Y-axis data
  data.datasets[0].data = [20, 30, 40, 60, 80, 100, 120];

  DrawLineChart();
};

export const WeekLineChart = (e) => {
  SetActiveButton(e);
  // Api data or  data base data will fetch from data base
  // Y-axis data
  CurrentMonth = getCurrentMonth(GetCurrentMonth);
  // x-axis data
  let weeks = [
    `1${CurrentMonth} week`,
    `2${CurrentMonth} week`,
    `3${CurrentMonth} week`,
    `4${CurrentMonth} week`,
  ];
  data["labels"] = weeks;
  // Y-axis data
  data.datasets[0].data = [10, 20, 30, 40];

  DrawLineChart();
};

// When we click on months button
export const MonthlyLineChart = (e) => {
  SetActiveButton(e);
  // Api data or  data base data will fetch from data base
  // x-axis data
  let Months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  data["labels"] = Months;
  // Y-axis data
  data.datasets[0].data = [10, 20, 30, 40, 50, 60, 70, 80, 100, 110, 120];

  DrawLineChart();
};

// When we click on years button
export const YearlyLineChart = (e) => {
  SetActiveButton(e);
  // Api data or static data will fetch from data base
  // X-axis data
  let Years = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  data["labels"] = Years;
  // Y-axis data
  data.datasets[0].data = [222, 51, 525, 112, 87, 52, 33, 87, 55, 39];
  DrawLineChart();
};

export function DrawLineChart() {
  const LinkElement = document.querySelector(".link-Color-Switch");

  if (LinkElement.classList.contains("white-mode")) {
    data.datasets[0].borderColor = "#5d5f62";
    data.datasets[0].pointBackgroundColor = "#CFD2EB";
    data.datasets[0].pointBorderColor = "#D0D4EA";
  } else {
    data.datasets[0].borderColor = "rgba(255,255,255,1)";
    data.datasets[0].pointBackgroundColor = "rgb(172,236,253)";
    data.datasets[0].pointBorderColor = "rgba(172,236,253,0.56)";
  }
  LineChart.destroy();
  LineChart = new Chart(CheckoutChart, {
    type: "line",
    data: data,
    options: options,
  });
}
