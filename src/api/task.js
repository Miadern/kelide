import request from '@/utils/request'

/**
 * 工单状态列表
 * @returns
 */
export const getAllTaskStatus = () => {
  return request({
    url: `/api/task-service/task/allTaskStatus`,
    method: 'GET',
  })
}

/**
 * 工单搜索
 * @returns
 */
export const getTaskList = (params) => {
  return request({
    url: `/api/task-service/task/search`,
    method: 'GET',
    params,
  })
}

/**
 * 获取补货预警值
 * @returns
 */
export const getAlertValue = () => {
  return request({
    url: `/api/task-service/task/supplyAlertValue`,
    method: 'GET',
  })
}

/**
 * 设置自动补货工单阈值
 * @param {*} alertValue 预警值(百分比，如50代表，满量的百分之50为补货预警值)
 * @returns
 */
export const setAlertValue = (alertValue) => {
  return request({
    url: `/api/task-service/task/autoSupplyConfig`,
    method: 'POST',
    data: { alertValue },
  })
}

/**
 *
 * @param {*} innerCode
 * @returns
 */
export const getOperatorList = (innerCode) => {
  return request({
    url: `/api/user-service/user/operatorList/${innerCode}`,
    method: 'GET',
  })
}
