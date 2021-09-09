function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    console.log("choice number ",items[idx]);
    return items[idx]
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            console.log(items[i],item)
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove}