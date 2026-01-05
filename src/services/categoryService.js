import * as httpRequest from '~/utils/httpRequest';

export const getAllCategories = async () => {
    try {
        const res = await httpRequest.get('categories/all');
        return res;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};