


export const SectionTitle = ({ title="Readme Generator", desc="Section Format" }) => {
    return (
        <div className="w-[75%] sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4 pt-8">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {title}
                </h2>
                {desc && (
                    <p className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
}