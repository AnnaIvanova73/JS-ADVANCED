function toggle() {

    let span = document.getElementsByTagName('span')[0];
    let div = document.getElementById('extra');

    let changeEl = {
        More: () => {
            span.innerHTML = 'Less'
            div.style.display = 'block';
        },
        Less: () => {
            span.innerHTML = 'More'
            div.style.display = 'none';
        },
    }
    span.innerHTML === 'More' ? changeEl[span.innerHTML]() : changeEl[span.innerHTML]();
}

function toggle1() {

    let span = document.getElementsByTagName('span')[0];
    let div = document.getElementById('extra');

    span.innerHTML === 'More' ? expend() : shrink();

    function expend() {
        span.innerHTML = 'Less'
        div.style.display = 'block';
    }

    function shrink() {
        span.innerHTML = 'More'
        div.style.display = 'none';
    }
}