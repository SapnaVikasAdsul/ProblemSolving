
function debounce(fn, delay) {
    let timer;


    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

function search(query) {
    console.log("Api call for: ", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("R");
debouncedSearch("Re");
debouncedSearch("Rea");
debouncedSearch("React");