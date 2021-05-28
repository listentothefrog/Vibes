const features = [
    {
        feature: "Easy for new users",
        image: "https://i.pinimg.com/originals/21/3d/c0/213dc0ed0a2e69d1978c75bfbcff903a.png", 
        key: "golden"
    },
    {
        feature: "Mobile IOS & Android(Comming in the near future)", 
        image: "https://i.pinimg.com/originals/21/3d/c0/213dc0ed0a2e69d1978c75bfbcff903a.png",
        key: "silver"
    },
    {
        feature: "Join other group dm's with an invite link",
        image: "https://i.pinimg.com/originals/21/3d/c0/213dc0ed0a2e69d1978c75bfbcff903a.png",
        key: "bronze"
    },
    {
        feature: "Open Source",
        image: "https://i.pinimg.com/originals/21/3d/c0/213dc0ed0a2e69d1978c75bfbcff903a.png",
        key: "stupid"
    },
]
export const Features = () => {
    return (
        <div>
            {features.map((features) => {
                return (
                    <div className="flex items-center p-2">
                        <div><img src={features.image} className="w-10" alt="Check Icon"/></div>
                        <div><h1 className="text-2xl">{features.feature}</h1></div>
                    </div>
                )
            })}
        </div>
    )
}
