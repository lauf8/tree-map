const canvas = document.getElementById('treeMapCanvas');
const ctx = canvas.getContext('2d');

const data = [
    { name: "Coca-cola", value: 25 },
    { name: "Guarana", value: 25 },
    { name: "Fanta", value: 25 },
    { name: "Tubaina", value: 25 },
    { name: "Kuat", value: 25 },
    { name: "Fanta Uva", value: 25 },
];

function sum_total(data) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return total;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawBar(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

    
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = 2; 
    ctx.strokeRect(x, y, width, height);
}

function drawTextInsideBar(text, x, y, width, height) {
    ctx.fillStyle = '#FFF';
    ctx.font = '15px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + width / 2, y + height / 2);
}

const total = sum_total(data);

function width(total, value) {
    const percent = value / total;
    return 1000 * percent;
}

function drawChart(data) {
    let x = 0;
    data.forEach((item) => {
        const barHeight = 500;
        const y = canvas.height - barHeight;
        const color = getRandomColor();
        const barWidth = width(total, item.value);
        
        drawBar(x, y, barWidth, barHeight, color);
        drawTextInsideBar(item.name, x, y, barWidth, barHeight);
        
        x = x + barWidth;
    });
}

// Desenha o gráfico
drawChart(data);
