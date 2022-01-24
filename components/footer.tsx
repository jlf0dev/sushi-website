import Image from "next/image"
import mapPic from '../public/map-location.jpeg'

export default function Hero() {
    return (
        <div className="text-slate-50 bg-black p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-14 items-center">
          <div>
            <p className="font-bold">Sushi</p>
            <p className="font-light">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores<br /></p>
          </div>
          <div>
            <p className="font-bold">Hours</p>
            <p className="font-light">MON - FRI: 9AM - 11PM<br />
            SAT - SUN: 5PM - 2AM<br />
            Bar open only on weekends<br /></p>
          </div>
          <div>
            <p className="font-bold">Address</p>
            <p className="font-light">25 Ohio St. Australia,<br />
            MA (912) 555 - 8900<br />
            info@themifysushi.com<br /></p>
          </div>
          <div>
            <Image src={mapPic} alt="Image of Google Map Location" />
          </div>
        </div>
      </div>
    )
}