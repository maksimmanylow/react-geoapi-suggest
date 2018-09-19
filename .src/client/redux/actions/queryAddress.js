import { v4 } from 'uuid';
import C from '../constants';

const queryAddress = query => ({
  type: C.QUERY_ADDRESS,
  id: v4(),
  query,
  timestamp: new Date().toString()
});

export default queryAddress;
