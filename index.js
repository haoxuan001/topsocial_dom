import './index.css';
import {sidebar} from "./data/db.json"
import {profile} from "./data/db.json"

const mainLeft=document.querySelector('.main-left');
mainLeft.innerHTML=null;

// Profile
const profileItem=document.createElement('a');
profileItem.href = '/';
profileItem.classList.add('profile');
mainLeft.appendChild(profileItem);


const profilePho=document.createElement('div');
profilePho.classList.add('profile-photo');
profileItem.appendChild(profilePho);

// Image 
const img=document.createElement('img');
img.src='./images/profile/profile_1.png';
img.alt = 'profile';
profilePho.appendChild(img);
// Profile description
const profileDescription=document.createElement('div');
profileDescription.classList.add('profile-description');
profileItem.appendChild(profileDescription)

// Profile name
const profileName=document.createElement('h2');
profileName.textContent=profile.name;
profileDescription.appendChild( profileName);

const  profileAt=document.createElement('p');
profileAt.textContent=profile.at;
profileDescription.appendChild(profileAt);




//sidebar
const sideBar=document.createElement('div');
sideBar.classList.add('sidebar');
mainLeft.appendChild(sideBar);




// sidebar left 
sidebar.forEach((item) => {
 const sidebarItem=document.createElement('a') ;
 sidebarItem.classList.add('menu-item');
  const span=document.createElement('span');
  const i=document.createElement('i');
  item.icon_class_list.forEach(iconClass=>{
    i.classList.add(iconClass);
  })
  sidebarItem.classList.add(item.name)//add event
  const h2 =document.createElement('h2');
  h2.textContent=item.name;

  span.appendChild(i); 

  sidebarItem.appendChild(span);
  sidebarItem.appendChild(h2);
 
 sideBar.appendChild(sidebarItem);

});

//left btn
const leftButton=document.createElement('div');
leftButton.classList.add('btn');
mainLeft.appendChild(leftButton);
//btn label
const labelLeft=document.createElement('label');
labelLeft.classList.add('btn');
labelLeft.classList.add('btn-primary');
labelLeft.setAttribute('for', 'create-post');
labelLeft.textContent="create";
leftButton.appendChild(labelLeft);






//event

const homeDom=document.querySelector('.Home');

//event listener
homeDom.addEventListener("click",()=>{
 homeDom.classList.toggle('btn');
 homeDom.classList.toggle('btn-primary');
})
