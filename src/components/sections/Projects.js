import React, { Component } from 'react'

class Projects extends Component {
    myProjects = [
        {
            databaseId: "1a",
            name: "The Frogger Clone",
            year: 2017,
            technologies: "JavaScript, jQuery",
            description: "The first project game clone."
        },
        {
            databaseId: "2b",
            name: "iTravel",
            year: 2017,
            technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
            description: "Web App that allows logged in users to share their experiences about travel destinations."
        },
        {
            databaseId: "3c",
            name: "The Plan",
            year: 2017,
            technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
            description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
        }
    ]

    filterProject = (myProjects, propToCheck, projectId) => {
        return myProjects.filter((project) => {
            return project[propToCheck] === projectId
        })
    }

    render() {
        let chosenProjects

        if (this.props.match.params.id) {
            chosenProjects = this.filterProject(this.myProjects, "databaseId", this.props.match.params.id)
        }   else {
            chosenProjects = this.myProjects
        }

        return (
            <div>
                <p>The chosen project has this id: {this.props.match.params.id}</p>
                {
                    chosenProjects.map((project, index) => {
                        return (
                            <div key={project.id}>
                                <h1>{project.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects