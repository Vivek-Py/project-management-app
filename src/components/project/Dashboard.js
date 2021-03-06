import { IconButton, List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";

import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import { db } from "../auth/Config";
import ProjectNoti from "./ProjectNoti";
import UrgentProject from "./UrgentProject";
import CompletedProjects from "./CompletedProjects";

import { motion } from "framer-motion";

const Dashboard = () => {
	const classes = useStyles();
	const blur = "blur";

	const [projectlist, setprojectlist] = useState([
		{
			enddate: "2021-00-00",
			id: "NONE",
			projectdesc: "This is a dummy project",
			projecthead: "Jason",
			projecttitle: "Dummy Title",
			teammembers: "1",
			urgentstatus: "true",
		},
	]);

	useEffect(() => {
		db.collection("projectlist")
			.orderBy("timestamp", "desc")
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setprojectlist(documents);
			});
	}, []);

	return (
		<Container fluid>
			<div className="dashboard-container">
				<Container>
					<Row>
						<Col style={{ margin: "auto" }} xs={12} md={8}>
							<List>
								<div className="project-container">
									{projectlist.map((project) => {
										return (
											<ListItem className="list-item" key={project.id}>
												<Card className={classes.root}>
													{project.urgentstatus ? (
														<div className="urgent-container">
															<LabelImportantIcon />
														</div>
													) : (
														""
													)}
													<CardContent
														id={project.stat === "complete" ? blur : "clear"}
													>
														<Typography
															className={classes.title}
															color="textSecondary"
															gutterBottom
														>
															ID: {project.projecttitle.substring(0, 1)}
															{project.projecthead.substring(0, 1)}
															{project.teammembers}
														</Typography>
														<Typography variant="h6" component="h2">
															{project.projecttitle}
														</Typography>
														<Typography
															className={classes.pos}
															color="textSecondary"
														>
															<ScheduleIcon
																style={{
																	fontSize: "medium",
																	paddingBottom: "3px",
																	color: "red",
																}}
															/>{" "}
															{project.enddate}
														</Typography>
														<Typography variant="body2" component="p">
															{project.projectdesc}
														</Typography>
													</CardContent>
													<CardActions
														style={{
															justifyContent: "space-evenly",
															backgroundColor: "rgb(211, 238, 247)",
														}}
													>
														{project.stat === "complete" ? (
															<motion.div
																initial={{ opacity: 0 }}
																animate={{ opacity: 1 }}
																transition={{
																	duration: 1.5,
																}}
															>
																<img
																	src="https://img.icons8.com/fluent/100/000000/work-authorisation.png"
																	alt="Completed Icon"
																	className="complete-icon"
																/>
															</motion.div>
														) : (
															""
														)}

														<Typography>
															<p className={classes.phead}>
																By {project.projecthead}
															</p>
														</Typography>
														{project.stat === "incomplete" ? (
															<IconButton
																className="icon-color"
																aria-label="mark as done"
																onClick={() => {
																	db.collection("projectlist")
																		.doc(project.id)
																		.update({
																			stat: "complete",
																		});
																}}
															>
																<DoneIcon />
															</IconButton>
														) : (
															<ClearIcon
																className="icon-color"
																aria-label="mark as incomplete"
																onClick={() => {
																	db.collection("projectlist")
																		.doc(project.id)
																		.update({
																			stat: "incomplete",
																		});
																}}
															/>
														)}
														<IconButton
															className="icon-color"
															aria-label="delete"
															onClick={() => {
																db.collection("projectlist")
																	.doc(project.id)
																	.delete();
															}}
														>
															<DeleteIcon />
														</IconButton>
													</CardActions>
												</Card>
											</ListItem>
										);
									})}
								</div>
							</List>
						</Col>
						<Col id="sidebar-column" xs={2} md={4}>
							<ProjectNoti projectlist={projectlist} />
							<CompletedProjects projectlist={projectlist} />
							<UrgentProject projectlist={projectlist} />
						</Col>
					</Row>
				</Container>
			</div>
		</Container>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		maxWidth: 350,
		width: 350,
		position: "relative",
	},

	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	phead: {
		verticalAlign: "bottom",
		color: "#696161",
		marginBottom: "0px",
	},
}));

export default Dashboard;

/**<img src={ImpIcon} alt="Urgent Icon" style={{ width: "25px" }}  /> */
