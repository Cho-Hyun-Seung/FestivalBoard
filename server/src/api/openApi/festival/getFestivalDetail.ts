import axios from 'axios'

const getFestivalDetail = async () => {
  let url =
    'http://api.data.go.kr/openapi/tn_pubr_public_pblprfr_event_info_api'
  let queryParams = '?' + encodeURIComponent('serviceKey') + '='
  process.env.SERVICE_KEY /* Service Key*/
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1') /* */
  queryParams +=
    '&' +
    encodeURIComponent('numOfRows') +
    '=' +
    encodeURIComponent('100') /* */
  queryParams +=
    '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json') /* */
  console.log(url + queryParams)
  try {
    const requestUrl = url + queryParams
    const res = await axios.get(requestUrl)
    const resData = await res.data.response.body.items
    let eventArr: any[] = []
    console.log(resData)
    return resData.json({ message: resData, success: true })
  } catch (err) {
    return err
  }
}

export default getFestivalDetail
