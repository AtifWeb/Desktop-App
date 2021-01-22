import { Accounts } from "./Utils.js";
import { DashboardPopUps } from "./Pop-Ups.js";
// Creating Object of Classes
const DB_POPUPS = new DashboardPopUps();
// const DashboardContainer = Query(".dashboard-container");
const toggleoption = Query(".toggle-option");
const licensetoggleoption = Query(".license-toggle-option");
const ContainAllSections = QueryAll(".section-container");
const ContainAllOptions = QueryAll(".options .option");
let ActiveOptionHeading = Query(".active-option-heading");
let previousActiveSection = Query(".profile-container");
let previousActiveOption = Query("#Profile");
const TasksDisplayIcon = QueryAll(".task-display-icon");
const createaccountsidbarbtn = Query(".create-account-sidbar-btn");
const CreateAccountCloseFormButton = Query(".close-create-account-btn");
const AddGroupTaskButton = Query(".add-group-task-icon");
const CaptchasOpenPopUpButton = QueryAll(".captchas-icon-PopUp");
const CaptchasClosePopUpButton = QueryAll(".captchas-icon-PopUp");

let PreivousTaskDetails = "";

function Query(element) {
  return document.querySelector(element);
}

function QueryAll(element) {
  return document.querySelectorAll(element);
}

const ActivateWebookOption = (e) => {
  toggleoption.classList.toggle("webhookactive");
};
const ActivateLicenseOption = (e) => {
  licensetoggleoption.classList.toggle("license-toggle-option-active");
};

const ActivateOption = (e) => {
  const ElementName = e.target.id;
  console.log(previousActiveOption);

  previousActiveOption.classList.remove("active-option");
  previousActiveSection.classList.add("d-none");

  ActiveOptionHeading.textContent = ElementName;
  previousActiveOption = e.target;
  previousActiveSection = Query(`.${ElementName}`);

  previousActiveOption.classList.add("active-option");
  previousActiveSection.classList.remove("d-none");
};

const DisplayTaskDetails = (e) => {
  const Element = e.target;
  Element.classList.toggle("rotate");
  PreivousTaskDetails = Query(`.${Element.id}`);
  PreivousTaskDetails.classList.toggle("show-details");
};

// Event Listeners
ContainAllOptions.forEach((EachOption) => {
  EachOption.addEventListener("click", ActivateOption);
});
TasksDisplayIcon.forEach((EachOption) => {
  EachOption.addEventListener("click", DisplayTaskDetails);
});
toggleoption.addEventListener("click", ActivateWebookOption);
licensetoggleoption.addEventListener("click", ActivateLicenseOption);

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
