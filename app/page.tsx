import { PageLayout } from "@/components/layout/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPropertiesSection } from "@/components/home/featured-properties-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { RecentPropertiesSection } from "@/components/home/recent-properties-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedPropertiesSection />
      <CategoriesSection />
      <RecentPropertiesSection />
      <WhyChooseUsSection />
    </PageLayout>
  )
}
