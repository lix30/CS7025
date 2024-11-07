
function getClickCount() {
    let count = localStorage.getItem('clickCount');
    if (count === null) {
   
        count = 0;
        localStorage.setItem('clickCount', count);
    }
    return parseInt(count, 10);
}


function updateClickCount() {
    const count = getClickCount();
    document.getElementById('clickCount').textContent = count;
}


document.getElementById('clickButton').addEventListener('click', () => {
    let currentCount = getClickCount();
    currentCount++;
    localStorage.setItem('clickCount', currentCount);
    updateClickCount();
});

updateClickCount();