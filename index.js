const globalVar = 'global'; // глобальная область

function myFunc() {
  const localVar = 'local'; // локальная область функции
  console.log(globalVar); // доступно
}
myFunc();
// console.log(localVar); // ошибка: localVar не определена
if (true) {
    const blockVar = 'inside block';
  }
  // console.log(blockVar); // ошибка