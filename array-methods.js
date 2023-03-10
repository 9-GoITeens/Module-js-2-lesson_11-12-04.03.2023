// Методи push() - в кінець масиву
// Метод pop() - видаляє з кінця масиву елемент
// Методи split() - перетворює рядок в масив
// Метод join() - об'єднує елементи масиву у рядок
// Метод indexOf()
// Метод includes()
// Метод slice() -повертає новий масив
// Метод splice() - заміна елементу
// Метод concat() - Об'єднує два або більше масивів в один

// 1) базові методи з масивом
// - Створити масив styles з елементами «Джаз» і «Блюз».

// - Добавте «Рок-н-ролл» в кінець.

// - Замініть значення елемента в середині на «Класика».

// - Видаліть перший елемент і виведіть його в консоль.

// - Вставте «Реп» и «Реггі» на початок масива.

// Вигляд масиву по ходу використання методів:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Класика, Рок-н-ролл
// Класика, Рок-н-ролл
// Реп, Регги, Класика, Рок-н-ролл

const styles = ["«Джаз»", "«Блюз»"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Класика", "Сальсо");
// styles[1] = "Класика";
// styles[2] = "Сальсо";
// styles[3] = "Рок-н-ролл";
// console.log(styles);

// const deleiteStyles = styles.shift();
// console.log("Видалений елемент", deleiteStyles);
// styles.push(deleiteStyles);
// styles.shift();
// styles.unshift("Реп", "Реггі");
// console.log(styles);

// .....................

// const roles = ["user", "tester", "admin"];
// console.log(roles[1]);
// console.log(roles[0]);
// console.log(roles[5]);
// console.log(roles.length);
// console.table(roles);

// console.log(roles[-1]);
// const lastIndex = roles.length - 1;
// console.log(roles[lastIndex]);
// roles.pop();
// console.log(roles);
// roles.push("support");
// console.log(roles);
// roles.shift();
// console.log(roles);
// roles.unshift("manager");
// console.log(roles);
// roles.splice(2, 3);
// console.log(roles);
// roles.splice(2, 1, "user2");
// roles.splice(2, 0, "user2");
// console.log(roles); // ["user", "tester","user2"]
// const newArr = roles.slice();
// console.log("newArr", newArr);
// console.log(roles === newArr);
// console.log(roles.includes("fkgh"));

// /////

// Задача
// Перевірити чи наша строка являється – паліндромом.
// const str = "радар";
