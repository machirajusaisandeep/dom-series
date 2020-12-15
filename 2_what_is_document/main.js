//createElement
const todoList=document.getElementById("todoList");
const eleInput=document.getElementById("eleInput");
const eleBtn=document.getElementById("eleBtn");
let enteredValue="";

eleInput.addEventListener('input',function(event){
    enteredValue=event.target.value;
})
  
  eleBtn.addEventListener('click',function(){
    const listItem=  document.createElement('li');
    listItem.innerHTML=enteredValue;
    todoList.append(listItem)
  })


// createAttribute

const attrTag=document.getElementById("attributeTag");
const attrInput=document.getElementById("attributeInput");
const attrBtn=document.getElementById("attributeBtn");
attrBtn.disabled=true;
let attrName="";
attrInput.addEventListener('input',function(event){
  if(event.target.value.length > 0) {
    attrName=event.target.value;
    attrBtn.disabled=false;
  }else{
    attrBtn.disabled=true;
  }
})

attrBtn.addEventListener('click',function(){
    const createdAttr=document.createAttribute(attrName)
    createdAttr.value="added successfully";
    attrTag.setAttributeNode(createdAttr);
    attrTag.innerHTML="Attribute Added and name is "+"<b>"+attrName+"</b>";
})


