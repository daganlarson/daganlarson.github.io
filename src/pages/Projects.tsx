import "../App.scss";
import SchedulerCard from "./projects/scheduler/scheduler_card";
import XWinderCard from "./projects/xwinder/xwinder_card";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <XWinderCard />
      <SchedulerCard />
    </div>
  );
}

export default Projects;
