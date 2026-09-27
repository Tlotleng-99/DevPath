document.addEventListener('DOMContentLoaded', function () {
    var dsResult = document.getElementById('ds-result');
    var dsTrace = document.getElementById('ds-trace');
    var stack = [];
    var queue = [];

    document.querySelectorAll('[data-ds]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var action = btn.getAttribute('data-ds');

            if (action === 'push') {
                var item = ['🥟', '🥙', '🍩', '🧁'][Math.floor(Math.random() * 4)];
                stack.push(item);
                dsTrace.textContent = '>>> stack.push("' + item + '")  # LIFO — last in, first out\n# Stack: [' + stack.join(', ') + ']';
            } else if (action === 'pop') {
                if (stack.length > 0) {
                    var popped = stack.pop();
                    dsTrace.textContent = '>>> stack.pop()  # Returns "' + popped + '"\n# Stack: [' + stack.join(', ') + ']';
                } else {
                    dsTrace.textContent = '>>> stack.pop()  # Error! Stack is empty\n# (like a fatcake stack with nothing left!)';
                }
            } else if (action === 'enqueue') {
                var passenger = ['👤', '👩', '👨', '🧑'][Math.floor(Math.random() * 4)];
                queue.push(passenger);
                dsTrace.textContent = '>>> queue.enqueue("' + passenger + '")  # FIFO — first in, first out\n# Queue: [' + queue.join(', ') + ']';
            } else if (action === 'dequeue') {
                if (queue.length > 0) {
                    var dequeued = queue.shift();
                    dsTrace.textContent = '>>> queue.dequeue()  # Returns "' + dequeued + '"\n# Queue: [' + queue.join(', ') + ']';
                } else {
                    dsTrace.textContent = '>>> queue.dequeue()  # Error! Queue is empty\n# (no one waiting at the taxi rank!)';
                }
            }

            renderDS();
        });
    });

    function renderDS() {
        dsResult.innerHTML = '<div class="ds-col"><h4>Stack (LIFO)</h4><div class="ds-items">' +
            stack.map(function (i) { return '<span>' + i + '</span>'; }).join('') +
            '</div></div><div class="ds-col"><h4>Queue (FIFO)</h4><div class="ds-items">' +
            queue.map(function (i) { return '<span>' + i + '</span>'; }).join('') +
            '</div></div>';
    }

    renderDS();
});
