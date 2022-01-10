"use strict";
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i=0; i<2; i++) {
   let a = prompt('Один из последних просмотренных фильмов?');
   let b = +prompt('На сколько оцените его?');
   if (a!== "" && b!== "" && a!== null && b!== null && a.length<50 && b.length<50 ) {
      personalMovieDB.movies[a] = b;
   } else {
      i--;
   }
}

if (personalMovieDB.count<=10) {
   console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count>10 && personalMovieDB.count<30) {
   console.log("Вы классический зритель");
}  else if (personalMovieDB.count>=30) {
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// switch (personalMovieDB.count) {
//    case 10:
//       console.log("Просмотрено довольно мало фильмов");
//       break;
//    case 20:
//       console.log("Вы классический зритель");
//       break;
//    case 30:
//       console.log("Вы киноман");
//       break;
// }

// let i = 0;
// while (i<2) {
//    let a = prompt('Один из последних просмотренных фильмов?');
//    let b = +prompt('На сколько оцените его?');
//    i++;
//    if (a!== "" && b!== "" && a!== null && b!== null && a.length>50 && b.length>50 ) {
//       personalMovieDB.movies[a] = b;
//    } else {
//       i--;
//    }
// }

// do {
//    let a = prompt('Один из последних просмотренных фильмов?');
//    let b = +prompt('На сколько оцените его?');
//    i++;
//    if (a!== "" && b!== "" && a!== null && b!== null && a.length>50 && b.length>50 ) {
//       personalMovieDB.movies[a] = b;
//    } else {
//       i--;
//    }

// } while (i<2);

// let countFilm = 0;

// do {
//     const a = prompt("Один из последних просмотренных фильмов?", ""), 
//           b = +prompt("На сколько оцените его?", "");
//           if (a != null && b != null &&  a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 countFilm++;
//                 console.log("Done!");
//             } else {
//                 console.log("error");
//                 continue;
//             }      
// }
// while (countFilm < 2);

// console.log(personalMovieDB);