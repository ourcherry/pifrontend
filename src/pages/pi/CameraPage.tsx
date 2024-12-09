import { useState } from 'react';
import { Button } from '@/components';

const SERVER_URL = 'http://192.168.0.27:5000/';
const VIDEO_URL = 'http://192.168.0.27:5000/video_feed';
const CAPTURE_URL = 'http://192.168.0.27:5000/capture';
const COLLAGE_URL = 'http://192.168.0.27:5000/collage';

const CameraPage = () => {
    const [capturedImages, setCapturedImages] = useState<string[]>([]);
    const [collagePath, setCollagePath] = useState<string | null>(null);

    // 캡처 요청
    const handleCapture = async () => {
        const response = await fetch(CAPTURE_URL, { method: 'POST' });
        const data = await response.json();
        console.log(data);
        setCapturedImages((prev) => [...prev, SERVER_URL + data.imagePath]);
    };

    // 콜라주 생성 요청
    const handleCreateCollage = async () => {
        const response = await fetch(COLLAGE_URL, { method: 'POST' });
        const data = await response.json();
        setCollagePath(SERVER_URL + data.collagePath);
    };

    return (
        <div>
            <h1>📸 인생네컷 서비스 🍒</h1>
            <img
                src={VIDEO_URL}
                alt="Live Stream"
                width="480"
                height="640"
                style={{ border: '1px solid black' }}
            />
            <div>
                <Button onClick={handleCapture}>📸 촬영</Button>
                <Button onClick={handleCreateCollage}>🎨 콜라주 생성</Button>
            </div>
            <div>
                <h2>촬영된 사진</h2>
                {capturedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Captured ${index}`}
                        width="160"
                    />
                ))}
            </div>
            {collagePath && (
                <div>
                    <h2>생성된 콜라주</h2>
                    <img src={collagePath} alt="Collage" width="320" />
                </div>
            )}
        </div>
    );
};

export default CameraPage;
