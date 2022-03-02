let day_number = 1;
let day = ""; // String 명시

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "error";
    break;
}

console.log(day); // Monday

// ---------------
// 여러 개의 case에 동일한 코드를 실행시키고 싶을 경우
let browser = "Chrome";
let msg = "";

switch (browser) {
  case "Explorer":
    msg = "ActiveX Installation required";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browser";
    break;
  default:
    msg = "Unsupported browser";
    break;
}

console.log(msg);
