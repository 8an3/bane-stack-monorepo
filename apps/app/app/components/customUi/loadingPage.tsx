

export function LoadingPage({ text = 'Loading page...', size = 12, color = 'border-blue-500' }) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <div className={`h-${size} w-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin mx-auto mb-4`}></div>
                <div className="text-lg font-medium text-gray-700">{text}</div>
                <div className="text-sm text-gray-500 mt-2">Fetching build settings from server</div>
            </div>
        </div>
    );
}