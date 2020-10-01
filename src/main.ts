
interface HelloWorld {
    hello: string;
    world: string;
}

const message: HelloWorld = {hello: "hello", world: "world"};

export default function hello(): string {
    return `${message.hello} ${message.world}`;
}