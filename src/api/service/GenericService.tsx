import axios from 'axios';
import ApiData from '../model/types/ApiData.types';

class GenericService {
  baseUri: string;

  constructor(baseUri: string) {
    this.baseUri = baseUri;
  }

  public getAll = async (): Promise<ApiData[]> => {
    const response = await axios.get(this.baseUri);
    return response?.data;
  };

  public save = async (data: ApiData): Promise<string> => {
    const response = await axios.post(this.baseUri, data);
    return response?.data;
  };

  public update = async (id: string, data: ApiData): Promise<string> => {
    const response = await axios.put(`${this.baseUri}/${id}`, data);
    return response?.data;
  };

  public delete = async (id: string): Promise<void> => {
    const response = await axios.delete(`${this.baseUri}/${id}`);
    return response?.data;
  };
}

export default GenericService;
