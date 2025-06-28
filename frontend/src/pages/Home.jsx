import { Typography } from 'antd';

export default function Home() {
    return (
        <div style={{ padding: '24px' }}>
            <Typography.Title>Welcome to Hotel Booking!</Typography.Title>
            <Typography.Paragraph>
                Please select a city from the navigation to view available hotels.
            </Typography.Paragraph>
        </div>
    );
}
