import { ViewGamesBackendApp } from "./ViewGamesBackendApp";

try {
    new ViewGamesBackendApp().start();
} catch (error) {
    
    console.log('hola')
    console.log(error);
    process.exit(1);
}

process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
})