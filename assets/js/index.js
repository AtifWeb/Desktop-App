import { ToggleTheButton } from "./Events/LicenseActivation.js";
import {
  DayLineChart,
  WeekLineChart,
  MonthlyLineChart,
  YearlyLineChart,
  DrawLineChart,
} from "./Events/DashboardChart.js";

const chartButtons = {
  days: Query("#Day-chart"),
  weeks: Query("#Week-chart"),
  months: Query("#Month-chart"),
  years: Query("#Year-chart"),
};
const ChartRelated = {
  ChartOptions: QueryAll(".chart-option"),
  CurrentActiveOption: Query("#Day-chart"),
};

const Togglebtn = Query(".toggle-btn");

function Query(element) {
  return document.querySelector(element);
}
function QueryAll(element) {
  return document.querySelectorAll(element);
}

const ActivateOption = (e, Class) => {
  const Element = Query(`#${e.target.id}`);
  ChartRelated.CurrentActiveOption.classList.remove(Class);
  Element.classList.add(Class);
  ChartRelated.CurrentActiveOption = Element;
};

Togglebtn.addEventListener("click", ToggleTheButton);

// Chart Dashboard Events
chartButtons.days.addEventListener("click", DayLineChart);
chartButtons.weeks.addEventListener("click", WeekLineChart);
chartButtons.months.addEventListener("click", MonthlyLineChart);
chartButtons.years.addEventListener("click", YearlyLineChart);
ChartRelated.ChartOptions.forEach((EachOption) => {
  EachOption.addEventListener("click", (e) =>
    ActivateOption(e, "active-graph")
  );
});
