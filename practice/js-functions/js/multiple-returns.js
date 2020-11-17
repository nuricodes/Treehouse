const isFieldEmpty = () => {
  const field = document.querySelector('#info');
//  if (field.value === '') {
  if (!field.value) {  //also works
   return true; 
  } else {
    return false;
  }
}

const fieldTest = isFieldEmpty();

//if (fieldTest === true) {
if (fieldTest) {
  alert("Please provide your information");
}