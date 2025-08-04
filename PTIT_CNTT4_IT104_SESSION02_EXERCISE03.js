const typeConsole=(type="log")=>{
    const message = `Day la type :${type}`;

    console[type]?.(message) ??
    console.log("Phuong thuc console khong hope.In mac dinh: \n"+message);
};
typeConsole()
typeConsole("warn");
typeConsole("error");
typeConsole("abc");