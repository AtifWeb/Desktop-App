import { Accounts } from "./Utils/Utils.js";
import { Query, QueryAll } from "./HelpingFunctions.js";
import { DashboardPopUps } from "./Events/Pop-Ups.js";
import { HandleActiveSidebarButtons } from "./HelpingFunctions.js";
import { DisplayTaskDetails } from "./Events/Tasks.js";
import { ActivateWebookOption } from "./Events/Settings.js";
import { ActivateLicenseOption } from "./Events/LicenseActivation.js";
import { SwitchColor } from "./Events/ColorSwitch.js";
// import {AllVariables} from './Variables.js'
import {
  DayLineChart,
  WeekLineChart,
  MonthlyLineChart,
  YearlyLineChart,
  DrawLineChart,
} from "./Events/DashboardChart.js";

// Creating Object of Classes
const DB_POPUPS = new DashboardPopUps();
const chartingButtons = {
  days: Query("#Day-chart"),
  weeks: Query("#Week-chart"),
  months: Query("#Month-chart"),
  years: Query("#Year-chart"),
};

// Grab Important Elements
const toggleoption = Query(".toggle-option");
const licensetoggleoption = Query(".license-toggle-option");
const ContainAllSections = QueryAll(".section-container");
const ContainAllOptions = QueryAll(".options .option");
const TasksDisplayIcon = QueryAll(".task-display-icon");
const createaccountsidbarbtn = Query(".create-account-sidbar-btn");
const CreateAccountCloseFormButton = Query(".close-create-account-btn");
const AddGroupTaskButton = Query(".add-group-task-icon");
const CaptchasOpenPopUpButton = QueryAll(".share-icon-wrapper");
const CaptchasClosePopUpButton = QueryAll(".close-captchas-button");
const ColorTogglerButtons = QueryAll(".color-toggle");
let CurrentActiveSideButtons = Query(".dashboard-btns");
let ChartOption = QueryAll(".chart-option");
let ActiveOptionHeading = Query(".active-option-heading");
let previousActiveSection = Query(".dashboard-Option-container");
let previousActiveOption = Query("#Dashboard");
let PreivousTaskDetails = "";


// task query
const CreateTaskButton = Query(".create-task-btn");
const GreenCreateTaskButton = QueryAll(".create-task-first-dot");
const BlueCreateTaskButton = QueryAll(".create-task-second-dot");
const PurpleCreateTaskButton = QueryAll(".create-task-third-dot");
const PopUpsBackground = Query(".bg-pop-ups");


// Event functions

const ActivateOption = (e) => {
  const ElementName = e.target.id;

  previousActiveOption.classList.remove("active-option");
  previousActiveSection.classList.add("d-none");

  ActiveOptionHeading.textContent = ElementName;
  previousActiveOption = e.target;
  previousActiveSection = Query(`.${ElementName}`);

  previousActiveOption.classList.add("active-option");
  previousActiveSection.classList.remove("d-none");

  // Helping Function
  CurrentActiveSideButtons = HandleActiveSidebarButtons(
    ElementName,
    CurrentActiveSideButtons
  );
};

// Event Listeners
ContainAllOptions.forEach((EachOption) => {
  EachOption.addEventListener("click", ActivateOption);
});
TasksDisplayIcon.forEach((EachOption) => {
  EachOption.addEventListener("click", (e) =>
    DisplayTaskDetails(e, PreivousTaskDetails)
  );
});
toggleoption.addEventListener("click", (e) =>
  ActivateWebookOption(e, toggleoption)
);
licensetoggleoption.addEventListener("click", (e) =>
  ActivateLicenseOption(e, licensetoggleoption)
);

// pop ups events
createaccountsidbarbtn.addEventListener(
  "click",
  DB_POPUPS.ShowCreateAccountPopUp
);

CreateAccountCloseFormButton.addEventListener(
  "click",
  DB_POPUPS.HideCreateAccountPopUp
);
AddGroupTaskButton.addEventListener("click", DB_POPUPS.ShowAddGroupTaskPopUp);

CaptchasOpenPopUpButton.forEach((EachCaptchaButton) => {
  EachCaptchaButton.addEventListener("click", DB_POPUPS.ShowCaptchasPopUp);
});
CaptchasClosePopUpButton.forEach((EachCaptchaButton) => {
  EachCaptchaButton.addEventListener("click", DB_POPUPS.HideCaptchasPopUp);
});

// task popups
CreateTaskButton.addEventListener("click", DB_POPUPS.ShowCreateTaskPop);
GreenCreateTaskButton.forEach((EachCreateTaskButton) => {
  EachCreateTaskButton.addEventListener("click", (e) =>
    DB_POPUPS.ShowCreateTaskGreenForm(e)
  );
});
BlueCreateTaskButton.forEach((EachCreateTaskButton) => {
  EachCreateTaskButton.addEventListener("click", (e) =>
    DB_POPUPS.ShowCreateTaskBlueForm(e)
  );
});
PurpleCreateTaskButton.forEach((EachCreateTaskButton) => {
  EachCreateTaskButton.addEventListener("click", (e) =>
    DB_POPUPS.ShowCreateTaskPurpleForm(e)
  );
});

// Chart Dashboard Event
chartingButtons.days.addEventListener("click", DayLineChart);
chartingButtons.weeks.addEventListener("click", WeekLineChart);
chartingButtons.months.addEventListener("click", MonthlyLineChart);
chartingButtons.years.addEventListener("click", YearlyLineChart);

// Changing Color Event
ColorTogglerButtons.forEach((EachTogglerButton) => {
  EachTogglerButton.addEventListener("click", SwitchColor);
  EachTogglerButton.addEventListener("click", (e) => DrawLineChart());
});

// Hide Thourgh Background
PopUpsBackground.addEventListener("click", DB_POPUPS.HideThourghBackground);
