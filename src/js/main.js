(function () {

  t = document.getElementById('class-mini');
  t.onclick = function(){
    this.className = (this.className == 'Open')?' Close':'Open';
  };


}());

function toggle (el){
  el.style.display = (el.style.display == 'none') ? 'block' : 'none';
}




