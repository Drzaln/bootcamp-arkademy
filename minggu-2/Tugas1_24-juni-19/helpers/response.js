module.exports = {
  response: (res, result, status, error) => {
    let resultPrint = {};

    resultPrint.error = error || null;
    resultPrint.status_code = status || 200;
    resultPrint.result = result;

    return res.status(resultPrint.status_code).json(resultPrint);
  },

  responAdd : (res, result, status) => {
    let resp = {}
    resp.status = status
    resp.result = result
    resp.message = 'Data sudah ditambah'
    return res.status(status).json(resp)
  },

  responUpd: (res, result, status) => {
    let resp = {}
    resp.status = status
    resp.result = result
    resp.message = 'Data sudah diupdate'
    return res.status(status).json(resp)
  },

  responDlt: (res, result, status) => {
    let resp = {}
    resp.status = status
    resp.result = result
    resp.message = 'Data sudah dihapus'
    return res.status(status).json(resp)
  }
};
