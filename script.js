let output = document.querySelector("#output");
// output.contentDocument.body.innerHTML = "<h1>Hey! This is shalini </h1>"
// output.contentDocument.body.style.color = "red" ;
// output.contentWindow.eval( `let a=2; let b=3; alert(a+b)`)

let HtmlCode,
  CssCode,
  JsCode = "";
let allInput = document.querySelectorAll(".leftPart textarea");
allInput.forEach((el, index) => {
  el.addEventListener("keyup", () => {
    if (index === 0) {
      HtmlCode = el.value;
    }
    if (index === 1) {
      CssCode = el.value;
    }
    if (index === 2) {
      JsCode = el.value;
    }
    output.contentDocument.body.innerHTML = HtmlCode;
    output.contentDocument.head.innerHTML = `<style> ${CssCode} </style>`;
    output.contentWindow.eval(JsCode);
  });
});
// hello 
