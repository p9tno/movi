'use strict';
// Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов
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
        let newFilm = addInput.value;

        const favorite = checkbox.checked;

        // правда - НЕ ПУСТАЯ СТРОКА тогда все выполяем
        if (newFilm) {
            // наполнили объект новым фильмом, сортировка, вывод на страницу
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, moviList);
        }

        //очищаем форму, обращаемся к форме или через объекь события event.target - на котором выполняется событие
        // addForm.reset();
        event.target.reset();



    });

    // Удаление рекламы
    function deleteAdv(arr) {
        // arr.forEach(item =>{
        //     item.remove();
        // });

        //перебираем псевдомассив и удаляем рекламу
        arr.forEach(function(item) {
            item.remove();
        });
    }

    deleteAdv(adv);

    // изменение на странице
    function makeChanges() {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    makeChanges();


    function sortArr(arr) {
        // сортирукм объект с данными
        arr.sort();
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

        //удаление
        document.querySelector('.delete').forEach(function(btn, i) {
            btn.addEventListener('click', function () {
                //обратились к родительскому эл. и удаляем из HTML
                btn.parentElement.remove();
                //удаляем из базы данных
                movieDB.movies.splice(i, 1);

            });
        });
    }

    createMoviesList(movieDB.movies, moviList);

});
