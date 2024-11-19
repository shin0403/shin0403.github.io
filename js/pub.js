// When the user scrolls the page, execute myFunction 
// Get the offset position of the navbar after initialization
function highlightName() {
  var text = "Shinnung Jeong";
  var inputText = document.getElementById("pubs");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  var pre = "<span class='highlight'>";
  var post = "</span>";
  while (index >= 0) { 
    innerHTML = innerHTML.substring(0,index) + pre + innerHTML.substring(index,index+text.length) + post + innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;
    index = innerHTML.indexOf(text, index + pre.length + text.length + post.length);
  }
}

function includePubs() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var host = url.hostname;
  var addr = "http://"+host+"/Pubs/pubs.php";
  var categorize = 0;
  var author = "shinnung";
  $("#pubs").load(addr+"?categorize="+categorize+"&setselect="+author+"&abslink="+addr, highlightName);
}

includePubs()
