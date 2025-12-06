import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchGroup.module.scss';
import { FaMapMarkerAlt, FaSearch, FaChevronDown } from 'react-icons/fa';

import { getAllProvinces } from '~/services/provinceService'; 

const cx = classNames.bind(styles);

function SearchGroup() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Toàn quốc');
    
    const [locationGroups, setLocationGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const wrapperRef = useRef(null);

    const processProvinces = (data) => {
        const cleanData = data.map(item => {
            const rawName = item.province || ""; 
            return rawName.replace(/^(Tỉnh|Thành phố)\s+/, '');
        });

        cleanData.sort((a, b) => a.localeCompare(b));

        const groups = {};
        cleanData.forEach(city => {
            const firstLetter = city.charAt(0).toUpperCase();
            if (!groups[firstLetter]) {
                groups[firstLetter] = [];
            }
            groups[firstLetter].push(city);
        });

        return Object.keys(groups).map(letter => ({
            letter,
            cities: groups[letter]
        }));
    };

    useEffect(() => {
        const fetchLocationData = async () => {
            setIsLoading(true);
            const provinces = await getAllProvinces();
            if (provinces && provinces.length > 0) {
                const groupedData = processProvinces(provinces);
                setLocationGroups(groupedData);
            }
            
            setIsLoading(false);
        };

        fetchLocationData();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const handleSelectLocation = (city) => {
        setSelectedLocation(city);
        setShowDropdown(false);
    };

    return (
        <div className={cx('search-bar-wrapper')} ref={wrapperRef}>
            <div className={cx('search-bar')}>
                <div 
                    className={cx('location-selector')} 
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <FaMapMarkerAlt className={cx('icon-map')} />
                    <span className={cx('location-text')}>{selectedLocation}</span>
                    <FaChevronDown className={cx('icon-chevron')} />
                </div>
                <div className={cx('divider')}></div>
                <div className={cx('input-container')}>
                    <input type="text" placeholder="Tìm kiếm việc làm hoặc công ty" className={cx('search-input')} />
                </div>
                <div className={cx('divider')}></div>

                <div className={cx('btn-search')}>
                    <FaSearch className={cx('icon-search')} />
                    <span>Tìm kiếm</span>
                </div>
            </div>

            {showDropdown && (
                <div className={cx('dropdown-menu')}>
                    <div className={cx('dropdown-header')}>
                        <span 
                            className={cx('tag', { active: selectedLocation === 'Toàn quốc' })}
                            onClick={() => handleSelectLocation('Toàn quốc')}
                        >
                            Toàn quốc
                        </span>
                    </div>
                    <div className={cx('city-list')}>
                        {isLoading ? (
                            <div style={{ padding: '10px', textAlign: 'center', color: '#666' }}>Đang tải...</div>
                        ) : (
                            locationGroups.map((group, index) => (
                                <div key={index} className={cx('city-group')}>
                                    <div className={cx('group-letter')}>{group.letter}</div>
                                    <div className={cx('group-items')}>
                                        {group.cities.map((city) => (
                                            <span 
                                                key={city} 
                                                className={cx('city-item')}
                                                onClick={() => handleSelectLocation(city)}
                                            >
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchGroup;