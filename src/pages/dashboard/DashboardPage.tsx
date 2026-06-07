import StatsCard from "../../components/dashboard/StatsCard";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import ProjectsOverview from "../../components/dashboard/ProjectsOverview";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import { stats } from "../../constants/dashboard.ts";

function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </section>
      <ProjectsOverview />
      <ActivityFeed />
    </div>
  );
}

export default DashboardPage;
