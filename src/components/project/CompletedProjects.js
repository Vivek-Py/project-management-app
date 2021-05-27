import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Carousel, CarouselItem, Row } from "react-bootstrap";

const CompletedProjects = (props) => {
	const { projectlist } = props;

	return (
		<Row className="justify-content-md-center">
			<Card className="card-container priority completed">
				<Typography className="noti-heading" variant="h6" component="h2">
					Completed Projects{" "}
					<img
						src="https://img.icons8.com/material-outlined/21/000000/checked.png"
						alt="tick icon"
					/>
				</Typography>
				<Carousel className="carousel-container">
					{projectlist.map((project) => {
						return project.stat === "complete" ? (
							<CarouselItem>
								<p id={project.id} className="project-list-item">
									{project.projecttitle}
								</p>
							</CarouselItem>
						) : (
							""
						);
					})}
				</Carousel>
			</Card>
		</Row>
	);
};

export default CompletedProjects;
