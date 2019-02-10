//variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart'); 

//listeners

LoadEventListeners();

function LoadEventListeners(){
    // when a new course is added
    courses.addEventListener('click', buyCourse);

    // when the shopping cart remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // click clear cart button
    clearCartBtn.addEventListener('click',clearCart);

    // load items from local storage when the document is ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage)
}


//functions  
function buyCourse(e){
    e.preventDefault();
 // use delegation to find the exact course added to shopping cart
 if (e.target.classList.contains('add-to-cart')){
    //  read the course values
    const course =e.target.parentElement.parentElement;

    // get course info
     getCourseInfo(course); 
 }
}
// read the HTML information of the selected course
function getCourseInfo(course){
//    create an object with course data
  const courseInfo = {
      image: course.querySelector('img').src,
      title: course.querySelector('h4').textContent,
      price: course.querySelector('.price span').textContent,
      id: course.querySelector('a').getAttribute('data-id')
     

  }
    //   insert object into the cart
    addIntoCart(courseInfo);
 
}
// display selected course in cart
function addIntoCart(course){
    // insert items into the cart table by  creating a <tr>
    const row = document.createElement('tr');
    
    // build the template('remember to use the back tic. Single quotes 
    // dont work with templates')
    row.innerHTML = `
    <tr>
        <td><img src="${course.image}" width=100 ></td> 
        <td>${course.title}</td>  
        <td>${course.price}</td> 
        <td><a href="#" class="remove" data-id="${course.id}">x</a></td> 
    </tr>
    `;
        
// add to shopping cart
    shoppingCartContent.appendChild(row); 

// add to storage
saveIntoStorage(course); 

}
// add into local storage
function saveIntoStorage(course){
    let courses = getCoursesFromStorage();

    // add the course into the array 
    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));

}
// Get from local storage
function getCoursesFromStorage(){ 

    let courses;
    // if something exists in the storage get the value otherwise create an empty array
    if (localStorage.getItem('courses') === null){
        courses = []
    }
    else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }

    return courses

}


// remove course from the shopping cart
function removeCourse(e){
    e.preventDefault()
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove()
    }
}

function clearCart(e){
// replace the existing html with blank
// shoppingCartContent.innerHTML = ``;
// recommended while loop
while(shoppingCartContent.firstChild){
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
}
    
}


// print items to shopping cart when the page loads
function getFromLocalStorage(){

    // get the items from local storage
    let coursesLS = getCoursesFromStorage();

    // loop through the courses
    coursesLS.forEach(function(course){
        // create the table row
        const row = document.createElement('tr');

        // print the content
        row.innerHTML = `
        <tr>
            <td><img src="${course.image}" width=100 ></td> 
            <td>${course.title}</td>  
            <td>${course.price}</td> 
            <td><a href="#" class="remove" data-id="${course.id}">x</a></td> 
        </tr>
        `;
        shoppingCartContent.appendChild(row); 
    });

}