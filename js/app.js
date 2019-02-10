//variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'); 

//listeners

LoadEventListeners();

function LoadEventListeners(){
    // when a new course is added
    courses.addEventListener('click', buyCourse);

    // when the shopping cart remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);
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

}

// remove course from the shopping cart
function removeCourse(e){
    e.preventDefault()
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove()
    }
}