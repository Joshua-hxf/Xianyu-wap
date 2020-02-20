import axios from 'axios'

export const serverUrl = 'https://www.feizhouxianyu.cn:4003'

export function getShowNoteList () {
  // 获取首页展示文章
  return axios({
    method: 'get',
    url: `${serverUrl}/getShowNoteList`
  })
}

export function getNote (topic, id) {
  // 获取文章详情
  return axios({
    method: 'post',
    url: `${serverUrl}/getNote`,
    params: {
      topic,
      id
    }
  })
}

export function getNoteList (topic) {
  // 获取该分类分章
  return axios({
    method: 'post',
    url: `${serverUrl}/getNoteList`,
    params: {
      topic
    }
  })
}

export function getAllNote () {
  // 获取所有文章
  return axios({
    method: 'get',
    url: `${serverUrl}/getAllNote`
  })
}
