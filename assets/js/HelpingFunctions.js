export function Query(element) {
  return document.querySelector(element);
}

export function QueryAll(element) {
  return document.querySelectorAll(element);
}

export const HandleActiveSidebarButtons = (
  ElementName,
  CurrentActiveSideButtons
) => {
  CurrentActiveSideButtons.style.display = "none";
  if (ElementName == "Profile") {
    CurrentActiveSideButtons = Query(".profile-btns");
  } else if (ElementName == "Monitors" || ElementName == "Proxies") {
    CurrentActiveSideButtons = Query(".monitor-btns");
  } else if (ElementName == "Settings") {
    CurrentActiveSideButtons = Query(".settings-btns");
  } else if (ElementName == "Task") {
    CurrentActiveSideButtons = Query(".task-btns");
  } else if (ElementName == "Captchas") {
    CurrentActiveSideButtons = Query(".captchas-btns");
  } else if (ElementName == "Dashboard") {
    CurrentActiveSideButtons = Query(".dashboard-btns");
  }
  CurrentActiveSideButtons.style.display = "block";
  return CurrentActiveSideButtons;
};
