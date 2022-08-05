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
