const process = (callback) => {
    console.log("Process completed");
    callback()
}
const doSomething = (callback) => {
    callback()
}

doSomething(
    () => process(
        () => process(
            () => process(
                () => process(
                    () => process()
                )
            )
        )
    )
)