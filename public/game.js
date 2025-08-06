js

const wsUrl = "wss://YOUR-HEROKU-APP.herokuapp.com"; // замените позже
let socket;

document.getElementById('connectBtn').onclick = () => {
    socket = new WebSocket(wsUrl);
    socket.onopen = () => {
        document.getElementById('status').innerText = 'Подключено!';
        // Можно отправлять сообщение о присоединении
        socket.send(JSON.stringify({type: 'join', name: 'Игрок'}));
    };
    socket.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        console.log('Сообщение:', msg);
        // Обработка сообщений от сервера
    };
    socket.onclose = () => {
        document.getElementById('status').innerText = 'Отключено';
    };
};
