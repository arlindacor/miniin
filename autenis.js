function exampleFunction(arg) {
    arg = arg ?? 'default value';
    console.log('Аргумент:', arg);
}

exampleFunction(); // Output: "Аргумент: default value"
exampleFunction('test'); // Output: "Аргумент: test"
