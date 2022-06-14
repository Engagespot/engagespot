import axios from 'axios';

const ListLogs = (appId, pageNo) => {
  // the pageSize in LogTable will always be one less than the limit(logs per Page)
  // this is to show the next Pagination button
  // pageSize is currently 5
  return axios.get(`/api/v1/apps/${appId}/logs?limit=6&page=${pageNo}`);
};

export { ListLogs };
