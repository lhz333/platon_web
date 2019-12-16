//动态获取本地环境
const Base = process.env.API_ROOT;
const API = Base+'/platon/';


//新闻页面接口
const news = {
    // 新闻数据 手机端  没有头条
    findNewsCn: `${API}/news/findNewsCnInfoMobileOnline.do`,
    findNewsEn: `${API}/news/findNewsEnInfoMobileOnline.do`,
    // 分类列表
    findTypeCn:`${API}/type/findTypeCnOnline.do`,
    findTypeEn:`${API}/type/findTypeEnOnline.do`,
    // 新闻详情
    findNewsByIdCn:`${API}/news/findNewsCnInfoByIdOnline.do`,
    findNewsByIdEn:`${API}/news/findNewsEnInfoByIdOnline.do`,
    // 切换新闻
    findNewsDetailCnEn:`${API}/news/findNewsDetailOnline.do`,
    // 相关阅读
    findNewsByLableIdCn:`${API}/news/findPlatNewsCnByLableIdOnline.do`,
    findNewsByLableIdEn:`${API}/news/findPlatNewsEnByLableIdOnline.do`,
    // 标签
    findLabelCn:`${API}/news/pagePlatNewsCnByLableIdOnline.do`,
    findLabelEn:`${API}/news/pagePlatNewsEnByLableIdOnline.do`,
}

const media = {
    findPlatMedia:`${API}/media/findPlatMediaOnline.do`
}

const faq = {
    findFaq: `${API}/faq/findPlatFaqOnline.do`
}



export default {
    news,
    faq,
    media
}