// 1. years를 days로 변환하는 함수를 만드세요.
// 1년은 365일
// 윤년은 무시
// 입력은 오직 양수
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

function calcAge(years) {
    if(years >=0 && (Number.isInteger(years))) 
        return years*365;
}

module.exports = calcAge;