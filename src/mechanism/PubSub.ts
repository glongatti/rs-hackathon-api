interface IEvents {
  [key: string]: Array<Function>;
};

class PubSub {
  
  private static instance: PubSub;

  private events: IEvents;

  private constructor() {
    this.events = {};
  }

  public static getInstance(): PubSub {
    if (!this.instance) { this.instance = new PubSub(); }
    return this.instance;
  }

  public setEvents(events: IEvents) {
    this.events = events;
  }

  public publish(event: string, payload: any): void {
    if (!this.events[event]) { throw new Error(); }
    this.events[event].forEach((fn=> fn(payload)));
  }


  public subscribe(event: string, callback: (payload: any)=>void): Function {
    if (!this.events[event]) { throw new Error(); }
    this.events[event].push(callback);
    return callback;
  }


  public unsubscribe(event: string, callback: (payload: any)=>void): void {
    const index = this.events[event].indexOf(callback);
    if (index >= 0) { this.events[event].splice(index, 1); }
  }
}

export default PubSub.getInstance();