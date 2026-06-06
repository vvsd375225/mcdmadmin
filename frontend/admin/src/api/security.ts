import request from '@/utils/request'

export function getSecurityListApi(params: any) {
  return request.get('/admin/security/index', { params })
}
export function getSecurityLogsApi(params: any) {
  return request.get('/admin/security/logs', { params })
}
export function getSecurityStatsApi() {
  return request.get('/admin/security/stats')
}
export function unblockIpApi(ip: string) {
  return request.post('/admin/security/unblock', { ip })
}
export function clearLogsApi() {
  return request.post('/admin/security/clear-logs')
}
