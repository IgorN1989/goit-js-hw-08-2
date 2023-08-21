import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name = "email"]'),
  message: document.querySelector('[name="message"]'),
};
const SAVED_FEEDBACK_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(SAVED_FEEDBACK_KEY)) ?? {};

autocompleteFields();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  savedData[evt.target.name] = evt.target.value;
  localStorage.setItem(SAVED_FEEDBACK_KEY, JSON.stringify(savedData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(SAVED_FEEDBACK_KEY);
  console.log(savedData);
}

function autocompleteFields() {
  refs.email.value = savedData.email ?? '';
  refs.message.value = savedData.message ?? '';
}
