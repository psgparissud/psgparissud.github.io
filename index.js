function loadpdf(name) {
    document.getElementById("pdf").setAttribute("src", "/assets/pdfjs/web/viewer.html?zoom=page-fit&file=%2Fassets%2Fpdf%2F" + name);
    document.getElementById('modal').setAttribute("class", "")
}

function closePdf() {
    document.getElementById('modal').setAttribute("class", "hidden")
}