
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayEl  = document.querySelector('[name="delay"]');
const stepEl  = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const btnSubmit = document.querySelector('button');



function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};
form.addEventListener('submit', e => {
   let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount= Number(amountEl.value);
  e.preventDefault();
  for (let position = 1; position <= amount; position++){
      createPromise(position, delay)
        .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
   
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  } 
});

