// Преобразование типов
// Какие тут будут значения и какие?

let res1 = Number("1234826516465498456458754n"); // NaN because n can't be converted to a number
let res2 = "" + 1 + 0; // '10', this is string concatenation
let res3 = 6 / "3"; // 2, the string is converted to a number
let res4 = undefined + 1; // NaN, because undefined can't be converted to a number
let res5 = "  -9  " + 5; // ' -9 5', this is string concatenation
let res6 = "  -9  " - 5; // -14, the string is converted to a number
let res7 = 4 + 5 + "px"; // 9px, first, addition happens (left to right), then concatenation
let res8 = "$" + 4 + 5; // '$45', this is string concatenation
let res9 = true + false; // 1, converted to a number, so 1 + 0
let res10 = [1] > null; // true, array becomes the string => number, and null becomes 0, so 1 > 0
let res11 = "foo" + +"bar"; // 'fooNaN', 'bar' can't be converted to a number, so it becomes NaN, then string concatenation happens
let res12 = !!"true" == !!"false"; // true, the ! operator converts a value to its opposite boolean value. When we use !!, it's double negation. A non-empty string is always truthy
let res13 = null == ""; // false, null can only equal undefined in loose equality

// Тернарка
// Преобразовать данное условие используя тернарный оператор.

let isNightTime = true;
console.log(isNightTime ? "Turn on the lights!" : "Turn off the lights!");

// Объекты и ссылки объекты
// Почему вместо hey amy получаем результат hey arnold ?
// Что нужно делать для получения ожидаемого результата.

const greet = (person) => {
  //(person === { name: 'amy' })
  if (person.name === "amy") {
    return "hey amy";
  }
  return "hey arnold";
};

console.log(greet({ name: "amy" }));
//У першому випадку ми порівнюємо person з новим обʼєктом, в такому випадку умова ніколи не буде вірна,
//оскільки об'єкти порівнюються за посиланням, а не за значенням.
//В другому - порівнюється значення властивості обʼєкта, що є вірним.

// Строгое/нестрогое равенство
// Почему код ведет себя данным образом ?

const isBig = (thing) => {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false;
  }
  return true;
};

console.log(isBig(1));

console.log(isBig([2]));

console.log(isBig([3]));
//При нестрогому порівнянні (==) не враховуються типи значень, а порівнюються лише їхні значення.
//JavaScript автоматично виконує перетворення типів у нестрогому порівнянні. Тому ми отримуємо такий результат.

// Контекст (call/bind/apply)
// this – это контекст вызова функции.
// В глобальном контексте выполнения, за пределом функций this ссылается на глобальный объект,
//а в пределах функции this зависит от того, каким методом была вызвана функция.
// 1.Почему получаем результат undefined? И что нужно сделать чтобы получить имя?

const dog = {
  name: "Guffi",
  sayName() {
    console.log(this.name);
    return this.name; //також додано return, щоб уникнути undefined при виклику функції
  },
};

const sayName = dog.sayName.bind(dog);

console.log(sayName());
// Метод bind створює нову функцію, прив'язану до зазначеного об'єкта,
// що дозволяє викликати цю функцію в будь-який момент.

// 2. Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.
//<input id="elem" value="Hello">
const elem = document.getElementById("elem");

function funct() {
  alert(this.value);
}

funct.call(elem); //тут должно вывести value инпута

// 3. Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

//const elem = document.getElementById('elem');

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

func.call(elem, "Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'

// 4. Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().

func.apply(elem, ["Иванов", "Иван"]); //тут должно вывести 'привет, Иванов Иван'

// 5. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.
// <input id="elem" value="привет">
// const elem = document.getElementById('elem');
// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }

func = func.bind(elem);
func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'
