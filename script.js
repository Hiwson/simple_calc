let input = document.getElementById('dis-in');
let output = document.getElementById('dis-out');
output.value = '';
document.querySelector('.btn-clr').onclick = () => {
  input.value = ' ';
  output.value = '0';
}

function display(val){
  input.value += val;
}

function calc(){
  eq = input.value;
  let ans = output.value;
  try {
    ans += eval(eq);
  }
  catch (e) {
    ans.style.color = 'red';
    ans = "Error";
  }
  input.value = ans;
}