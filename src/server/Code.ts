function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
}

function include(fileName:string){
  return HtmlService.createTemplateFromFile(fileName).getRawContent()
}