// alert("lov")
const inputBtn = document.querySelector(".btn");

function submitBtn(){

   // certification Output
let kk = document.getElementById("certification0").value;
// console.log(kk)
document.querySelector("#certBtn").innerHTML = kk;
document.getElementById("certificationEntryButton").style.display = "none"

//  Skills Output
let ss = document.getElementById("uSkill0").value;
// console.log (ss)
document.querySelector("#sklButton").innerHTML = ss;
document.getElementById("skillsEntryButton").style.display = "none"

// job Experience Output
let ee = document.getElementById("JobExperience0").value;
// console.log (ee)
document.querySelector("#expButton").innerHTML = ee;
document.getElementById("jobsEntryButton").style.display = "none"






//     // Input for personal data
    let Usname = document.getElementById("Uname").value;
    let email = document.getElementById("mail").value;
    let address = document.getElementById("address").value;
    let Profile = document.getElementById("Profile").value;

//     // Output for personal data
    document.querySelector(".name").innerHTML = Usname;
    console.log("Usname")
    
    document.querySelector(".e-mail").innerHTML = email;
    document.querySelector(".contactAdd").innerHTML = address;
    document.querySelector(".careerProfile").innerHTML = Profile;


    //Input for Education (Secondary School)
    let userSecSchool = document.getElementById("secSchl").value;
    let usergraduation = document.getElementById("graduation").value
    //Output for Education (Secondary School)  
    document.querySelector(".sec").innerHTML = userSecSchool;
    document.querySelector(".secgrad1").innerHTML = usergraduation


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




    //Input for  Achievement
    let UserAchievement = document.getElementById("achie").value;
    //Output for Achievement
    document.querySelector(".achieve").innerHTML = UserAchievement;

}
inputBtn.addEventListener('click', submitBtn);

//    //  //Input for Certification   
     function certificationButton(){
        let userInput = prompt("Enter the number of certification you have");
        for (let i=0; i<userInput; i++){
           let i=0;
           let CertificationEntry =  document.getElementById("certBtn");
           let certInput = document.createElement("input");
           certInput.setAttribute("type","text"); 
           certInput.setAttribute("id", "certification"+(i++));
           certInput.setAttribute("class","certification")
           CertificationEntry.appendChild(certInput);
        }
     }
document.getElementById("certificationEntryButton").addEventListener("click",certificationButton);
    
    
// Input for skill
function UserSkillButton(){
   let userInputSkil = prompt("Enter the number of Skills");
   for (let i=0; i<userInputSkil; i++){
      let i=0;
      let SkillsEntry =  document.getElementById("sklButton");
      let skillsInput = document.createElement("input");
      skillsInput.setAttribute("type","text"); 
      skillsInput.setAttribute("id", "uSkill"+(i++));
      skillsInput.setAttribute("class", "uSkill" )
      SkillsEntry.appendChild(skillsInput );
  
   }

}

document.getElementById("skillsEntryButton").addEventListener("click",UserSkillButton);


    // Input for Job experiences

   function UserExperienceButton(){
      // alert("lov")
      let userInputexperiences = prompt("Enter the number of job experience");
      for (let i=0; i<userInputexperiences; i++){
         let i=0;
         let experienceEntry =  document.getElementById("expButton");
         let experienceInput = document.createElement("input");
         experienceInput.setAttribute("type","text"); 
         experienceInput.setAttribute("id", "JobExperience"+(i++));
         experienceInput.setAttribute("class", "JobExperience" )
         experienceEntry.appendChild(experienceInput );
      }
   }
   document.getElementById("jobsEntryButton").addEventListener("click",UserExperienceButton);


   //    // let UserWorkexperience1 = document.getElementById("expId1").value; 
//    // let UserWorkexperience2 = document.getElementById("expId2").value;
//    // let UserWorkexperience3 = document.getElementById("expId3").value; 
//    // let UserWorkexperience4 = document.getElementById("expId4").value;
//    // let UserWorkexperience5 = document.getElementById("expId5").value;
//    // let UserWorkexperience6 = document.getElementById("expId6").value;
//    // let UserWorkexperience7 = document.getElementById("expId7").value;
//    // //    Output for Job experiences
//    // document.querySelector(".job1").innerHTML = UserWorkexperience1;
//    // document.querySelector(".job2").innerHTML = UserWorkexperience2;
//    // document.querySelector(".job3").innerHTML = UserWorkexperience3;
//    // document.querySelector(".job4").innerHTML = UserWorkexperience4;
//    // document.querySelector(".job5").innerHTML = UserWorkexperience5;
//    // document.querySelector(".job6").innerHTML = UserWorkexperience6;
//    // document.querySelector(".job7").innerHTML = UserWorkexperience7;


   

//  inputBtn.addEventListener('click', submitBtn);
