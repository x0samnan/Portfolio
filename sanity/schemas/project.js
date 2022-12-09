export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: "title",
        title: "title",
        description: "Title of the project",
        type: "string",
      },
  
      {
        name: "summary",
        title: "Summary",
        type: "text",
      },
  
  
      {
        name: "technologies",
        title: "Technologies", 
        type: "array",
        of: [{type: "reference", to: { type: "skill" }}]
      },

      {
        name: "linkToBuild",
        title: "LinkToBuild",
        type: "url",
      },
    ],
}
  