import axios from 'axios';

class GenericService {
  private readonly baseUri: string;

  constructor(baseUri: string) {
    this.baseUri = `/api${baseUri}`;
  }

  public getAll = async (expanded?: boolean): Promise<Array<unknown>> => {
    const response = await axios.get(
      `${this.baseUri}?expanded=${expanded ?? false}`
    );
    return response?.data;
  };

  public save = async (data: unknown): Promise<void> => {
    const response = await axios.post(this.baseUri, data);
    return response?.data;
  };

  public update = async (id: string, data: unknown): Promise<unknown> => {
    const response = await axios.put(`${this.baseUri}/${id}`, data);
    return response?.data;
  };

  public delete = async (id: string): Promise<void> => {
    const response = await axios.delete(`${this.baseUri}/${id}`);
    return response?.data;
  };
}

export default GenericService;
