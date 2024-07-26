const canvas = document.getElementById('treeMapCanvas');
const ctx = canvas.getContext('2d');

const data = [
    { name: "Coca-cola", value: 35 },
    { name: "Guarana", value: 25 },
    { name: "Fanta", value: 20 },
    { name: "Tubaina", value: 20 },
    { name: "Kuat", value: 13 },
    { name: "Fanta Uva", value: 10 },
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

function side(total, value) {
    const percent = value / total;
    area_total = 800 * 800;
    area = area_total * percent;

    return Math.sqrt(area);
}

function drawChart(data) {
    let x = 0;
    let large_side = 0;
    let y = 0;
    data.forEach((item) => {
        
        
        const color = getRandomColor();
        const side_sq = side(total, item.value);
        console.log(item)
        if(x + side_sq > 800){
            x = 0;
            y = y + large_side;
            large_side = 0;

             
        } 
        
        drawBar(x, y, side_sq, side_sq, color);
        if(side_sq > large_side){
            large_side = side_sq;
        }
        
        drawTextInsideBar(item.name, x, y, side_sq, side_sq);
        
        x = x + side_sq;
    });
}

const data1 = [
    { name: "Sprite", value: 40 },
    { name: "Pepsi", value: 30 },
    { name: "Dr Pepper", value: 25 },
    { name: "7Up", value: 20 },
    { name: "Mountain Dew", value: 15 },
    { name: "Fresca", value: 10 },
];
const data3 = [
    { name: "Red Bull", value: 60 },
    { name: "Monster", value: 55 },
    { name: "Rockstar", value: 45 },
    { name: "NOS", value: 35 },
    { name: "Full Throttle", value: 25 },
    { name: "AMP", value: 20 },
];
const data4 = [
    { name: "Aquafina", value: 42 },
    { name: "Dasani", value: 38 },
    { name: "Evian", value: 35 },
    { name: "Fiji", value: 28 },
    { name: "Smartwater", value: 24 },
    { name: "Perrier", value: 18 },
];
const data5 = [
    { name: "Minute Maid", value: 45 },
    { name: "Tropicana", value: 25 },
    { name: "Simply Orange", value: 15 },
    { name: "Florida's Natural", value: 10 },
];
// Desenha o gráfico
drawChart(data);

