import { Query } from "../HelpingFunctions.js";
export const SwitchColor = (e) => {
  const linkTag = Query(".link-Color-Switch");
  linkTag.classList.toggle("white-mode");
  if (linkTag.classList.contains("white-mode")) {
    linkTag.href = "../assets/css/WhiteMode/White-mode.css";
  } else {
    linkTag.href = "";
  }
};
