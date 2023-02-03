function alertPopup(title = 'Alert', description = 'Sample alert text') {
   let alertModal = document.querySelector('.alert__box');
   document.querySelector('.alert__title').innerHTML = title;
   document.querySelector('.alert__description').innerHTML = description;
   alertModal.classList.add('fade');
   setTimeout(function () {
      alertModal.classList.remove('fade');
   }, 2000);
}

function warningPopup(title = 'Warning', description = 'Sample warning text') {
   let warningModal = document.querySelector('.warning__box');
   document.querySelector('.warning__title').innerHTML = title;
   document.querySelector('.warning__description').innerHTML = description;
   warningModal.classList.add('fade');
   setTimeout(function () {
      warningModal.classList.remove('fade');
   }, 2000);
}

function errorPopup(title = 'Error', description = 'Sample error text') {
   let errorModal = document.querySelector('.error__box');
   document.querySelector('.error__title').innerHTML = title;
   document.querySelector('.error__description').innerHTML = description;
   errorModal.classList.add('fade');
   setTimeout(function () {
      errorModal.classList.remove('fade');
   }, 2000);
}
