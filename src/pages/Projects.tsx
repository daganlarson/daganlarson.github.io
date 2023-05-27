import Card from "../components/Card";
import SchedulerCard from "./projects/scheduler/scheduler_card";
import XWinderCard from "./projects/xwinder/xwinder_card";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <XWinderCard />
      <SchedulerCard />
    </>
  );
}

export default Projects;
