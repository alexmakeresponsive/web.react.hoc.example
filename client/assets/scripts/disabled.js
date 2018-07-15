var elements = document.querySelectorAll('.disabled');

// console.log(elements);
if (elements) {
    elements.forEach(function (element) {
        element.addEventListener(
            'click', function (e) {
                e.preventDefault();
            }
        );
    });
}