const form = document.querySelector('.form')

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const formTest = event.target;
  let firstDelay= Number(formTest.elements.delay.value);
  let step = Number(formTest.elements.step.value);
  let amount = Number(formTest.elements.amount.value);

  for (let i = 1; i <= amount; i +=1) {
    createPromise(i, firstDelay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    firstDelay += step;
  }
};


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
              resolve({ position, delay });
         } else {
              reject({ position, delay });
            }
          }, delay);
        });
}
