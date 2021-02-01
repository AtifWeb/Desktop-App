class PopUps_Variables {
  constructor() {
    self.CurrentActivePopUp = "";
    self.popupsBackground = document.querySelector(".bg-pop-ups");
    self.DashboardContainer = document.querySelector(".dashboard-container");
    self.CreateAccountForm = document.querySelector(".create-account-popup");
    self.AddGroupTaskForm = document.querySelector(".create-group-task-popup");
    self.CaptchasPopUp = document.querySelector(".captchas-popup");
    self.CaptchasLoadingPopUp = document.querySelector(".captchas-loading");
    self.CreateTaskPopUp = document.querySelector(".create-task-popup");
    let CreateTaskpopContainNone = document.querySelector(`.bg-pop-ups`);

    // Active Variable
    self.CurrentCreateTaskButton = document.querySelector(
      ".general-green-button"
    );
  }
}
export class DashboardPopUps extends PopUps_Variables {
  ShowCreateAccountPopUp() {
    self.CurrentActivePopUp = self.CreateAccountForm;
    self.popupsBackground.style.display = "block";
    self.CreateAccountForm.style.display = "block";
  }
  ShowAddGroupTaskPopUp() {
    self.CurrentActivePopUp = self.AddGroupTaskForm;
    console.log(self.CurrentActivePopUp)
    self.popupsBackground.style.display = "block";
    self.AddGroupTaskForm.style.display = "flex";
  }
  ShowCaptchasPopUp() {
    self.CurrentActivePopUp = self.CaptchasPopUp;
    self.popupsBackground.style.display = "block";
    self.CaptchasPopUp.style.display = "block";
  }

  ShowCreateTaskPop() {
    self.CurrentActivePopUp = self.CreateTaskPopUp;
    
    self.popupsBackground.style.display = "block";
    self.CreateTaskPopUp.style.display = "block";
  }

  ShowCreateTaskGreenForm(e) {
    self.CurrentCreateTaskButton.style.display = "none";
    self.CurrentCreateTaskButton = document.querySelector(
      `.general-green-button`
    );
    self.CurrentCreateTaskButton.style.display = "block";
  }
  ShowCreateTaskBlueForm(e) {
    self.CurrentCreateTaskButton.style.display = "none";
    self.CurrentCreateTaskButton = document.querySelector(
      `.advanced-blue-button`
    );
    self.CurrentCreateTaskButton.style.display = "block";
  }
  ShowCreateTaskPurpleForm(e) {
    self.CurrentCreateTaskButton.style.display = "none";
    self.CurrentCreateTaskButton = document.querySelector(
      `.misc-purple-button`
    );
    self.CurrentCreateTaskButton.style.display = "block";
  }

  HideCreateAccountPopUp() {
    self.popupsBackground.style.display = "none";
    self.CreateAccountForm.style.display = "none";
  }
  HideCaptchasPopUp() {
    self.popupsBackground.style.display = "none";
    self.CaptchasPopUp.style.display = "none";
  }
  // HideCreateTaskPop() {
  //   console.log("working");
  //   self.popupsBackground.style.display = "none";
  //   self.CreateTaskPopUp.classList.add("d-none");
  // }
  HideThourghBackground() {
    console.log(self.CurrentActivePopUp)
    self.CurrentActivePopUp.style.display = "none";
    self.popupsBackground.style.display = "none";
  }
}
