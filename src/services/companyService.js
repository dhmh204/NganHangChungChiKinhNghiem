import * as httpRequest from '~/utils/httpRequest';

export const getCompanies = async () => {
    try {
        const res = await httpRequest.get('companies/list');
        return res;
    } catch (error) {
        console.log('Lỗi lấy danh sách công ty:', error);
        return [];
    }
};

export const getCompanyDetail = async (id) => {
    try {
        const res = await httpRequest.get(`companies/detail/${id}`);
        return res;
    } catch (error) {
        console.log('Lỗi lấy chi tiết công ty:', error);
        return null;
    }
};