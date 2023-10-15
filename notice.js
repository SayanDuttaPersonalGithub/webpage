let showing=0;
let j=1;
function paraload() {


while(j<=10)
{
    let dal=localStorage.getItem(`p${j}`);
    let val=JSON.parse(dal)
    if(val!=null&&val.name1!=undefined)
    {
        
        let para=document.getElementById(`p${j}`);
        para.innerHTML=`<p>Notice by ${val.name1}</p>
        <br>
        <p>${val.notice1}</p>`
        console.log(val.name);
        console.log("hii");
        
        

    }
    j++;
}    
}
// function del() {
//     if(showing==1)
//     {
//         hide();
//     }
// }
function hide() {

    let div=document.getElementById('hide');
    div.style.display='none';
    showing=0;
}
function show() {
    let div=document.getElementById('hide');
    div.style.display='flex';
    showing=1;
}
let i=j;
function add() {
    let name=document.getElementById(`name`).value;
    let notice=document.getElementById(`notice-text`).value;
    let para=document.querySelector(`#p${i}`);
    para.innerHTML=`<br><p>Notice by ${name}</p>
    <br>
    <p>${notice}</p>
    <br>`
    let cont={
        name1:`${name}`,
        notice1:`${notice}`
    };
    localStorage.setItem(`p${i}`,JSON.stringify(cont));
    let obj=(localStorage.getItem(`p${i}`));
    let vala=JSON.parse(obj);
    console.log(vala.name1);
    i++;
    if(i==11)
    {
        i=1;
    }

}
