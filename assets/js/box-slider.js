var counter = 1;
/* setInterval cho phép bạn thực hiện 1 lhoarng thời gian nào đó trong tươnglai*/ 
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 4){
        counter = 1;
    }
},4000);