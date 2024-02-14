// 选择所有具有 .panel 类的元素，并将它们存储在名为 panels 的 NodeList 对象中。
const panels = document.querySelectorAll('.panel');

//  forEach 循环，用于遍历 panels NodeList 中的每一个 .panel 元素。
//  当箭头函数只有一个参数时，可以不带圆括号。如果箭头函数没有参数，则需要保留空括号 ()。
panels.forEach(panel => {
    // 对每个 .panel 元素添加了一个点击事件监听器，当用户点击该元素时，将会触发一个匿名的箭头函数。
    panel.addEventListener('click', () => {
        // 移除所有 .panel 元素的 active 类。
        removeActiveClass();
        // 为当前点击的 .panel 元素添加 active 类，从而实现了面板的展开效果。
        panel.classList.add('active');
    })
});

// 用于移除所有 .panel 元素的 active 类。在点击事件监听器中被调用。
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

/*
forEach() 方法用于遍历数组或类数组对象中的每个元素，并为每个元素执行指定的回调函数。

const array = ['a', 'b', 'c'];
array.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});

输出：
Index 0: a
Index 1: b
Index 2: c
*/