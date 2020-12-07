function loadpdf(name) {

    document.getElementById("pdf").setAttribute("src", "/assets/pdfjs/web/viewer.html?zoom=page-fit&file=%2Fassets%2Fpdf%2F" + name);
    document.getElementById('modal').setAttribute("class", "")
    // var loadingTask = PDFJS.getDocument("/assets/test.pdf");
    // loadingTask.promise.then(
    //   function(pdf) {
    //     // Load information from the first page.
    //     pdf.getPage(1).then(function(page) {
    //       var scale = 1;
    //       var viewport = page.getViewport(scale);
    
    //       // Apply page dimensions to the <canvas> element.
    //       var canvas = document.getElementById("pdf");
    //       var context = canvas.getContext("2d");
    //       canvas.height = viewport.height;
    //       canvas.width = viewport.width;
    
    //       // Render the page into the <canvas> element.
    //       var renderContext = {
    //         canvasContext: context,
    //         viewport: viewport
    //       };
    //       page.render(renderContext).then(function() {
    //         console.log("Page rendered!");
    //       });
    //     });
    //   },
    //   function(reason) {
    //     console.error(reason);
    //   }
    // );
  }

function closePdf() {
    document.getElementById('modal').setAttribute("class", "hidden")
}