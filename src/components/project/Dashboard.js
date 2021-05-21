import { IconButton, List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
import { Clear } from "@material-ui/icons";

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
                      <LabelImportantIcon />
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
                  <CardActions
                    style={{
                      justifyContent: "space-evenly",
                      backgroundColor: "rgb(211, 238, 247)",
                    }}
                  >
                    <Typography>
                      <p className={classes.phead}>By {project.projecthead}</p>
                    </Typography>
                    {project.stat === "incomplete" ? (
                      <IconButton
                        className="icon-color"
                        aria-label="mark as done"
                        onClick={() => {
                          db.collection("projectlist").doc(project.id).update({
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
                          db.collection("projectlist").doc(project.id).update({
                            stat: "incomplete",
                          });
                        }}
                      />
                    )}
                    <IconButton
                      className="icon-color"
                      aria-label="delete"
                      onClick={() => {
                        db.collection("projectlist").doc(project.id).delete();
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
