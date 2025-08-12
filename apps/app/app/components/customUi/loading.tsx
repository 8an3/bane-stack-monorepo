
export function Loading({ text = 'Loading...', size = 6, color = 'border-blue-500' }) {
    return (
        <div className='flex items-center gap-3'>
            <div className="flex items-center justify-center h-full">
                <div className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-${color} border-solid`}></div>
            </div>
            <p className='ml-3'>{text}</p>
        </div>
    );
}