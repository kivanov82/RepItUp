export class User {
  constructor(
    public sessionKey: string,
    public companyName: string
  ) {}

  toJSON() {
    return {
      sessionKey: this.sessionKey,
      companyName: this.companyName
    }
  }

  static fromJSON(json) {
    const { sessionKey, companyName } = JSON.parse(json);
    return new User(sessionKey, companyName);
  }
}
