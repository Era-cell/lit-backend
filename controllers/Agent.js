import { SimpleBandit } from "simplebandit";

export class Agent {
    constructor() {
        this.bandits = []
        this.actions = []
    }
    add_bandit = (actions, options) => {
        const { temperature, otherOption, anotherOption } = options || {};
        const bandit = new SimpleBandit({
            actions: actions,
            temperature: temperature || 0.2
        });
        this.bandits.push(bandit)
        this.actions.push(actions)
    }

    serialize = () => {
        const arr = []
        this.bandits.forEach((bandit, index) => {
            arr.push([bandit.toJSON(), this.actions[index]])
        })
        return arr;
    }

    update = (accept, recommendations) => {
        this.bandits.forEach((bandit, index) => {
            if (accept == true) {
                bandit.accept(recommendations[index])
            } else {
                bandit.reject(recommendations[index])
            }
        });
    }
}