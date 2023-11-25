import axios from 'axios'

const getFestival = async () => {
  let url = 'http://apis.data.go.kr/B551011/KorService1/searchFestival1' /*URL*/
  let queryParams =
    '?' +
    encodeURIComponent('serviceKey') +
    '=' +
    'QJx2hZms%2FiusSOErYpQMgPGuSUKZPNI4BGQ4evg%2Fr7Rkg74u14SUMBu4QUCc8Q4zTJDrDtUyM0CNXRDTlXIdIw%3D%3D' /*서비스키*/
  queryParams +=
    '&' +
    encodeURIComponent('pageNo') +
    '=' +
    encodeURIComponent('1') /*페이지 번호*/
  queryParams +=
    '&' +
    encodeURIComponent('numOfRows') +
    '=' +
    encodeURIComponent('10000') /*한페이지 결과 수*/
  queryParams +=
    '&' +
    encodeURIComponent('_type') +
    '=' +
    encodeURIComponent('json') /*rest응답 방식*/
  queryParams +=
    '&' +
    encodeURIComponent('MobileOS') +
    '=' +
    encodeURIComponent('IOS') /*OS 구분*/
  queryParams +=
    '&' +
    encodeURIComponent('MobileApp') +
    '=' +
    encodeURIComponent('festivalBoard') /*서비스명*/
  queryParams +=
    '&' +
    encodeURIComponent('eventStartDate') +
    '=' +
    encodeURIComponent('20230101') /*서비스명*/

  const a = url + queryParams
  console.log(a)
  const res = await axios.get(a)
  const resData = await res.data.response.body.items.item
  let festivalDataArr = []
  resData.map((v) => {
    const festivalData = {
      title: v.title,
      tel: v.tel,
      firstImage: v.firstimage,
      firstImage2: v.firstimage2,
      contentId: v.contentid,
      contentTypeId: v.contenttypeid,
      startDate: v.eventstartdate,
      endDate: v.eventenddate,
    }
    festivalDataArr.push(festivalData)
  })
  console.log(resData)
  return festivalDataArr
}

export default getFestival
