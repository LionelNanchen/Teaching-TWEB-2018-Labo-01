let i = 0;
var b = false;
function followMe() {
    if (b) {
        alert('Already following');
    } else {
        b = true;
        alert('Now following');
    }
}