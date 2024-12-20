const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD',
    '#E74C3C', '#3498DB', '#2ECC71', '#1ABC9C', '#9B59B6',
    '#34495E', '#F39C12', '#D35400', '#C0392B', '#7D3C98'
];

document.getElementById('colorButton').addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});