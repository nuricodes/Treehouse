var xhrRoomList = new XMLHttpRequest();
xhrRoomList.onreadystatechange = function () {
    if (xhrRoomList.readyState === 4 && xhrRoomList.status === 200) {
        var rooms = JSON.parse(xhrRoomList.responseText);
        // test
        console.log(rooms)

    }
}
xhrRoomList.open('GET', 'data/rooms.json');
xhrRoomList.send();