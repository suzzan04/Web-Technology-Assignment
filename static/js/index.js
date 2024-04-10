// let btn = document.querySelector("#btn1");
let btn = document.querySelectorAll(".btn1");
let about = document.querySelector("#about")
let home = document.querySelector("#home");
let homePara = document.querySelector(".homePara");
let mainContent = document.querySelector(".main-container");
let project = document.querySelector("#portfolio")
let aboutH2 = document.querySelector(".aboutH2");
let aboutH3 = document.querySelector(".aboutH3");
let aboutP = document.querySelector(".aboutP");
let detailName = document.querySelectorAll(".detail-Title")
let detail = document.querySelectorAll(".detail");
let skill = document.querySelectorAll(".skill");
let skillPercentage = document.querySelectorAll(".skill-percent")
let educatiobBg =document.querySelector(".edu");
let experienceBg = document.querySelector(".exp");
let title = document.querySelectorAll(".title") // education & experience
let portfolio = document.querySelector(".portfolioH2");
let portfolioBg = document.querySelector("#portfolio");
let contactH2 = document.querySelector(".contactH2");
let contactTitle = document.querySelectorAll(".contact-sub-title");
let contacth4 =document.querySelectorAll(".contacth4");
let contactP = document.querySelectorAll(".contactP");
let aside = document.querySelector(".aside");
let section = document.querySelectorAll("section");
let mode = "light";
let menu= document.querySelectorAll(".menu");
let aside1= document.querySelector(".aside1");
let asideFunction = "close";
const text= document.querySelector(".typing");

const textLoad= () =>{
  setTimeout(() => {
    text.textContent="Game Developer";
  }, 0);
  setTimeout(() => {
    text.textContent="FrontEnd Developer";
  }, 4000);
}

textLoad();
setInterval(textLoad,12000);

btn.forEach((btnClick)=>{
btnClick.addEventListener("click",()=>{
  if( mode === "light"){ 
  section.forEach((sec)=>{
  sec.style.backgroundColor ="black";
  homePara.style.color="var(--text-white)";
  aboutH2.style.color="#fff";
  aboutH3.style.color = "#FFF";
  aboutP.style.color= "var(--text-white)";
  home.style.color="#fff";
  btnClick.innerText="Light";
  mode="dark"; 
});
 detailName.forEach ((details)=>{
    details.style.color="#fff";
    
  });

    detail.forEach ((info)=>{
      info.style.color="var(--text-white)";
   

    });

    skill.forEach((skills)=>{
      skills.style.color="#FFF";
    });

    skillPercentage.forEach((skill_line)=>{

      skill_line.style.color= "var(--text-white)";
    });
    title.forEach((titles)=>{
      titles.style.color="#FFF";
    });
    educatiobBg.style.backgroundColor = "var( --bg-black-900)";
    experienceBg.style.backgroundColor = "var( --bg-black-900)";
    portfolio.style.color="#fff";
    contactTitle.forEach((contact_title)=>{
      contact_title.style.color="#FFF";
    })
    contactH2.style.color="#FFF";
    contacth4.forEach((contact_h4)=>{

      contact_h4.style.color ="#FFF";
    });
    
    contactP.forEach((contact_P)=>{
      contact_P.style.color ="var(--text-white)";
    });

    aside.style.backgroundColor="var(--bg--lightGrey)";
    aside1.style.backgroundColor="var(--bg--lightGrey)";

     }
 
   else{

    section.forEach((sec)=>{
      sec.style.backgroundColor = "var(--bg-black-900)";
      home.style.color=" var(--text-black-900)";
      aboutH2.style.color=" var(--text-black-900)";
     homePara.style.color="var(--text-black-700)";
     aboutH3.style.color = " var(--text-black-900)";
     aboutP.style.color= "var(--text-black-700)";
     btnClick.innerText="Dark";
   
    });
     
   detailName.forEach ((details)=>{
      details.style.color=" var(--text-black-900)";

    });

    detail.forEach((info)=>{
      info.style.color="var(--text-black-700)";
    });

    skill.forEach((skills)=>{
      skills.style.color="var(--text-black-900)";
    })

    skillPercentage.forEach((skill_line)=>{

      skill_line.style.color= "var(--text-black-700)";
    });
    title.forEach((titles)=>{
      titles.style.color="var(--text-black-900)";
    });
    educatiobBg.style.backgroundColor = "var( --bg-black-100)";
    experienceBg.style.backgroundColor = "var( --bg-black-100)";

    portfolio.style.color="var(--text-black-900)";
    portfolioBg.style.backgroundColor="#fff";

    contactTitle.forEach((contact_title)=>{
      contact_title.style.color="var(--text-black-900)";
    })
    

    contacth4.forEach((contact_h4)=>{
      contact_h4.style.color ="var(--text-black-900)";

    });
    contactH2.style.color="var(--text-black-900)";

    contactP.forEach((contact_P)=>{
      contact_P.style.color ="var(--text-black-700)";
    });

    aside.style.backgroundColor="#FFF";
    aside1.style.backgroundColor="var( --bg-white-100)";


    mode = "light";
     }

});

});

menu.forEach((menus)=>{
  menus.addEventListener("click",()=>{
   
    if(asideFunction==="close"){
      aside1.style.display="flex";
      
  
      asideFunction="Open";
    }
  
    else{
      console.log("clicked")
      aside1.style.display="none";
  
      asideFunction = "close";
  
    }
});


});

