function sumNumbers(a, b) {
    return a + b;
}

function sumNumbers(a, b) {
    console.log(a + b);
}

sumNumbers(10, 20);

var sumNumbers = function(a, b) {
    return a + b;
}

// 단일 책임 원칙에 벗어나는 함수
function sumNumbers(a, b) {
    var num = 1000;
    var data = {};
 
    $.get('domain.com/products/1').then(function(response) {
      data = response.data;
    });
 
    var total = a + b + num;
    return total;
  }
