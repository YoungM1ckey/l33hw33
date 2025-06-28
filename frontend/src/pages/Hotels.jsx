import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHotelsByCity } from '../features/hotels/hotelsSlice.js';
import { List, Card, Spin, Alert, Typography } from 'antd';

export default function Hotels() {
    const { city } = useParams();
    const dispatch = useDispatch();
    const hotels = useSelector((state) => state.hotels.hotels);
    const status = useSelector((state) => state.hotels.status);
    const error = useSelector((state) => state.hotels.error);

    useEffect(() => {
        dispatch(fetchHotelsByCity(city));
    }, [city, dispatch]);

    return (
        <div style={{ padding: '24px' }}>
            <Typography.Title level={2}>Hotels in {city}</Typography.Title>

            {status === 'loading' && <Spin tip="Loading hotels..." />}
            {status === 'failed' && <Alert message={`Error: ${error}`} type="error" />}
            {status === 'succeeded' && (
                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={hotels}
                    renderItem={(hotel) => (
                        <List.Item>
                            <Card title={hotel.name}>{hotel.address}</Card>
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
}
