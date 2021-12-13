interface Element {
  _id: string;
  name: string;
}

class ElementRequest {
  constructor(private name: string) {
    this.name = name;
  }
}

export default Element;
export { ElementRequest };
