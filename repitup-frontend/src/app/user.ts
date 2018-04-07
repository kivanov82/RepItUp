export class User {
  constructor(
    public sessionKey: string,
    public companyName: string
  ) {}

  isCivilian() {
    return this.companyName === 'Civilian';
  }

  isEntrepeneur() {
    return this.companyName === 'New School Furniture';
  }

  isMunicipal() {
    return this.companyName === 'Bruisende Binnenstad';
  }

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
