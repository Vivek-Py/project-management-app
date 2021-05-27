import { Card, Typography } from "@material-ui/core";
import React from "react";
import { Row } from "react-bootstrap";

const createDate = (value) => {
	var myDate = new Date(value * 1000);
	var temp = myDate.toTimeString().indexOf(" ");
	console.log(myDate.toDateString());
	return myDate.toTimeString().slice(0, temp);
};

const createDay = (value) => {
	var myDate = new Date(value * 1000);
	var temp =
		myDate.toDateString().slice(8, 10) + myDate.toDateString().slice(3, 8);
	return temp;
};

const ProjectNoti = (props) => {
	const { projectlist } = props;

	return (
		<Row className="justify-content-md-center">
			<Card className="card-container">
				<Typography className="noti-heading" variant="h6" component="h2">
					Recently Added
				</Typography>
				{projectlist.slice(0, 4).map((project) => {
					return (
						<p id={project.id} className="project-list-item">
							{project.projecttitle} led by {project.projecthead} {"-"}{" "}
							{createDate(project.timestamp)}, {createDay(project.timestamp)}
						</p>
					);
				})}
			</Card>
		</Row>
	);
};

export default ProjectNoti;

/* 
let projectsarr = [];
  const [projects, setProjects] = useState([]);
 
  projectlist.map((project) => {
    projectsarr.push({
      tt: project.projecttitle,
      th: project.projecthead,
      dt: createDate(project.timestamp),
    });
    return projectsarr;
  });*/
