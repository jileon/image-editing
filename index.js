'use-strict';

const inputs= document.querySelectorAll('.controls input');
function handleUpdate(){
  // console.log(this.value);

}
inputs.forEach(item=>item.addEventListener('change', handleUpdate));
inputs.forEach(item=>item.addEventListener('mousemove', handleUpdate));

