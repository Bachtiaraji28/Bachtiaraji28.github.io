function newFunction() {
  document.getElementById("downloadBtn").addEventListener("click", function () {
    // Simulasi download file CV (misalnya file PDF)
    const link = document.createElement("a");
    link.href = "../assets/Fix_CV.pdf"; // ini path file CV
    link.download = "CV_Bachtiar_Adjie_Pamungkas.pdf";
    link.click();
  });
}
