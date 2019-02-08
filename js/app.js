//variables
const courses = document.querySelector('#courses-list')

//listeners

LoadEventListeners();

function LoadEventListeners(){
    // when a new course is added
    courses.addEventListener('click', buyCourse);
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

function getCourseInfo(course){
//    create an object with course data
  const courseInfo = {
      image: course.querySelector('img').src,
      title: course.querySelector('h4').textContent,
      price: course.querySelector('.price span').textContent,
      id: course.querySelector('a').getAttribute('data-id')
    

  }
  console.log(courseInfo)
}