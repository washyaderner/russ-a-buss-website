`import FeaturedImage from '@/components/FeaturedImage';`
`import InstrumentalPricing from '@/components/InstrumentalPricing';`
`import ServicesGrid from '@/components/ServicesGrid';`
`import Qualifications from '@/components/Qualifications';`
`import FAQ from '@/components/FAQ';`
`import AIContactForm from '@/components/AIContactForm';`
`import AudioInGoodHands from '@/components/AudioInGoodHands';`

`export default function Home() {`
  `return (`
    `<div className="container mx-auto px-4 py-8 space-y-16">`
      `<section>`
        `<h2 className="text-3xl font-bold mb-6 text-center">Featured Work</h2>`
        `<FeaturedImage />`
      `</section>`

      `<section>`
        `<h2 className="text-3xl font-bold mb-6 text-center">Instrumental Pricing</h2>`
        `<InstrumentalPricing />`
      `</section>`

      `<AudioInGoodHands />`

      `<section>`
        `<h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>`
        `<ServicesGrid />`
      `</section>`

      `<section>`
        `<h2 className="text-3xl font-bold mb-6 text-center">Qualifications & Gear</h2>`
        `<Qualifications />`
      `</section>`

      `<section>`
        `<h2 className="text-3xl font-bold mb-6 text-center">Services FAQ & Details</h2>`
        `<FAQ />`
      `</section>`

      `<section className="max-w-2xl mx-auto">`
        `<h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>`
        `<AIContactForm />`
      `</section>`

      `<section className="text-center">`
        `<p>I look forward to hearing from you!</p>`
        `<p>Your info is never sold, just used for contact and promo code purposes</p>`
      `</section>`
    `</div>`
  `);`
`}`