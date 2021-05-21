import { Button, List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ImpIcon from "../../img/flag.svg";

import { db } from "../auth/Config";

const Dashboard = () => {
  const classes = useStyles();

  const [projectlist, setprojectlist] = useState([
    {
      enddate: "2021-00-00",
      id: "NONE",
      projectdesc: "This is a dummy project",
      projecthead: "Jason",
      projecttitle: "Dummy Title",
      teammembers: "1",
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
      {console.log(projectlist)}
      <List>
        <div className="project-container">
          {projectlist.map((project) => {
            return (
              <ListItem className="list-item">
                <Card className={classes.root}>
                  {project.urgentstatus ? (
                    <div className="urgent-container">
                      <img
                        src={ImpIcon}
                        alt="Urgent Icon"
                        style={{ width: "25px" }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <CardContent>
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
                    <Typography className={classes.pos} color="textSecondary">
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
                  <CardActions>
                    <Button disabled size="small">
                      by {project.projecthead}
                    </Button>
                  </CardActions>
                </Card>
              </ListItem>
            );
          })}
        </div>
      </List>
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
}));

export default Dashboard;
