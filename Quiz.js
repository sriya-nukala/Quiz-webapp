const data = [
    {
        question:"What does HTML stand for?",
        a: "Hyperlinks and Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hallow tool Markup Language",
        correct:"c",
    },
    {
        question:"Who is making the Web standards?",
        a: "Microsoft",
        b: "Mozilla",
        c: "Google",
        d: "The World Wide Web Consortium",
        correct:"d",
    },
    {
        question:"What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<brk>",
        correct:"a",
    },
    {
        question:"Choose the correct HTML element to define important text",
        a: "<strong>",
        b: "<important>",
        c: "<b>",
        d: "i",
        correct:"a",
    },
    {
        question:"Which character is used to indicate an end tag?",
        a: "/",
        b: "*",
        c: "^",
        d: "<",
        correct:"a",
    },
    {
        question:"How can you make a numbered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<list>",
        d: "<dl>",
        correct:"a",
    },
    {
        question:"How do you create a function in JavaScript?",
        a: "func myFunc()",
        b: "func: myFunc()",
        c: "function = myFunc()",
        d: "function myFunc()",
        correct:"d",
    },
    {
        question:"What does PHP stand for?",
        a: "Personel Hypertext Processor",
        b: "Hypertext Preprocessor",
        c: "Private Home Page",
        d: "Text Processor",
        correct:"b",
    },
    {
        question:"All variables in PHP start with which symbol?",
        a: "!",
        b: "%",
        c: "$",
        d: "&",
        correct:"c",
    },
    {
        question:"The PHP syntax is most similar to:",
        a: "JavaScript",
        b: "Java",
        c: "VBScript",
        d: "Perl and C",
        correct:"d",
    },
    

    

    

];
var quiz=document.getElementById('quii');
var ans=document.querySelectorAll('.answer');
var que=document.getElementById('question');
var atext=document.getElementById('atext');
var btext=document.getElementById('btext');
var ctext=document.getElementById('ctext');
var dtext=document.getElementById('dtext');
var btn=document.getElementById('button');
var re=document.getElementById('reload');

let curquiz=0;
let score=0;
load();
function load(){
    deselect()
    // $.ajax({
    //     url:"wtassign.php",
    //     method:"post",
    //     data:score,
    //     success : function(res){
    //         console.log(res);
    //     }

    // });
    var curquizdata=data[curquiz];
    que.innerText=curquizdata.question;
    atext.innerText=curquizdata.a;
    btext.innerText=curquizdata.b;
    ctext.innerText=curquizdata.c;
    dtext.innerText=curquizdata.d;

}
function deselect(){
    ans.forEach(anse => anse.checked=false)

}
function getselect(){
    let answer
    ans.forEach(anse=>{
        if(anse.checked){
            answer=anse.id
        }
    })
    return answer
}
btn.addEventListener('click', () => {
    const answer = getselect()
    if(answer) {
       if(answer === data[curquiz].correct) {
           score++
       }

       curquiz++

       if(curquiz < data.length) {
           load()
       } else {
           re.innerHTML=score;
        
           quiz.innerHTML = `
           <h2>You answered ${score}/${data.length} questions correctly</h2>
            <button style="background-color: rgb(47, 53, 61);
            color: #fff;
            border: none;
            display: block;
            cursor: pointer;
            width: 100%;
            font-size: 1.1rem;
            padding: 1.3rem;" onclick="location.reload()">Reload</button>
            `
       }
    }
})
