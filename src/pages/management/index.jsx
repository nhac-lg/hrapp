export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/getdata");
  const json = await request.json();

  return {
    props: {
      data: json,
    },
  };
}

export default function Management() {
  return <h1>MANAGEMENT</h1>
}