import request from "../util/poolApi";

const listPool = (page, limit, type) => {
  return request({
    url: `api/v1/pool/list-pool`,
    method: "GET",
    params: {
      page,
      limit,
      type,
    },
  });
};
const createPool = (data) => {
  return request({
    url: `api/v1/pool`,
    method: "POST",
    data,
  });
};
const editPool = (data) => {
  return request({
    url: `api/v1/pool/update`,
    method: "POST",
    data,
  });
};
const editPoolUser = (data) => {
  return request({
    url: `api/v1/pool/update-user`,
    method: "POST",
    data,
  });
};
const deletePool = (id) => {
  return request({
    url: `api/v1/pool/delete`,
    method: "POST",
    data: {
      id,
    },
  });
};
const getPoolDetail = (id) => {
  return request({
    url: `api/v1/pool/${id}`,
    method: "GET",
  });
};
export {
  listPool,
  createPool,
  deletePool,
  editPool,
  getPoolDetail,
  editPoolUser,
};
