// property 

const containerElement=document.getElementById('container');
console.dir(containerElement,"this is object of type HTML Element");

// if we use console.log we will be seeing element in console 

// if we use console.dir instead we can see object of type HTML Element


// we can see a property "id" and attribute "id"

// so here getElementById is method

// let us add one attribute to it , we can add custom attributes to element 
// but we cannot add custom properties [becoz properties are browser defined]

// attribute

const createdAttr=document.createAttribute('test')
createdAttr.value="added successfully";
containerElement.setAttributeNode(createdAttr);