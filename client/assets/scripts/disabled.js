var elements = document.querySelectorAll('.disabled');

// console.log(elements);

elements.forEach(function (element) {
    element.addEventListener(
        'click', function (e) {
            e.preventDefault();
        }
    );
});