
interface HelloWorld {
    hello: string;
    world: string;
}

const message: HelloWorld = {hello: "hello", world: "world"};

export default function hello() {
    return `${message.hello} ${message.world}`;
}