window.addEventListener("DOMContentLoaded", () => {
    //Tabs
    const tabs = document.querySelectorAll(".tabheader__item"), //все вкладки в меню 
        tabsContent = document.querySelectorAll(".tabcontent"), // контент каждой вкладки в меню
        tabsParent = document.querySelector(".tabheader__items"); //родитель всех вкладок

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        }); //скрываем весь контент во всех вкладках
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        }); //удаляем во всех вкладках класс активности
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    } //показываем контент  конкретной вкладки и добавляем ей класс активности

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        //делегируем обработчик события с родителя на потомков и управляем 2я предыдущими ф-ми
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = "2022-03-28"; //заданное время
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            //разница межу заданным временем и временем пользователя
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    } //добавляем ноль перед числом если меньшее 10


    function setClock(selector, endtime) {
        //устанавливаем таймер
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); //убрать мигание дат, установить текущую дату сразу 

        function updateClock() {
            //обновляем таймер
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadline);
    // Modal


    const modalTrigger = document.querySelectorAll("[data-modal]"), //Кнопки,вызывающее модальное окно
        modal = document.querySelector(".modal"), // само модальное окно
        modalCloseBtn = document.querySelector("[data-close]"); //отвечает за закрытие модального окна

     function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        // Или вместо 2х строк - modal.classList.toggle("show");
        document.body.style.overflow = "hidden"; //добавляем стиль,который не дает прокручивать страницу
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener("click",openModal);
    });

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        // Или вместо 2х строк - modal.classList.toggle("show");
        document.body.style.overflow = " ";
    }

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        //Если клиент нажал не на мод окно а на подложку (фон) то мод окно закр
        if (e.target === modal) {
            closeModal();
        }
    });

    // Если пользователь откр мод окно и нажал на эскейп - мод окно закр            
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    //откр мод окна через какое то опред время 
    const modalTimerId = setTimeout(openModal, 3000);

    //когда кл долистал до конца страницу - откр мод окно  
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);//удал откр мод  окна после первого долистывания до конца стр
        }

    }
    window.addEventListener("scroll", showModalByScroll);
});