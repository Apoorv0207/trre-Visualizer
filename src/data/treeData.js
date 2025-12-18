export const treeData = {
  id: "root",
  label: "Root",
  children: [
    {
      id: "A",
      label: "A",
      meta: {
    owner: "Team A",
    type: "Group"
  },
      children: [
        { id: "A1", label: "A1", children: [] },
        { id: "A2", label: "A2", children: [] },
      ],
    },
    {
      id: "B",
      label: "B",
      children: [
        { id: "B1", label: "B1", children: [] },
        { id: "B2", label: "B2", children: [] },
      ],
    },
  ],
};
