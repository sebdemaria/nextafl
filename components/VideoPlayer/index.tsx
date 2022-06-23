interface VideoPlayerProps {
    language: string;

    classProp?: string;

    moreClass?: string;
}

const VideoPlayer = ({
    language,
    classProp = "",
    moreClass = "",
}: VideoPlayerProps) => {
    return language == "en" ? (
        <video
            className={`${classProp} ${moreClass}`}
            // poster="../../public/assets/home/videoThumbnails/video-afluenta-finance-en.png"
            controls
        >
            <source
                src={
                    "https://ar-image-storage-prod.s3.amazonaws.com/afluenta/public/assets/videos/afluenta-finance-english2.mp4"
                }
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    ) : (
        <video
            className={`${classProp} ${moreClass}`}
            // poster="../../public/assets/home/videoThumbnails/video-afluenta-finance-es.png"
            controls
        >
            <source
                src={
                    "https://ar-image-storage-prod.s3.amazonaws.com/afluenta/public/assets/videos/afluenta-finance-espan%CC%83ol2.mp4"
                }
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
