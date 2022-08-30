import axios from 'axios';
import ApiData from 'api/model/mongo/types/ApiData.types';
import ApiDataRequest from 'api/model/requests/types/ApiDataRequest.types';

class GenericService {
  baseUri: string;

  constructor(baseUri: string) {
    this.baseUri = baseUri;
  }

  public getAll = async (lvl?: number): Promise<ApiData[]> => {
    const response = await axios.get(`${this.baseUri}?lvl=${lvl ?? 0}`);
    return response?.data;
  };

  public save = async (data: ApiDataRequest): Promise<{ message: string }> => {
    const response = await axios.post(this.baseUri, data);
    return response?.data;
  };

  public update = async (
    id: string,
    data: ApiDataRequest
  ): Promise<{ message: string }> => {
    const response = await axios.put(`${this.baseUri}/${id}`, data);
    return response?.data;
  };

  public delete = async (id: string): Promise<void> => {
    const response = await axios.delete(`${this.baseUri}/${id}`);
    return response?.data;
  };
}

export default GenericService;
