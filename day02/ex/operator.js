function fetchData(data) {
    var receivedData;
    if (data === undefined) {
        recivedData = localStorage.getItem('item');
    }
}

fetchData(20);  //아규먼트 20

function fetchData(data) {
    var receivedData;
    receivedData = data || localStorage.getItem('item');
}