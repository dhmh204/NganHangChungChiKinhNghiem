import * as httpRequest from '~/utils/httpRequest';

export const getJobPosts = async () => {
    try {
        const res = await httpRequest.get('job-post/list');
        return res;
    } catch (error) {
        console.log('Lỗi lấy danh sách bài đăng:', error);
        return [];
    }
};

export const getJobPostDetail = async (id) => {
    try {
        const res = await httpRequest.get(`job-post/details/${id}`);
        return res;
    } catch (error) {
        console.log('Lỗi lấy chi tiết bài đăng:', error);
        return null;
    }
};

export const getJobPostsByCompany = async (companyId) => {
    try {
        const res = await httpRequest.get('job-post/search', {
            params: {
                companyId: companyId
            }
        });
        console.log("Dữ liệu API Search trả về:", res);
        return res;
    } catch (error) {
        console.log('Lỗi lấy bài đăng theo công ty:', error);
        return [];
    }
};

export const getJobPostsByPosition = async (posId) => {
    try {
        const res = await httpRequest.get('job-post/search', {
            params: { posId: posId }
        });
        console.log("Dữ liệu API Search trả về:", res);
        return res;
    } catch (error) {
        console.log('Lỗi lấy bài đăng theo vị trí:', error);
        return [];
    }
};