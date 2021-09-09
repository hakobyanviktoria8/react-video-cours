function show(a, b, c) {
    return (
        <p>
            {console.log("Show function")}
            {a + b + c}
        </p>
    )
}

function hide(a, b, c) {
    return (
        <p>
            {console.log("Show function")}
            {a - b - c}
        </p>
    )
}

export {show, hide}