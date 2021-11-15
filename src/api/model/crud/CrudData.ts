import ApiData from '../types/ApiData.types';

interface CrudData {
  data?: ApiData;
  creating?: boolean;
  updating?: boolean;
  deleting?: boolean;
}

export default CrudData;
