// 입력된 숫자가 10인지 아닌지를 검사하는 코드 작성
let a = 20;
if (a == 10) {
    console.log('10이 맞습니다.');
} else {
    console.log('a가 10이 아니면 이 코드가 실행됩니다.');
}


// 만약 나이가 65세 이상이면 돈을 내지 않는다.
// 만약 나이가 18~65세 라면 만원을 낸다.
// 그렇지 않고 나이가 17세 이하면, 5천원을 낸다.
let age = 20;

if (age >= 65) {
    console.log('지불X');
} else if (age >= 18) {
    console.log('만원 지불');
} else {
    console.log('5천원 지불');
}