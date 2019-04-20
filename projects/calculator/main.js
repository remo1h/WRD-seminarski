 var displayChange = function (num) {

    var s = document.getElementById('promjena').innerHTML;
    if (s === '0') {
        s = '';
        document.getElementById('promjena').innerHTML = num;

    }

    else {

        document.getElementById('promjena').innerHTML += num;
    }

}

var clearD = function () {
    document.getElementById('promjena').innerHTML = '0';
}

var clearBack = function () {

    var s = document.getElementById('promjena').innerHTML;

    if (s.length === 1)
        document.getElementById('promjena').innerHTML = '0';


    else {
        var s = document.getElementById('promjena').innerHTML.split("");
        var temp = "";

        for (var i = 0; i < s.length - 1; i++) {
            temp += s[i];

        }

        document.getElementById('promjena').innerHTML = temp;
    }
}

var operation = function (op) {

    switch (op) {
        case '+':
            {
                var s = document.getElementById('promjena').innerHTML;
                if (s.indexOf('-') > 0) break;
                else {
                    
               document.getElementById('promjena').innerHTML += op; break;
                }
            }
        case '-':

            {
                var s = document.getElementById('promjena').innerHTML;
                if (s.indexOf('-') > 0) break;
                else {
                     document.getElementById('promjena').innerHTML += op ; break;
                }
            }

        case 'x':
            {

                var s = document.getElementById('promjena').innerHTML;
                if (s.indexOf('x') > 0) break;
                else {
                    
                    document.getElementById('promjena').innerHTML += op; break;
                }
            }
        case '÷': {


            var s = document.getElementById('promjena').innerHTML;
            if (s.indexOf('÷') > 0) break;
            else {
            

                document.getElementById('promjena').innerHTML += op; break;
            }
        }
        case '.': {

            var s = document.getElementById('promjena').innerHTML;
            if (s.indexOf('.') > 0) break;
            else {
                document.getElementById('promjena').innerHTML +=  op; break;
            }

        }


    }

}

var sum = function () {

    var s = document.getElementById('promjena').innerHTML;

    var op;
    var temp1, temp2;
    if (s.indexOf('+') > 0) {
        op = '+';

        var niz = s.split(op);

        if (niz[0].indexOf('.') > 0) {
            temp1 = parseFloat(niz[0]);
        }
        else {
            temp1 = parseInt(niz[0]);
        }

        if (niz[1].indexOf('.') > 0) {
            temp2 = parseFloat(niz[0]);
        
        }
        else {
            temp2 = parseInt(niz[1]);
        }
        var result = temp1+temp2;
        
        document.getElementById('promjena').innerHTML = result;
    }
    else if (s.indexOf('-') > 0) {


        op = '-';

        var niz = s.split(op);

        if (niz[0].indexOf('.') > 0) {

            temp1 = parseFloat(niz[0]);
        }
        else {
            temp1 = parseInt(niz[0]);
        }


        if (niz[1].indexOf('.') > 0) {
            temp2 = parseFloat(niz[0])
        }
        else {
            temp2 = parseInt(niz[1]);
        }

        document.getElementById('promjena').innerHTML = temp1 - temp2;

    }

    else if (s.indexOf('x') > 0) {

        op = 'x';

        var niz = s.split(op);

        if (niz[0].indexOf('.') > 0) {

            temp1 = parseFloat(niz[0]);
        }
        else {
            temp1 = parseInt(niz[0]);
        }


        if (niz[1].indexOf('.') > 0) {
            temp2 = parseFloat(niz[0])
        }
        else {
            temp2 = parseInt(niz[1]);
        }
        var multiply = temp1*temp2;

        var hr = document.createElement('hr');
        var d = document.getElementById('promjena');
        hr.color = 'black';
        hr.width = '3000px';
        d.appendChild(hr);
        d.style.top = '10px';

        document.getElementById('promjena').innerHTML = multiply; 
    }

    else if (s.indexOf('÷') > 0) {

        op = '÷';

        var niz = s.split(op);

        if (niz[0].indexOf('.') > 0) {

            temp1 = parseFloat(niz[0]);
        }
        else {
            temp1 = parseInt(niz[0]);
        }


        if (niz[1].indexOf('.') > 0) {
            temp2 = parseFloat(niz[0])
        }
        else {
            temp2 = parseInt(niz[1]);
        }

        if (temp2 === 0) {
            document.getElementById('promjena').innerHTML = 'Cant divide';
        }
        else {
            document.getElementById('promjena').innerHTML = temp1 / temp2;
        }

    }




}

/*
var displayChange = function(num){
    var s = document.getElementById('promjena').innerHTML;
    if(s[0]==='0'){
        s = '';
        document.getElementById('promjena').innerHTML= num;
    }
    else{ document.getElementById('promjena').innerHTML += num;
}
}
var clearD = function(){
    document.getElementById('promjena').innerHTML = '0';
}
var clearBack = function(){
    var s = document.getElementById('promjena').innerHTML;
    var niz = '';
    if(s.length === 1){
        document.getElementById('promjena').innerHTML = '0';
    }
    else{
       for(var i=0;i<s.length-1;i++){
           niz += s[i];
       }
       document.getElementById('promjena').innerHTML = niz;
    }
}

*/