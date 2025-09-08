// users/:id => /users/1234-5678-9012...
export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    console.log(Array.from(path.matchAll(routeParametersRegex)));
}
