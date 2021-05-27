import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Row } from "react-bootstrap";

const UrgentProject = (props) => {
	const { projectlist } = props;
	return (
		<Row className="justify-content-md-center">
			<Card className="card-container priority">
				<Typography className="noti-heading" variant="h6" component="h2">
					Projects on priority
				</Typography>
				{projectlist.map((project) => {
					return (
						<p id={project.id} className="project-list-item">
							{project.urgentstatus === true && project.stat === "incomplete"
								? project.projecttitle
								: ""}
						</p>
					);
				})}
			</Card>
		</Row>
	);
};

export default UrgentProject;
