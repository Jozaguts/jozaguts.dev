import ResumeService from "../Services/ResumeService";
const path = require("path");
function ResumeController(req, res) {
  if (req.isRecaptchaValidate) {
    const resume = new ResumeService(req.body.lang);
    const pdfData = resume.data();
    const { dir, fileName} = pdfData;
   
    res.download(path.join(__dirname, dir), fileName)
  } else {
    console.log("no paso");
  }
}

module.exports = ResumeController;
