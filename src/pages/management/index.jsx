import React from "react";
import { Typography, Box, Card } from "@material-ui/core";
import VirtualizedTable from "../../components/table";

export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/getdata");
  const json = await request.json();

  return {
    props: {
      data: json,
    },
  };
}

export default function ReactVirtualizedTable({ data }) {
  const rows = data;
  return (
    <Box>
      <Typography variant="h5" component="h5" gutterBottom>
        Recruitment Management
      </Typography>
      <Card style={{ height: "70vh", width: "100%" }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={[
            {
              width: 200,
              label: "Name",
              dataKey: "name",
            },
            {
              width: 120,
              label: "Job",
              dataKey: "job",
              numeric: true,
            },
            {
              width: 120,
              label: "Age",
              dataKey: "age",
              numeric: true,
            },
            {
              width: 120,
              label: "Years Of Experience",
              dataKey: "yearsofexperience",
              numeric: true,
            },
            {
              width: 120,
              label: "Work Location",
              dataKey: "location",
              numeric: true,
            },
            {
              width: 120,
              label: "English",
              dataKey: "english",
              numeric: true,
            },
            {
              width: 120,
              label: "Skill",
              dataKey: "skill",
              numeric: true,
            },
          ]}
        />
      </Card>
    </Box>
  );
}
