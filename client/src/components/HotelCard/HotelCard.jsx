import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, Card } from "@/components/ui/card"
import { StarIcon } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { formattedPrice, truncateDescription } from '@/lib/utils'

const HotelCard = ({ id, imgURL, hotelName, stars, description, price }) => {
    const imageURL = imgURL || "https://via.placeholder.com/400x250";
    const formattedPriceResult = formattedPrice(price);
    const truncateDescriptionResult = truncateDescription(description);

    return (
        <Link to={`/hotel/${id}`}>
            <Card>
                <img
                    alt="Hotel Image"
                    className="w-full h-48 object-cover"
                    height={250}
                    src={imageURL}
                    style={{
                        aspectRatio: "400/250",
                        objectFit: "cover",
                    }}
                    width={400}
                />
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{hotelName}</h3>
                        <div className="flex items-center space-x-1 text-yellow-500">
                            <StarIcon className="h-4 w-4" />
                            <span className="text-sm font-medium">{stars}</span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">
                        {truncateDescriptionResult}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${formattedPriceResult}/Noche</span>
                        <Button variant="primary">Reservar</Button>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default HotelCard