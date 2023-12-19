function insertImg(){
    var editorContent = document.getElementById('blogbox').value;
    editorContent+="\n<img> </img>\n"
    document.getElementById('blogbox').value = editorContent;
    
}
function insertCode(){
    var editorContent = document.getElementById('blogbox').value;
    editorContent+="\n<code>\n\n</code>\n"
    document.getElementById('blogbox').value = editorContent;
    
}
function generateHTML() {

  // fstring = "";
  var editorContent = document.getElementById('blogbox').value;
  var titleContent = document.getElementById('titlebox').value;
  var dateContent = document.getElementById('datebox').value;

  var previewDiv = document.getElementById('preview');
var newHTML = "<!-- Identifier: MyBlog -->\n";
newHTML += '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
newHTML += '\t<meta charset="UTF-8">\n';
newHTML += '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
newHTML += '\t<title>Generated Page</title>\n';
newHTML += '\t<link rel="stylesheet" type="text/css" href="css/styles.css">\n';
newHTML += '\t<link rel="stylesheet" type="text/css" href="css/utils.css">\n';
newHTML += '\t<title>KladWeb</title>\n';
newHTML += '</head>\n<body>\n';
newHTML += '\t<div class="main">\n';
newHTML += '\t\t<div class="title centerize">\n';
newHTML += '\t\t\t<h1 class="headcolor m1">';
newHTML += titleContent + " : " + dateContent;
newHTML += '</h1>\n';
newHTML += '\t\t</div>\n'; // Closing div for title

newHTML+='<div class="title_other fontcolor">\n'
// Loop through the lines and generate HTML accordingly
var lines = editorContent.split('\n');
for (var i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('<img>')) {
        var imageUrl = lines[i].replace('<img>', '').replace('</img>', '').trim();
        newHTML += '\t\t<div class="m1" style="border: 5px solid #ff9e64; padding: 10px; text-align: center;">\n';
        newHTML += '\t\t\t<img src="' + imageUrl + '" style="width: 100%; height: auto; border: 3px solid #ff9e64;">\n';
        newHTML += '\t\t</div>\n';
    } else if (lines[i].startsWith('<code>')) {
        newHTML += '\t\t<div class="code-container">';
        newHTML += '\t\t\t<pre><code>';
        for (i++; i < lines.length && !lines[i].startsWith('</code>'); i++) {
            newHTML +=  lines[i] + '\n';
        }
        newHTML += '\t\t\t</code></pre>\n';
        newHTML += '\t\t</div>\n';
    } else {
        newHTML += '\t\t<div class = "m1">' + lines[i] + '</div>\n';
    }
}
newHTML += '\t\t</div>\n';
newHTML += '\t</div>\n'; // Closing div for main content
newHTML += '\t<div class="footer" id="datetimeFooter" style="color: #bb9af7"></div>\n';
newHTML += '\t<script src="js/index.js"></script>\n';
newHTML += '</body>\n</html>';


  previewDiv.innerHTML = newHTML;
  fstring=  newHTML;

}










function downloadHTML() {

  var editorContent = document.getElementById('blogbox').value;
  var titleContent = document.getElementById('titlebox').value;
  var dateContent = document.getElementById('datebox').value;

  var previewDiv = document.getElementById('preview');
var newHTML = "<!-- Identifier: MyBlog -->\n";
newHTML += '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
newHTML += '\t<meta charset="UTF-8">\n';
newHTML += '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
newHTML += '\t<title>Generated Page</title>\n';
newHTML += '\t<link rel="stylesheet" type="text/css" href="css/styles.css">\n';
newHTML += '\t<link rel="stylesheet" type="text/css" href="css/utils.css">\n';
newHTML += '\t<title>KladWeb</title>\n';
newHTML += '</head>\n<body>\n';
newHTML += '\t<div class="main">\n';
newHTML += '\t\t<div class="title centerize">\n';
newHTML += '\t\t\t<h1 class="headcolor m1">';
newHTML += titleContent + " : " + dateContent;
newHTML += '</h1>\n';
newHTML += '\t\t</div>\n'; // Closing div for title

newHTML+='<div class="title_other fontcolor">\n'
// Loop through the lines and generate HTML accordingly
var lines = editorContent.split('\n');
for (var i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('<img>')) {
        var imageUrl = lines[i].replace('<img>', '').replace('</img>', '').trim();
        newHTML += '\t\t<div class="m1" style="border: 5px solid #ff9e64; padding: 10px; text-align: center;">\n';
        newHTML += '\t\t\t<img src="' + imageUrl + '" style="width: 100%; height: auto; border: 3px solid #ff9e64;">\n';
        newHTML += '\t\t</div>\n';
    } else if (lines[i].startsWith('<code>')) {
        newHTML += '\t\t<div class="code-container">';
        newHTML += '\t\t\t<pre><code>';
        for (i++; i < lines.length && !lines[i].startsWith('</code>'); i++) {
            newHTML +=  lines[i] + '\n';
        }
        newHTML += '\t\t\t</code></pre>\n';
        newHTML += '\t\t</div>\n';
    } else {
        newHTML += '\t\t<div class = "m1">' + lines[i] + '</div>\n';
    }
}
newHTML += '\t\t</div>\n';
newHTML += '\t</div>\n'; // Closing div for main content
newHTML += '\t<div class="footer" id="datetimeFooter" style="color: #bb9af7"></div>\n';
newHTML += '\t<script src="js/index.js"></script>\n';
newHTML += '</body>\n</html>';
  htmlContent= newHTML;
  var blob = new Blob([htmlContent], { type: 'text/html' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'generated_page.html';
  a.click();
}
