import ApiData from 'api/model/mongo/types/ApiData.types';
import axios from 'axios';
import VALUES from 'constants/Dw1Constants';

class GenericService {
  constructor(private readonly baseUri: string) {
    this.baseUri = `${VALUES.API.BASE_URL}${baseUri}`;
  }

  public getAll = async (expanded?: boolean): Promise<ApiData[]> => {
    const response = await axios.get(
      `${this.baseUri}?expanded=${expanded ?? false}`
    );
    return response?.data;
  };

  public save = async (data: unknown): Promise<void> => {
    const response = await axios.post(this.baseUri, data);
    return response?.data;
  };

  public update = async (id: string, data: unknown): Promise<ApiData> => {
    const response = await axios.put(`${this.baseUri}/${id}`, data);
    return response?.data;
  };

  public delete = async (id: string): Promise<void> => {
    const response = await axios.delete(`${this.baseUri}/${id}`);
    return response?.data;
  };
}

export default GenericService;
