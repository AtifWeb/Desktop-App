// NoTE dATA wILL FETCH FROM APIS OR DATA BASE BUT I USE STATIC DATA YOU CAN USE APIS OR DATA BASE DATA
// Api data or static data will fetch from data base
export class UserCheckoutChart {
  constructor() {
    self.currentChartType = "";
    self.currentActiveButton = document.querySelector("#Day-chart");
    self.CheckoutChart = document.getElementById("pure-chart");
    self.CurrentDate = new Date();
    self.CurrentMonth = self.CurrentDate.getMonth();

    // dyanamic data for chart || will change according to events
    self.ChartDynamicData = {
      labels: [],
      InnerData: [],
    };

    // data and styling for chart
    self.data = {
      labels: ChartDynamicData.labels,
      datasets: [
        {
          label: "",
          fill: false,
          backgroundColor: "rgba(255,255,255,1)",
          borderColor: "rgb(255,255,255,1)",
          borderWidth: 1,
          borderJoinStyle: "miter",
          borderCapStyle: "butt",
          hoverBackgroundColor: "yes",
          hoverBorderColor: "yes",
          pointBackgroundColor: "rgb(172,236,253)",
          pointBorderColor: "rgba(172,236,253,0.56)",
          data: ChartDynamicData.InnerData,
          pointBorderWidth: 7,
          pointRadius: 4,
          pointHoverRadius: 10,
        },
      ],
    };
    // Options for chart
    self.options = {
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

    // This is to get month in string form
    self.getCurrentMonth = (DateIndex) => {
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
    };

    // When we click on Days button
    self.DayLineChart = () => {
      // Api data or data base data will fetch from data base
      let CurrentMonth = self.getCurrentMonth(self.CurrentMonth);
      // x-axis data
      self.ChartDynamicData.labels = [
        `1${CurrentMonth}`,
        `2${CurrentMonth}`,
        `3${CurrentMonth}`,
        `4${CurrentMonth}`,
        `5${CurrentMonth}`,
        `6${CurrentMonth}`,
        `7${CurrentMonth}`,
      ];
      self.data["labels"] = ChartDynamicData.labels;
      // Y-axis data
      self.data.datasets[0].data = [20, 30, 40, 60, 80, 100, 120];
    };
    // When we click on weeks button
    self.WeekLineChart = () => {
      // Api data or  data base data will fetch from data base
      // Y-axis data
      let CurrentMonth = self.getCurrentMonth(self.CurrentMonth);
      // x-axis data
      self.ChartDynamicData.labels = [
        `1${CurrentMonth} week`,
        `2${CurrentMonth} week`,
        `3${CurrentMonth} week`,
        `4${CurrentMonth} week`,
      ];
      self.data["labels"] = ChartDynamicData.labels;
      // Y-axis data
      self.data.datasets[0].data = [10, 20, 30, 40];
    };

    // When we click on months button
    self.MonthlyLineChart = () => {
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

      self.ChartDynamicData.labels = Months;
      self.data["labels"] = ChartDynamicData.labels;
      // Y-axis data
      self.data.datasets[0].data = [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        100,
        110,
        120,
      ];
    };

    // When we click on years button
    self.YearlyLineChart = () => {
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
      self.ChartDynamicData.labels = Years;
      self.data["labels"] = ChartDynamicData.labels;
      // Y-axis data
      self.data.datasets[0].data = [222, 51, 525, 112, 87, 52, 33, 87, 55, 39];
    };
  }

  SetLineChart(e) {
    const ElementId = e.target.id;
    self.currentChartType = ElementId;
    self.currentActiveButton.classList.remove("active-graph-option");
    self.currentActiveButton = document.querySelector(`#${ElementId}`);
    self.currentActiveButton.classList.add("active-graph-option");

    if (self.currentChartType == "Day-chart") {
      self.DayLineChart();
    } else if (self.currentChartType == "Week-chart") {
      self.WeekLineChart();
    } else if (self.currentChartType == "Month-chart") {
      self.MonthlyLineChart();
    } else {
      self.YearlyLineChart();
    }

    self.Line = new Chart(self.CheckoutChart, {
      type: "line",
      data: self.data,
      options: self.options,
    });
  }
}
