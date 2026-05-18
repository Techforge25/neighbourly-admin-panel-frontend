import TopRecommenderCategory from "./TopRecommenderCategory";
import RecentRecommendations from "./RecentRecommendations";

export function InsightsRow() {
  return (
    <section className="mt-10 grid gap-6 xl:grid-cols-[1.45fr_1fr] lg:gap-8">
      <TopRecommenderCategory />
      <RecentRecommendations />
    </section>
  );
}
