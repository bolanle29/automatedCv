const inputBtn = document.querySelector(".btn");

function submitBtn(){

    // Input for personal data
    let Usname = document.getElementById("Uname").value;
    let email = document.getElementById("mail").value;
    let address = document.getElementById("address").value;
    let Profile = document.getElementById("Profile").value;

    // Output for personal data
    document.querySelector(".name").innerHTML = Usname;
    console.log("Usname")
    
    document.querySelector(".e-mail").innerHTML = email;
    document.querySelector(".contactAdd").innerHTML = address;
    document.querySelector(".careerProfile").innerHTML = Profile;


    //Input for Certification and Achievement
    let UserCertification = document.getElementById("cert").value;
    //Output for Certification and Achievement
    document.querySelector(".certification").innerHTML = UserCertification;

    
    //Input for Education (Secondary School)
    let userSecSchool = document.getElementById("secSchl").value;
    //Output for Education (Secondary School)  
    document.querySelector(".sec").innerHTML = userSecSchool;


   //Input for Education (degree)
   let firstUni = document.getElementById("inst1").value;
   let gradYear = document.getElementById("gra1").value;
   let degrType = document.getElementById("deg1").value;
   let classOfDeg = document.getElementById("cl1").value;

   let firstUni2 = document.getElementById("inst2").value;
   let gradYear2 = document.getElementById("gra2").value;
   let degrType2 = document.getElementById("deg2").value;
   let classOfDeg2 = document.getElementById("cl2").value;

   let firstUni3 = document.getElementById("inst3").value;
   let gradYear3 = document.getElementById("gra3").value;
   let degrType3 = document.getElementById("deg3").value;
   let classOfDeg3 = document.getElementById("cl3").value;

   let firstUni4 = document.getElementById("inst4").value;
   let gradYear4 = document.getElementById("gra4").value;
   let degrType4 = document.getElementById("deg4").value;
   let classOfDeg4 = document.getElementById("cl4").value;

  
   //Output for Education (degree)  
   document.querySelector(".uni1").innerHTML = firstUni; 
   document.querySelector(".grad1").innerHTML = gradYear;
   document.querySelector(".degree1").innerHTML = degrType;
   document.querySelector(".class1").innerHTML = classOfDeg;

   document.querySelector(".uni2").innerHTML = firstUni2; 
   document.querySelector(".grad2").innerHTML = gradYear2;
   document.querySelector(".degree2").innerHTML = degrType2;
   document.querySelector(".class2").innerHTML = classOfDeg2;

   document.querySelector(".uni3").innerHTML = firstUni3; 
   document.querySelector(".grad3").innerHTML = gradYear3;
   document.querySelector(".degree3").innerHTML = degrType3;
   document.querySelector(".class3").innerHTML = classOfDeg3;

   document.querySelector(".uni4").innerHTML = firstUni4; 
   document.querySelector(".grad4").innerHTML = gradYear4;
   document.querySelector(".degree4").innerHTML = degrType4;
   document.querySelector(".class4").innerHTML = classOfDeg4;


// Input for skill
   let Userskill = document.getElementById("skill").value;  
//    Output for skill
   document.querySelector(".skill-set").innerHTML = Userskill;


   // Input for Job experiences
   let UserWorkexperience = document.getElementById("skill").value;  
   //    Output for Job experiences
   document.querySelector(".experience").innerHTML = UserWorkexperience;

}

inputBtn.addEventListener('click', submitBtn);