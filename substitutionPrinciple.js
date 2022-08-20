class FlyingBird {
    fly() {
        console.log("I can fly")
    }
}

class SwimmingBird {
    swim() {
        console.log("I can swim")
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log("I can quack")
    }
}

class Penguin extends SwimmingBird {

}

const duck = new Duck()
const penguin = new Penguin()

function makeFlyingBirdFly(duck) {
    duck.fly()
}

function makeSwimmintBirdSwim(penguin) {
    penguin.swim()
}

makeFlyingBirdFly(duck)
makeSwimmintBirdSwim(penguin)
