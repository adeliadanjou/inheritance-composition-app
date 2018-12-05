function filterProject(myProjects, projectId) {
    return myProjects.filter((project) => {
        return project.id === projectId
    })[0]
}