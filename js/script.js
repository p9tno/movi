'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Одержимость",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против..."
        ]
    };


    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          moviList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    addForm.addEventListener('submit', (event) => {
        //отмена стандарт действия
        event.preventDefault();

        // то что ввел пользователь
        const newFilm = addInput.value;
        // console.log(newFilm);

        const favorite = checkbox.checked;
        // console.log(favorite);

        movieDB.movies.push(newFilm);

        sortArr(movieDB.movies);


    });

    function deleteAdv(arr) {
        // adv.forEach(item =>{
        //     // console.log(item);
        //     item.remove();
        // });
        //перебираем псевдомассив и удаляем рекламу
        arr.forEach(function(item) {
            // console.log(item);
            item.remove();
        });
    }

    deleteAdv(adv);


    function makeChanges() {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    makeChanges();


    function sortArr(arr) {
        // сортирукм объект с данными
        arr.sort();
        // console.log(movieDB.movies);
    }

    sortArr(movieDB.movies);


    function createMoviesList(films, parent) {
        // console.log(moviList.innerHTML);
        parent.innerHTML = "";

        // перебираем объект и генерируем html
        films.forEach(function (film, i) {
            // moviList.innerHTML = moviList.innerHTML +, бех + перезаписывался эл.
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
    }

    createMoviesList(movieDB.movies, moviList)

});
