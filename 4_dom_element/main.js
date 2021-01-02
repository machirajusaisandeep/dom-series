// we create that nav bar using javascript dom methods now


// 1) Create Nav Element and insert into body

const navBar=document.createElement('nav');

// we will set one id to it 

navBar.id='jsNavBar';

// we will append this to our body tag

// document.body.append(navBar);

// since if we append it , it will come at last we will 
// add that navbar to container element


// 2) Accessing Container Element using dom methods.


// a) querySelector

const containerQuerySelector=document.querySelector(".container");

// containerQuerySelector.append(navBar);

// querySelector uses css selectors for accessing dom elements

// b) getElementByClassName

const containerGetByClass = document.getElementsByClassName('container')[0];
containerGetByClass.append(navBar);
// getElementsByClassName uses just class name not css selector 

// getElementsByClassName returns HTML Collection (Array of Elements with
// same class name) and 0th element is our element

// 3) Adding List Items to nav bar ( Home, About,Services , Contact)

// we can add elements using many ways , we simply split them two

// a) Adding using iteration of arrays ( dynamically )

const listItems=['Home','About','Services','Contact',"Pricing"];

for(let li of listItems){
    const tempLi=document.createElement('li');
    tempLi.innerHTML=li;
    navBar.append(tempLi);
}

// if i want to add one more , simply add to array


// b) Statically Adding Them 

// const home=document.createElement('li');
// home.innerHTML="Home";
// navBar.append(home);

// const about=document.createElement('li');
// about.innerHTML="About";
// navBar.append(about);
// const services=document.createElement('li');
// services.innerHTML="Services";
// navBar.append(services);
// const contact=document.createElement('li');
// contact.innerHTML="Contact";
// navBar.append(contact);

// suppose if we want to add another list items in future we have to copy paste similarly
// long code !!!



// 4) Now we add styles using javascript

// though we can use navBar as usually , i wamt to access element using 

// getElementById

const navBarWithId=document.getElementById('jsNavBar');
// navBarWithId.style.listStyle="none";
// navBarWithId.style.display="flex";
// navBarWithId.style.justifyContent="space-between";
// navBarWithId.style.backgroundColor="rgb(76, 0, 255)";
// navBarWithId.style.padding="1rem";
// navBarWithId.style.color="#ffff";

navBarWithId.class="navBar"; // wrong

navBarWithId.setAttribute('class','navBar') //right

// we have to add class by setting attribute not directly 

// if you have doubt on it , please mention in comments so i could make
// new video on it


// or simply we can write class with all this css and add to navbar

