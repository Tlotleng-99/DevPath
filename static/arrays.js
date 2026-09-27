document.addEventListener('DOMContentLoaded', function () {
    var arrResult = document.getElementById('arr-result');
    var arrTrace = document.getElementById('arr-trace');
    var shelves = [];

    document.querySelectorAll('[data-arr]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var action = btn.getAttribute('data-arr');

            if (action === 'remove') {
                if (shelves.length > 0) {
                    var removed = shelves.pop();
                    arrTrace.textContent = '>>> shelves.pop()  // Removed "' + removed + '" from shelf ' + (shelves.length) + '\n# Shelves: [' + shelves.join(', ') + ']';
                } else {
                    arrTrace.textContent = '>>> shelves.pop()  // Error! Shelves are empty\n# (nothing to remove!)';
                }
            } else {
                var item = action.charAt(0).toUpperCase() + action.slice(1);
                shelves.push(item);
                arrTrace.textContent = '>>> shelves.append("' + item + '")  // Added to shelf ' + (shelves.length - 1) + '\n# Shelves: [' + shelves.join(', ') + ']';
            }

            renderShelves();
        });
    });

    function renderShelves() {
        if (shelves.length === 0) {
            arrResult.innerHTML = 'Shelves are empty — add some stock!';
            return;
        }
        arrResult.innerHTML = shelves.map(function (item, idx) {
            return '<div class="shelf-item"><span class="shelf-num">[' + idx + ']</span> ' + item + '</div>';
        }).join('');
    }

    renderShelves();
});
