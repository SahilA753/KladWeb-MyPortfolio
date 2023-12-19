let alpha =0;

function handleKeyPress(event) {
    if (event.key === "Enter") {
      input_enter();
    }
  }



  function input_enter() {
      let inputStyleElements = document.getElementsByClassName("inputstyle");
      
      let text = inputStyleElements[alpha].value;
      alpha += 1;
  
      if (text === "help" || text === "list") {
        
          let terminalElement = document.getElementById("terminal");
          let currentHtml = terminalElement.innerHTML;
  
          let commandList = "<div class=\"m1\">Command List:</div>" +
                            "<div class=\"m2 \">about : About Me</div>" +
                            "<div class=\"m2\">projects : My Main Projects</div>" +
                            "<div class=\"m2\">other : Other General Blogs</div>" +
                            "<div class=\"m2\">fun : Fun Stuff (Including my Hobbies)</div>" +
                            "<div class=\"m2\">resume : My Resume</div>" +
                            "<div class=\"m2\">contact : Contact Info</div>" +
                            "<div class=\"m2\">clear : Clear Kladshell</div>" +
                            "<div class=\"m2\">admin : Admin Role</div>" +
                            "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                            "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";
  
          currentHtml += text+ commandList;
          terminalElement.innerHTML = currentHtml;
      }
      else if(text=='about'){
        let terminalElement = document.getElementById("terminal");
          let currentHtml = terminalElement.innerHTML;
          let commandList = "<div class=\"m1\">Hi, I am Sahil Agrawal, currently studying Computer Science (6th Semester) at IIT Patna. For more information, visit: <a class=\"href\" href=\"/about.html\">About Me</a>.</div>"+
                            "<div class=\"m1\" style=\"border: 5px solid #ff9e64; padding: 10px; text-align: center;\">" +
                            "<img src=\"img/profile.jpg\" alt=\"Profile Image\" style=\"height: 300px; width: auto; border: 5px solid #ff9e64;\">" +
                            "</div>"+
                            "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                            "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";
  
          currentHtml += text+ commandList;
          terminalElement.innerHTML = currentHtml;
      } else if (text === 'projects') {
        window.location.href = 'projects.html';
       
    } else if (text === 'other') {
        window.location.href = 'other.html';
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;
        let commandList ="<div class=\"m1\">Loading My Blogs!...</div>"+
                            "<div class=\"m1\">Note:- It may take some time.</div>"+
                          "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                          "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml += text+ commandList;
        terminalElement.innerHTML = currentHtml;
    } else if (text === 'fun') {
        window.location.href = 'fun.html';
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;
        let commandList ="<div class=\"m1\">Loading Fun...</div>"+
                            "<div class=\"m1\">Note:- It may take some time.</div>"+
                          "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                          "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml += text+ commandList;
        terminalElement.innerHTML = currentHtml;
    } else if (text === 'resume') {
        window.location.href = 'https://drive.google.com/file/d/1RbLnTUfgl02cODre0Csf3nEZlol-jXz4/view?usp=sharing';
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;
        let commandList ="<div class=\"m1\">Loading the Resume...</div>"+
                            "<div class=\"m1\">Note:- It may take some time.</div>"+
                          "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                          "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml += text+ commandList;
        terminalElement.innerHTML = currentHtml;
    } else if (text === 'contact') {
        // Implementation for 'contact' command
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;

        let contactInfo = "<div class=\"m1\">Contact Information:</div>" +
            "<div class=\"m2\"><a class=\"href\"href=\"mailto:agrawalsahil753@gmail.com\">Gmail</a></div>" +
            "<div class=\"m2\"><a class=\"href\"href=\"https://www.linkedin.com/in/sahil-agrawal-20b064246/\" target=\"_blank\">LinkedIn</a></div>" +
            "<div class=\"m2\"><a class=\"href\"href=\"https://www.instagram.com/agrawalsahil753/\" target=\"_blank\">Instagram</a></div>" +
            "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
            "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml += text + contactInfo;
        terminalElement.innerHTML = currentHtml;
    } else if(text=="admin"){
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;
       
        let commandList ="<div class=\"m1\">Loading the Login...</div>"+
                         "<div class=\"m1\">Note:- It may take some time.</div>"+
                         "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                         "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml +="Hi "+ text+ commandList;
        terminalElement.innerHTML = currentHtml;
        window.location.href = 'login.html';
    } else if(text=="clear"){
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;
        let contactInfo = "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
                          "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml = contactInfo;
        alpha=0;
        terminalElement.innerHTML = currentHtml;
    } else{
        let terminalElement = document.getElementById("terminal");
        let currentHtml = terminalElement.innerHTML;

        let contactInfo = "<div class=\"m1\">Sorry but this is not a command for KladShell! Please type help.</div>" +
            "<span class=\"m1\" style=\"color: rgb(255, 158, 100);\">λ : : user@kladhome ~ </span>\n" +
            "<input type=\"text\" onkeydown=\"handleKeyPress(event)\" class=\"inputstyle fontcolor\">";

        currentHtml += text + contactInfo;
        terminalElement.innerHTML = currentHtml;
    }
  }
  

// Function to update date and time continuously in the footer
function updateDateTimeFooter() {
    let datetimeFooter = document.getElementById("datetimeFooter");

    setInterval(function () {
        let currentDate = new Date();
        let formattedDate = currentDate.toLocaleDateString();
        let formattedTime = currentDate.toLocaleTimeString();

        // Display the current date and time in the footer
        datetimeFooter.innerHTML = `Date: ${formattedDate} | Time: ${formattedTime}`;
    }, 1000); // Update every second
}

// Call the function to start updating date and time in the footer
updateDateTimeFooter();






  //ABOUT ME - Contains my skills, my education, my interest my hobbies and all the information with history
  //Projects (main dev or others including theoretical) - Building and development part (whether research or any)
  //Other Blogs and smaller or very small coded things for fun!- General Blogs (May be academic or not but general)
  //Fun not academic -  (divided sections) My HoBBIES - Photoshop, Video, photography, music Games and all
  //Resume - Resume
  //Contact Info 
  //Clear