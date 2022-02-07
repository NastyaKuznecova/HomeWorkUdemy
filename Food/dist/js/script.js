window.addEventListener("DOMContentLoaded" , () => {

    const tabs = document.querySelectorAll(".tabheader__item"), //все вкладки в меню 
        tabsContent = document.querySelectorAll(".tabcontent"),// контент каждой вкладки в меню
        tabsParent = document.querySelector(".tabheader__items"); //родитель всех вкладок
    
    function hideTabContent() {
        tabsContent.forEach (item => {
            item.style.display = "none";
        }); //скрываем весь контент во всех вкладках
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        }); //удаляем во всех вкладках класс активности
    }

    function showTabContent(i=0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }//показываем контент  конкретной вкладки и добавляем ей класс активности
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click" , (event) => {
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
}); 