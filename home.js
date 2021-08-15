// console.log("hello bhaskar");
// alert("see here");
// console.log(b);
// var b="bhaskar";
// console.log(b);
// var bhanu= prompt ('what is your age?');
// document.getElementById('demo').innerHTML= bhanu;

// function abc()
// {
//     var name=prompt('what is your name?');
//     var result='hii' + ' ' + name;
//     console.log(result);
// }

// abc();

// function add(n1, n2)
// {
//     var result =n1+n2;
//     console.log(result);
// }
// add(2,3);

// var n=0;
// while(n<10)
// {
//     n++;
//     console.log(n);
// }

function age()
{
    var birthyear= prompt('whats your birthyear');
    var x= (2021-birthyear)*365;
    console.log(x);

    
    var h1=document.createElement('h1');
    var textresult=document.createTextNode('you are ' + x + 'days old.');
    h1.setAttribute('id','ageindayz');
    h1.appendChild(textresult);
    document.getElementById('result').appendChild(h1);

}
// age();

function reset()
{
    document.getElementById('ageindayz').remove();
}