import fetch from "node-fetch";
export default class ResumeService {
  constructor(lang) {
    this.lang = lang;
  }
  data() {
    return this.lang === "en"
      ? {
          dir: "../assets/resumeEs.pdf",
          fileName: "Sagitgtz-CV"
        }
      : {
          dir: "../assets/resumeEn.pdf",
          fileName: "Sagitgtz-resume"
        };
  }
}
