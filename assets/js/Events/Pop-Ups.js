export class DashboardPopUps {
  constructor() {
    self.popupsContainer = document.querySelector(".pop-ups");
    self.DashboardContainer = document.querySelector(".dashboard-container");
    self.CreateAccountForm = document.querySelector(".create-account-popup");
    self.AddGroupTaskForm = document.querySelector(".create-group-task-popup");
    self.CaptchasPopUp = document.querySelector(".captchas-popup");
    self.CaptchasLoadingPopUp = document.querySelector(".captchas-loading");
    self.CreateTaskPopUp = document.querySelector(".create-task-popup");
  }
  ShowCreateAccountPopUp() {
    self.popupsContainer.style.display = "block";
    self.CreateAccountForm.style.display = "block";
  }
  ShowAddGroupTaskPopUp() {
    self.popupsContainer.style.display = "block";
    self.AddGroupTaskForm.style.display = "flex";
  }
  ShowCaptchasPopUp() {
    self.popupsContainer.style.display = "block";
    self.CaptchasPopUp.style.display = "block";
  }

  ShowCreateTaskPop() {
    self.popupsContainer.style.display = "block";
    self.CreateTaskPopUp.style.display = "flex";
  }

  HideCreateAccountPopUp() {
    self.popupsContainer.style.display = "none";
    self.CreateAccountForm.style.display = "none";
  }
  HideCaptchasPopUp() {
    self.popupsContainer.style.display = "none";
    self.CaptchasPopUp.style.display = "none";
  }
  HideCreateTaskPop() {
    self.popupsContainer.style.display = "none";
    self.CreateTaskPopUp.style.display = "none";
  }
}
