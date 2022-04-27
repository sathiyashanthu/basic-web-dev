let num= document.getElementById("count-el")
let nem=document.getElementById("num")
let count=0
function increment()
{
    count+=1
    num.textContent=count
}
function show()
{
    let Str = count + " - "
    nem.textContent+=Str
    num.textContent =0
    count = 0
}