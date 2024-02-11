import { Agent } from "./Agent.js";
import { SimpleBandit } from 'simplebandit'
const agent = new Agent();

agent.add_bandit(["mt1", "mt2", "mt3", "mt4", "mt5", "mt6"], { temperature: 0.3 })
agent.add_bandit(["tt1", "tt2", "tt3", "tt4", "tt5", "tt6"], { temperature: 0.3 })
agent.add_bandit(["ss1", "ss2", "ss3", "ss4", "ss5", "ss6", "ss7", "ss8", "ss9", "ss10", "ss11", "ss12", "ss13", "ss14", "ss15", "ss16"], { temperature: 0.3 })

const serialized_agent = agent.serialize();

export {
    serialized_agent,
    agent
}