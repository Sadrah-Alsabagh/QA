let userName, userGender, userMark=[];

function getName() {
    userName = prompt("Enter your name, please");
}


function ShowWelcomemsg() {
     alert("Hello " + userName);
}

// function getMark() {
//     userMark = prompt("Enter your mark, please");

// }

function getMark(score) {
    userMark = prompt("Enter your mark, please");
    let mark;
    let msg;

    
      const roundedGrade = Math.floor(userMark);

      switch (true) {
        case roundedGrade < 0:
          msg = "Invalid number";
          break;
        case roundedGrade <= 49:
          msg = `Failed with mark F (${roundedGrade})`;
          break;
        case roundedGrade <= 60:
    
          msg = `Failed with mark D (${roundedGrade})`;
          break;
        case roundedGrade <= 70:
          msg = `Failed with mark C (${roundedGrade})`;
          break;
        case roundedGrade <= 80:
          msg = `Passed with mark B (${roundedGrade})`;
          break;
        case roundedGrade <= 90:
          msg = `Passed with mark A (${roundedGrade})`;
          break;
        case roundedGrade <= 100:
          msg = `Passed with mark A+ (${roundedGrade})`;
          break;
        default:
          mark = "NaN";
          msg = "Invalid number";
          break;
      } 
      alert(msg);
    }
  
getName();
ShowWelcomemsg();
getMark();