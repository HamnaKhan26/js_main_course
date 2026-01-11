/**
 * @class PubSub
 * @description A simple pub/sub class
 * @example const pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    // TODO: add the callback to the subscribers
    if(!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  publish(event, data) {
    // TODO: call the callback with the data
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(callback => callback(data));
    }
  }
}

const pubsub = new PubSub();
pubsub.subscribe('event1', (data) => {
  console.log(`event1 received with data: ${data}`);
});
pubsub.publish('event1', 'Hello World!'); // should log "event1 received with data: Hello World!"
pubsub.publish('event2', 'This event has no subscribers'); // should do nothing
/**
 * @class Singleton
 * @description A simple singleton class
 * @example const singleton = new Singleton();
 */
class Singleton {
  constructor() {
    // TODO: return the same instance
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.timestamp = new Date();
    return this;
  }
  getTimestamp() {
    return this.timestamp;
  }
  getInstance() {
    return this;
  }

}

const singleton = new Singleton();
console.log(singleton.getTimestamp());
const singleton2 = new Singleton();
console.log(singleton2.getTimestamp());

console.log("Same instance? " + (singleton === singleton2));

module.exports = {
  Singleton,
  PubSub,
};
