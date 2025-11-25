import axios from 'axios';

const BASE_URL = 'https://vietnamlabs.com'; 

export const getAllProvinces = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/vietnamprovince`);
        
        if (response.data && response.data.success) {
            return response.data.data; 
        }
        return [];
    } catch (error) {
        console.error("Lỗi lấy data:", error);
        return [];
    }
};

export const getWardsByProvinceName = async (provinceName) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/vietnamdistrict/${provinceName}`);
        
        if (response.data.error === 0) {
            return response.data.data;
        }   
        return [];
    } catch (error) {
        console.error("Lỗi lấy phường/xã:", error);
        return [];
    }
};

